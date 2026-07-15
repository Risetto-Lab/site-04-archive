import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide — ProjectPack UK Template Library",
  description: "Build notes for the ProjectPack UK template-library showcase site.",
};

const PALETTE = [
  { hex: "#F7F3EA", label: "Background — warm paper" },
  { hex: "#1F3A2E", label: "Primary — forest green" },
  { hex: "#B08D57", label: "Accent — brass (decorative)" },
  { hex: "#7D5F33", label: "Accent ink — brass darkened for text" },
  { hex: "#2B2B26", label: "Ink" },
  { hex: "#D9CDB8", label: "Card tint" },
];

const LIBRARIES = ["next", "tailwindcss", "gsap", "lucide-react"];

export default function GuidePage() {
  return (
    <main className="min-h-[100svh] w-full bg-bg px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-ink/50">
          Site Factory — Site 04
        </span>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          The Archive
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          A template-library showcase for ProjectPack UK — a catalogue of CDM
          and property compliance templates presented as a filterable archive,
          built around GSAP&rsquo;s Flip plugin.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-primary">Aesthetic</h2>
          <p className="mt-2 text-ink/70">
            Archive / stationery — warm paper background with an SVG
            feTurbulence grain overlay (no image asset), deep forest green,
            brass rubber-stamp motifs, and card-catalogue template cards on a
            parchment tint.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Advanced technique</h2>
          <p className="mt-2 text-ink/70">
            GSAP Flip re-flows the template grid when the sticky category tabs
            change: all cards stay mounted, visibility is toggled by class,
            and <code className="rounded bg-card px-1.5 py-0.5 text-sm">Flip.getState</code> is
            captured in the click handler before React re-renders, then{" "}
            <code className="rounded bg-card px-1.5 py-0.5 text-sm">Flip.from</code> runs in a
            layout effect with <code className="rounded bg-card px-1.5 py-0.5 text-sm">absolute: true</code>{" "}
            and onEnter/onLeave fades. Each card also has a stamp-in hover — a
            brass stamp dropping in with{" "}
            <code className="rounded bg-card px-1.5 py-0.5 text-sm">back.out(4)</code> for a thud.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Palette</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {PALETTE.map((c) => (
              <div
                key={c.hex}
                className="flex items-center gap-2 rounded-full bg-card/60 py-1.5 pl-1.5 pr-4 ring-1 ring-ink/10"
              >
                <span
                  className="h-7 w-7 rounded-full border border-ink/10"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <span className="text-xs font-bold text-ink/70">
                  {c.hex} <span className="font-normal text-ink/50">— {c.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Type pairing</h2>
          <p className="mt-2 text-ink/70">
            <span className="font-display font-bold">IBM Plex Serif</span> (500–700)
            for display, <span className="font-bold">IBM Plex Sans</span> (400–600)
            for body — via{" "}
            <code className="rounded bg-card px-1.5 py-0.5 text-sm">next/font/google</code>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Libraries</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {LIBRARIES.map((lib) => (
              <span
                key={lib}
                className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-ink/70"
              >
                {lib}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Assets</h2>
          <p className="mt-2 text-ink/70">
            Zero image assets: the brass stamp is a hand-built inline SVG
            (double ring, arc textPath, document glyph) reused at three sizes,
            the paper grain is an inline SVG feTurbulence filter in a CSS
            data-URI, and category icons are Lucide.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-primary">Lessons</h2>
          <p className="mt-2 text-ink/70">
            For Flip in React, keep filtered-out cards mounted and toggle a{" "}
            <code className="rounded bg-card px-1.5 py-0.5 text-sm">hidden</code> class —
            unmounting removes the elements before onLeave can animate them.
            The brief&rsquo;s brass accent (#B08D57) is ~2.6:1 on the paper
            background, so it stays decorative and a darkened #7D5F33 variant
            handles every text use.
          </p>
        </section>

        <Link
          href="/"
          className="font-display mt-14 inline-block text-lg font-bold text-accent-ink hover:underline"
        >
          ← Back to the library
        </Link>
      </div>
    </main>
  );
}
