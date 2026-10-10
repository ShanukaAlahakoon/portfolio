import { experience } from "@/data/profile";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" index="02 / Experience" title="Where I work now">
      <ol className="relative space-y-8 border-l border-line-strong pl-8">
        {experience.map((e) => (
          <li key={`${e.company}-${e.role}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[37px] top-8 flex h-4 w-4 items-center justify-center rounded-full border border-line-strong bg-bg"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${e.current ? "bg-emerald-400" : "bg-faint"}`}
              />
            </span>

            <Reveal>
              <article className="rounded-xl border border-line bg-surface p-7 transition-colors hover:border-line-strong sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {e.role}
                    </h3>
                    <p className="mt-1 text-base text-accent">{e.company}</p>
                  </div>
                  <p className="flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-muted">
                    {e.current && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      />
                    )}
                    {e.period}
                  </p>
                </div>

                <p className="mt-5 max-w-2xl leading-7 text-muted">
                  {e.summary}
                </p>

                {e.highlights.length > 0 && (
                  <ul className="mt-5 max-w-2xl space-y-2.5 text-sm leading-6 text-muted">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 h-px w-4 shrink-0 bg-faint"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
