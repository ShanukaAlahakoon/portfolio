import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview card shown when the link is shared on LinkedIn, WhatsApp,
// Facebook, X and similar. Generated at build time.
export default function OpenGraphImage() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(circle at 85% 10%, #14233f 0%, #08090b 55%)",
        color: "#f4f4f5",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 12,
            border: "2px solid #2a2f39",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          {initials}
        </div>
        <div style={{ fontSize: 28, color: "#9ca3af" }}>Portfolio</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#7aa2ff" }}>
          {`${profile.role} at ${profile.company}`}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#9ca3af",
            maxWidth: 900,
          }}
        >
          {profile.headline}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#6b7280",
        }}
      >
        Full-stack web | Applied AI | Sri Lanka
      </div>
    </div>,
    { ...size },
  );
}
