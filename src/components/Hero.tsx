import { ArrowDown } from "lucide-react";
import BrassStamp from "./BrassStamp";
import Reveal from "./Reveal";
import { ETSY_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24">
      <BrassStamp
        showText
        className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rotate-12 text-accent/25 sm:-right-8 sm:h-80 sm:w-80"
      />

      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-ink">
          CDM &amp; property templates · UK
        </p>
        <h1 className="font-display mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">
          A library of compliance, made simple.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
          Editable CDM and property paperwork for small UK contractors,
          refurbishers and landlords. Plain English. Built from public HSE
          guidance. Get the paperwork sorted before the job starts.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#archive"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-bg transition-colors hover:bg-primary/90"
          >
            Browse the library
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          {/* TODO: replace with real Etsy shop URL at launch */}
          <a
            href={ETSY_URL}
            className="rounded-full border-2 border-primary/25 px-6 py-3 font-semibold text-primary transition-colors hover:border-primary/60"
          >
            Visit the Etsy shop
          </a>
        </div>
      </Reveal>
    </section>
  );
}
