import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

/**
 * Drop-in image lookup. If a file named `<slug>.<ext>` exists in
 * `public/<folder>/`, its public URL is returned; otherwise null.
 *
 * Example: public/certificates/ai-ml.jpg  ->  "/certificates/ai-ml.jpg"
 */
export function findImage(folder: string, slug: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", folder, `${slug}.${ext}`);
    if (fs.existsSync(file)) return `/${folder}/${slug}.${ext}`;
  }
  return null;
}
