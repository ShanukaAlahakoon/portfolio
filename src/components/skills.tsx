import { skills } from "@/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" index="04 / Skills" title="Tools and technologies">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <li key={g.label}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <div className="h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {g.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-line-strong bg-bg px-3 py-1.5 text-sm text-ink/90"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
