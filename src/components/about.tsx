import { profile } from "@/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About() {
  return (
    <Section
      id="about"
      index="01 / About"
      title="Engineering with fundamentals first"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_22rem]">
        <Reveal>
          <div className="space-y-5 text-base leading-8 text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Core strengths
            </h3>
            <ul className="mt-5 space-y-4">
              {profile.strengths.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-6">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
