"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-off-white py-28">
      <Container className="max-w-2xl text-center">
        <p className="font-heading text-sm tracking-[0.2em] text-orange uppercase">
          Something went wrong
        </p>
        <h1 className="mt-4 font-heading text-4xl text-navy">We hit an unexpected fault.</h1>
        <p className="mt-4 text-steel-gray">
          Please try again. If the issue continues, email info@infinityesc.com.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="outline">
            Go home
          </Button>
        </div>
      </Container>
    </section>
  );
}
