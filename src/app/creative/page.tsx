import React from "react";
import { generateMetadata } from "@/lib/utils";
import { CreativeClient } from "@/components/creative/CreativeClient";

export const metadata = generateMetadata({
  title: "Creative Work | Gilang Wirapati",
  description: "Portfolio fotografi, videografi, dan konten kreatif lainnya dari Gilang Wirapati.",
  url: "/creative",
});

export default function CreativePage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-extrabold mb-4 mt-8">Creative Work</h1>
      <p className="text-xl text-muted-foreground mb-16 max-w-3xl">Koleksi karya fotografi, videografi, dan produksi konten visual yang menangkap cerita dari berbagai perspektif dan momen.</p>

      <CreativeClient />
    </main>
  );
}
