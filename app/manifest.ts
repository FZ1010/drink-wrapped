import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Drink Wrapped",
    short_name: "DWrapped",
    description:
      "Just like spotify wrapped, I'll give you statistics about your drinkings",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
