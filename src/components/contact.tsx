import { profile } from "@/data/profile";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { Reveal } from "./reveal";
import { Section } from "./section";

const channels = [
  {
    label: "LinkedIn",
    value: "shanuka-alahakoon",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "ShanukaAlahakoon",
    href: profile.github,
    Icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact" index="07 / Contact" title="Get in touch">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface p-8 sm:p-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative">
            <p className="max-w-xl text-lg leading-8 text-muted">
              Open to conversations about software engineering roles, projects,
              and collaboration. The fastest way to reach me is by email.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-3 break-all text-xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-3xl"
            >
              <MailIcon className="h-6 w-6 shrink-0 text-accent" />
              {profile.email}
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Send an email
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-line bg-bg px-5 py-4 transition-colors hover:border-line-strong hover:text-accent"
                  >
                    <Icon className="text-faint" />
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                        {label}
                      </span>
                      <span className="text-sm font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
