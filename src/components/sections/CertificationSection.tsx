import Image from "next/image";
import { certifications } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function CertificationSection() {
  const ignition = certifications.find((item) => item.id === "ignition");
  const others = certifications.filter((item) => item.id !== "ignition");

  if (!ignition) return null;

  return (
    <section
      className="relative overflow-hidden bg-surface-dark py-16 text-white md:py-24"
      aria-labelledby="cert-heading"
    >
      <div aria-hidden="true" className="absolute top-0 left-0 h-full w-[3px] bg-orange" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div className="mx-auto flex max-w-sm items-center justify-center bg-white p-10 md:p-12">
            {ignition.image ? (
              <Image
                src={ignition.image}
                alt={ignition.imageAlt ?? ignition.title}
                width={280}
                height={280}
                className="h-auto w-full max-w-[200px] object-contain"
              />
            ) : null}
          </div>

          <div>
            <p className="eyebrow text-orange">Credentials</p>
            <h2 id="cert-heading" className="heading-section mt-3 text-white">
              {ignition.title}
            </h2>
            <p className="body-copy mt-4 max-w-xl text-white/70">{ignition.description}</p>

            <ul className="mt-8 divide-y divide-white/12 border-y border-white/12">
              {others.map((cert, index) => (
                <li key={cert.id} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                  <span className="font-mono-tech text-xs text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-white md:text-xl">{cert.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65 md:text-base">
                      {cert.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono-tech text-[0.65rem] text-white/35 uppercase">
              Verification link available on request
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
