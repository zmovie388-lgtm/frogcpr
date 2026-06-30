import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FROG X PRO — Font Style Generator & Text Tools (APK Download)" },
      {
        name: "description",
        content:
          "Download FROG X PRO APK — 1000+ stylish fonts, fancy text, symbols, unicode fonts and nickname generator. Fast, safe & free for Android 8+.",
      },
      { property: "og:title", content: "FROG X PRO — Font Style Generator & Text Tools" },
      {
        property: "og:description",
        content:
          "1000+ stylish fonts, fancy text, symbols & nickname generator. Download the APK now.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/frogxpro.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#02030a", color: "#cfe6ff", display: "grid", placeItems: "center", fontFamily: "system-ui, sans-serif" }}>
      <p>Loading FROG X PRO…</p>
    </div>
  );
}

