import BrassStamp from "./BrassStamp";
import { ETSY_URL } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
      <a href="#top" className="flex items-center gap-2.5">
        <BrassStamp className="h-9 w-9 text-accent-ink" />
        <span className="font-display text-lg font-semibold tracking-tight text-primary">
          ProjectPack <span className="text-accent-ink">UK</span>
        </span>
      </a>
      <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium text-ink/80 sm:flex">
        <a href="#how" className="hover:text-primary">How it works</a>
        <a href="#archive" className="hover:text-primary">The library</a>
        <a href="#why" className="hover:text-primary">Why us</a>
        <a href="#faq" className="hover:text-primary">FAQ</a>
      </nav>
      {/* TODO: replace with real Etsy shop URL at launch */}
      <a
        href={ETSY_URL}
        className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-primary/90"
      >
        Etsy shop
      </a>
    </header>
  );
}
