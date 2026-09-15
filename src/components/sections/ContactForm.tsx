"use client";

import { useState } from "react";
import { contactFormSchema, serviceNeededOptions } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

const initialValues = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  serviceNeeded: "",
  projectDescription: "",
  preferredContactMethod: "email",
  consent: false,
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<FormState>({ status: "idle" });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ status: "loading" });

    const parsed = contactFormSchema.safeParse({
      ...values,
      consent: values.consent,
      preferredContactMethod: values.preferredContactMethod as "email" | "phone" | "either",
    });

    if (!parsed.success) {
      setState({
        status: "error",
        message: "Please correct the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as {
        message?: string;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok) {
        setState({
          status: "error",
          message: data.message ?? "Unable to submit the form right now.",
          fieldErrors: data.fieldErrors,
        });
        return;
      }

      setValues(initialValues);
      setState({
        status: "success",
        message: data.message ?? "Your inquiry has been received.",
      });
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again or email us directly.",
      });
    }
  };

  const fieldError = (name: string) =>
    state.status === "error" ? state.fieldErrors?.[name]?.[0] : undefined;

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={onChange}
          error={fieldError("fullName")}
          autoComplete="name"
          required
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          error={fieldError("email")}
          autoComplete="email"
          required
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={onChange}
          error={fieldError("company")}
          autoComplete="organization"
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={onChange}
          error={fieldError("phone")}
          autoComplete="tel"
          required
        />
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="mb-2 block text-sm font-medium text-navy">
          Service needed
        </label>
        <select
          id="serviceNeeded"
          name="serviceNeeded"
          value={values.serviceNeeded}
          onChange={onChange}
          required
          className={inputClass(Boolean(fieldError("serviceNeeded")))}
        >
          <option value="">Select a service</option>
          {serviceNeededOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldMessage message={fieldError("serviceNeeded")} />
      </div>

      <div>
        <label
          htmlFor="projectDescription"
          className="mb-2 block text-sm font-medium text-navy"
        >
          Project description
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          value={values.projectDescription}
          onChange={onChange}
          required
          rows={5}
          className={inputClass(Boolean(fieldError("projectDescription")))}
        />
        <FieldMessage message={fieldError("projectDescription")} />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy">Preferred contact method</legend>
        <div className="flex flex-wrap gap-4">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ].map((option) => (
            <label key={option.value} className="inline-flex min-h-11 items-center gap-2">
              <input
                type="radio"
                name="preferredContactMethod"
                value={option.value}
                checked={values.preferredContactMethod === option.value}
                onChange={onChange}
                className="size-4 accent-orange"
              />
              <span className="text-sm text-navy">{option.label}</span>
            </label>
          ))}
        </div>
        <FieldMessage message={fieldError("preferredContactMethod")} />
      </fieldset>

      <label className="flex min-h-11 items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={onChange}
          className="mt-1 size-4 accent-orange"
          required
        />
        <span className="text-sm text-steel-gray">
          I agree to be contacted about this inquiry and understand Infinity Engineering
          Services will use my details to respond.
        </span>
      </label>
      <FieldMessage message={fieldError("consent")} />

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={values.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="text-xs text-steel-gray">
        We respect your privacy. Your information is used only to respond to this inquiry.
      </p>

      <Button type="submit" size="lg" disabled={state.status === "loading"} className="w-full md:w-auto">
        {state.status === "loading" ? "Sending…" : "Send inquiry"}
      </Button>

      {state.status === "success" ? (
        <p className="border border-electric/30 bg-electric/10 px-4 py-3 text-sm text-navy" role="status">
          {state.message}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="border border-orange/40 bg-orange/10 px-4 py-3 text-sm text-navy" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className={inputClass(Boolean(error))}
      />
      <FieldMessage message={error} />
    </div>
  );
}

function FieldMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-orange">{message}</p>;
}

function inputClass(hasError: boolean) {
  return cn(
    "min-h-12 w-full border bg-white px-4 text-navy outline-none transition focus:border-orange",
    hasError ? "border-orange" : "border-navy/15",
  );
}
