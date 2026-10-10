import Image from "next/image";
import { profile } from "@/data/profile";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="hero-glow absolute inset-0" />
      <div aria-hidden className="bg-grid absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 sm:pb-32 sm:pt-24 lg:grid-cols-[1fr_22rem]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 px-4 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.role} at{" "}
            <span className="font-medium text-ink">{profile.company}</span>
          </p>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium tracking-tight text-accent sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowUpRightIcon />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon />
              Download CV
            </a>
            <div className="ml-1 flex items-center gap-1 text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-md p-2.5 transition-colors hover:text-ink"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-md p-2.5 transition-colors hover:text-ink"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 divide-x divide-line border-y border-line">
            {profile.stats.map((s) => (
              <div key={s.label} className="px-4 py-5 first:pl-0">
                <dd className="text-2xl font-semibold tracking-tight">
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs text-faint">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/40">
            {/* Natural aspect ratio: the photo is never cropped */}
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={900}
              height={1100}
              priority
              sizes="(min-width: 1024px) 22rem, 20rem"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
