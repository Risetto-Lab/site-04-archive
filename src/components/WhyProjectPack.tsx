import { BookOpenCheck, FileEdit, MapPin, Scale } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: BookOpenCheck,
    title: "Built from the public record",
    body: "Every template starts from published HSE guidance — the CDM 2015 Approved Code of Practice and the HSG guidance series — plus gov.uk material. Public sources, rewritten in plain English.",
  },
  {
    icon: FileEdit,
    title: "Editable, not locked",
    body: "You get Word documents you can open, edit and reuse. No portals, no subscriptions, no per-seat licences.",
  },
  {
    icon: MapPin,
    title: "UK-specific",
    body: "Written for UK regulations, UK terminology and UK-sized jobs — not a US template with the spelling changed.",
  },
  {
    icon: Scale,
    title: "Honest about what a template is",
    body: "These are structured starting points, not bespoke advice. You adapt them to your project. For tailored guidance, engage a competent CDM advisor.",
  },
];

export default function WhyProjectPack() {
  return (
    <section id="why" className="border-y border-primary/10 bg-primary text-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Why ProjectPack
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Small-business paperwork, without the consultancy price tag.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-bg/80">
            We built this library for the jobs where a £200-a-document consultancy
            pack doesn&rsquo;t make sense — but turning up without paperwork
            doesn&rsquo;t either.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bg/10 text-accent">
                  <point.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bg/75">{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
