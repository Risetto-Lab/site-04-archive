import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Are these templates CDM 2015 compliant?",
    a: "Compliance belongs to a project, not a document — so no template can be “compliant” out of the box, and we don’t claim ours are. What you get is a structured, plain-English starting point built around published HSE guidance, ready for you to adapt to your own job.",
  },
  {
    q: "What format do the templates come in?",
    a: "Editable Word documents (.docx), with some trackers supplied as spreadsheets. Open them in Word, Google Docs or LibreOffice, fill in your project details, and print or save as PDF.",
  },
  {
    q: "Who are they written for?",
    a: "Small UK contractors, sole-trader builders, domestic refurbishment specialists, and landlords or property investors running refurbs. If you don’t have a compliance team, this library is for you.",
  },
  {
    q: "Where does the content come from?",
    a: "Public sources only: HSE publications such as the CDM 2015 Approved Code of Practice and the HSG guidance series, plus gov.uk material. We keep a sources log for every template.",
  },
  {
    q: "Can you review the documents for my specific project?",
    a: "No — we sell generic templates, not consultancy. If your project needs tailored advice, engage a competent CDM advisor. That separation keeps the templates affordable.",
  },
  {
    q: "How do I buy?",
    a: "Everything is sold as an instant digital download through our Etsy shop. Refunds and buyer protection follow the shop policies listed there.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-ink">FAQ</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Straight answers.
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-primary/10 border-y border-primary/10">
        {FAQS.map((item) => (
          <details key={item.q} className="faq group py-5">
            <summary className="flex items-center justify-between gap-4 font-display text-lg font-semibold text-primary">
              {item.q}
              <Plus className="faq-icon h-5 w-5 shrink-0 text-accent-ink" aria-hidden />
            </summary>
            <p className="mt-3 max-w-prose leading-relaxed text-ink/75">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
