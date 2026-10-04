import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DROVYR — Intelligence in Motion",
    short_name: "DROVYR",
    description: "Operational intelligence and AI automation for growing service businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1A",
    theme_color: "#0A0F1A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
