import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <header className="max-w-2xl">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span>{index}</span>
              <span aria-hidden className="h-px w-10 bg-line-strong" />
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {lead && (
              <p className="mt-4 text-base leading-7 text-muted">{lead}</p>
            )}
          </header>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
