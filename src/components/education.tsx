import { education } from "@/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" index="05 / Education" title="Education">
      <ol className="grid gap-5 lg:grid-cols-3">
        {education.map((e, i) => (
          <li key={e.title}>
            <Reveal delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-7 transition-colors hover:border-line-strong">
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {e.institution}
                </p>
                {e.note && (
                  <p className="mt-auto pt-5 text-sm font-medium text-ink">
                    {e.note}
                  </p>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
