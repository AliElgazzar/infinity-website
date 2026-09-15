import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy py-28 text-white">
      <BlueprintGrid opacity={0.28} />
      <Container className="relative text-center">
        <p className="eyebrow justify-center text-orange">404 — Route not found</p>
        <h1 className="heading-display mx-auto mt-4 max-w-3xl">This route is offline.</h1>
        <p className="body-copy mx-auto mt-5 max-w-xl text-white/70">
          The page you’re looking for doesn’t exist or has moved. Return to the homepage or contact
          the team to continue your project conversation.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
        <p className="mt-10 text-sm text-white/45">
          Or browse{" "}
          <Link href="/services" className="text-electric hover:text-orange">
            services
          </Link>
          ,{" "}
          <Link href="/projects" className="text-electric hover:text-orange">
            projects
          </Link>
          , or{" "}
          <Link href="/about" className="text-electric hover:text-orange">
            about
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
