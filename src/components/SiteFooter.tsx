import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import BrassStamp from "./BrassStamp";
import { ETSY_URL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <BrassStamp className="h-9 w-9 text-accent-ink" />
              <span className="font-display text-lg font-semibold text-primary">
                ProjectPack <span className="text-accent-ink">UK</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Get the paperwork sorted before the job starts. Editable CDM and
              property compliance templates for small UK businesses.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            {/* TODO: replace with real Etsy shop URL at launch */}
            <a
              href={ETSY_URL}
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent-ink"
            >
              Shop on Etsy
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="mailto:hello@projectpackuk.co.uk"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent-ink"
            >
              <Mail className="h-4 w-4" aria-hidden />
              hello@projectpackuk.co.uk
            </a>
            <Link href="/guide" className="text-ink/60 hover:text-primary">
              Build notes
            </Link>
          </div>
        </div>
        <p className="mt-12 border-t border-primary/10 pt-6 text-xs leading-relaxed text-ink/60">
          Templates are generic starting points for your own documentation, not
          bespoke advice, and must be adapted to your project. ProjectPack UK
          does not provide CDM consultancy services. Compliance with CDM 2015
          remains the duty holder&rsquo;s responsibility. ©{" "}
          {new Date().getFullYear()} ProjectPack UK.
        </p>
      </div>
    </footer>
  );
}
