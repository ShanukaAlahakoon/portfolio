import { profile } from "@/data/profile";

export async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
}
