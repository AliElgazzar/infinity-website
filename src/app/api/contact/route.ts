import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitizeContactPayload } from "@/lib/sanitize";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    const limit = checkRateLimit(`contact:${ip}`, 5, 60_000);
    if (!limit.allowed) {
      return NextResponse.json(
        {
          message: `Too many requests. Please try again in ${limit.retryAfterSec} seconds.`,
        },
        {
          status: 429,
          headers: { "Retry-After": String(limit.retryAfterSec) },
        },
      );
    }

    const json: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Honeypot trip — pretend success without sending.
    if (parsed.data.website) {
      return NextResponse.json({
        message: "Thank you. Your inquiry has been received.",
      });
    }

    const data = sanitizeContactPayload(parsed.data);
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@infinityesc.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@infinityesc.com";

    if (!resendKey) {
      if (process.env.NODE_ENV === "development") {
        console.info("[contact-form:dev-fallback]", {
          to: toEmail,
          from: fromEmail,
          ...data,
          website: undefined,
        });
        return NextResponse.json({
          message:
            "Form validated successfully. Email delivery is not configured yet — message logged in development only.",
        });
      }

      return NextResponse.json(
        {
          message:
            "The contact form is not fully configured for email delivery yet. Please email info@infinityesc.com directly.",
        },
        { status: 503 },
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `New project inquiry from ${data.fullName}`,
        text: [
          `Name: ${data.fullName}`,
          `Email: ${data.email}`,
          `Company: ${data.company}`,
          `Phone: ${data.phone}`,
          `Service needed: ${data.serviceNeeded}`,
          `Preferred contact: ${data.preferredContactMethod}`,
          "",
          "Project description:",
          data.projectDescription,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        {
          message:
            "We could not send your message right now. Please email info@infinityesc.com.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thank you. Your inquiry has been sent to Infinity Engineering Services.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error. Please try again later." },
      { status: 500 },
    );
  }
}
