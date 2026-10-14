import { profile, skills } from "@/data/profile";
import { siteUrl } from "@/lib/site";

// Structured data (schema.org Person) so search engines can connect this
// site with the GitHub and LinkedIn profiles and understand the role.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        url: siteUrl,
        jobTitle: profile.role,
        description: profile.intro,
        worksFor: {
          "@type": "Organization",
          name: profile.company,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "South Eastern University of Sri Lanka",
        },
        knowsAbout: skills.flatMap((group) => group.items),
        sameAs: [profile.github, profile.linkedin],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag early
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
