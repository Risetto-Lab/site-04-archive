"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ArrowUpRight } from "lucide-react";
import BrassStamp from "./BrassStamp";
import { CATEGORIES, TEMPLATES, type CategoryId } from "@/lib/templates";
import { ETSY_URL } from "@/lib/site";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(Flip);

type Filter = CategoryId | "all";

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "All templates" },
  ...CATEGORIES.map((c) => ({ id: c.id as Filter, label: c.label })),
];

export default function Archive() {
  const [filter, setFilter] = useState<Filter>("all");
  const gridRef = useRef<HTMLUListElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const reduced = useReducedMotion();

  function handleFilter(next: Filter) {
    if (next === filter) return;
    if (!reduced && gridRef.current) {
      flipState.current = Flip.getState(
        gridRef.current.querySelectorAll("[data-flip-card]")
      );
    }
    setFilter(next);
  }

  useLayoutEffect(() => {
    if (!flipState.current) return;
    Flip.from(flipState.current, {
      duration: 0.55,
      ease: "power2.inOut",
      scale: true,
      absolute: true,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        ),
      onLeave: (els) =>
        gsap.to(els, { opacity: 0, scale: 0.88, duration: 0.3, ease: "power2.in" }),
    });
    flipState.current = null;
  }, [filter]);

  function stampIn(card: HTMLElement) {
    if (reduced) return;
    const stamp = card.querySelector("[data-stamp]");
    if (!stamp) return;
    // Thud: drop in from above with a hard back-ease settle
    gsap.fromTo(
      stamp,
      { scale: 1.7, rotation: -14, opacity: 0 },
      { scale: 1, rotation: -6, opacity: 1, duration: 0.38, ease: "back.out(4)", overwrite: true }
    );
  }

  return (
    <section id="archive" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-ink">
        The archive
      </p>
      <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Every template, one shelf.
      </h2>

      <div className="sticky top-0 z-40 -mx-6 mt-8 border-b border-primary/10 bg-bg/95 px-6 py-3 backdrop-blur sm:-mx-10 sm:px-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter templates by category">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={filter === tab.id}
              onClick={() => handleFilter(tab.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === tab.id
                  ? "bg-primary text-bg"
                  : "bg-card/60 text-ink/75 hover:bg-card"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <ul ref={gridRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((t) => {
          const cat = CATEGORIES.find((c) => c.id === t.category)!;
          const visible = filter === "all" || filter === t.category;
          return (
            <li
              key={t.id}
              data-flip-card
              className={visible ? "" : "hidden"}
              onMouseEnter={(e) => stampIn(e.currentTarget)}
            >
              <article className="group relative flex h-full flex-col rounded-xl border border-primary/10 bg-card/50 p-6 transition-colors hover:border-accent/60">
                <BrassStamp
                  data-stamp
                  className="absolute right-4 top-4 h-12 w-12 -rotate-6 text-accent/50"
                />
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-ink">
                  {cat.label}
                </p>
                <h3 className="font-display mt-1.5 text-lg font-semibold leading-snug text-primary">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{t.blurb}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                  <span className="text-ink/60">{t.contents}</span>
                  <span className="font-semibold text-primary">{t.price}</span>
                </div>
                {/* TODO: replace with real Etsy shop URL at launch */}
                <a
                  href={ETSY_URL}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink hover:text-primary"
                >
                  View on Etsy
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="absolute inset-0" aria-hidden />
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
