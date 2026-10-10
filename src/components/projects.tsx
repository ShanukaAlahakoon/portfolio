import Image from "next/image";
import { projects } from "@/data/profile";
import { findImage } from "@/lib/images";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03 / Projects"
      title="Selected work"
      lead="Full-stack applications and applied AI systems, built end to end."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const isLastOdd =
            i === projects.length - 1 && projects.length % 2 === 1;
          const screenshot = findImage("projects", p.slug);
          return (
            <li key={p.title} className={isLastOdd ? "md:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 100} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-2">
                  {screenshot && (
                    <ScreenshotFrame href={p.demo} title={p.title}>
                      <Image
                        src={screenshot}
                        alt={`Screenshot of ${p.title}`}
                        fill
                        sizes={
                          isLastOdd
                            ? "(min-width: 768px) 64rem, 100vw"
                            : "(min-width: 768px) 32rem, 100vw"
                        }
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </ScreenshotFrame>
                  )}
                  <div className="flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                        {p.category}
                      </p>
                      <p className="font-mono text-xs text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">{p.summary}</p>

                    <details className="group/details mt-5">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                        Key features
                        <span
                          aria-hidden
                          className="text-faint transition-transform group-open/details:rotate-90"
                        >
                          &rsaquo;
                        </span>
                      </summary>
                      <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mt-2.5 h-px w-4 shrink-0 bg-faint"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </details>

                    <div className="mt-auto pt-7">
                      <ul className="flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <li
                            key={t}
                            className="rounded-md border border-line-strong bg-bg px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>

                      {(p.github || p.demo) && (
                        <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-line pt-5 text-sm font-medium">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                            >
                              <GithubIcon />
                              Source
                            </a>
                          )}
                          {p.demo && (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                            >
                              Live demo
                              <ArrowUpRightIcon />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function ScreenshotFrame({
  href,
  title,
  children,
}: {
  href?: string;
  title: string;
  children: React.ReactNode;
}) {
  const frame =
    "relative block aspect-[16/10] w-full overflow-hidden border-b border-line bg-bg";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo of ${title}`}
        className={frame}
      >
        {children}
      </a>
    );
  }
  return <div className={frame}>{children}</div>;
}
