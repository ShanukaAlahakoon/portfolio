import { profile } from "@/data/profile";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const initials = profile.name
  .split(" ")
  .filter(Boolean)
  .map((word) => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong font-mono text-xs font-semibold">
            {initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={profile.cv}
            download
            className="rounded-md border border-line-strong px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
