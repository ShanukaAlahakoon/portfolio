import { certifications } from "@/data/profile";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="06 / Certifications"
      title="Certifications"
      lead="Formal training in full-stack development, machine learning, APIs, and software testing."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {c.issuer}
                </p>
                <h3 className="mt-4 text-base font-medium leading-7">
                  {c.title}
                </h3>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    Verify credential
                    <ArrowUpRightIcon />
                  </a>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
