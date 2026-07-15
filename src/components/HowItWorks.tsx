import { Search, PenLine, HardHat } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Pick your pack",
    body: "Filter the library by what you're doing — a phase plan, a refurb, a rental, a risk assessment.",
  },
  {
    icon: PenLine,
    title: "Make it yours",
    body: "Download the editable Word files and fill in your project details. Guidance notes show you what goes where.",
  },
  {
    icon: HardHat,
    title: "Start on site",
    body: "Print it or keep it digital. The paperwork is sorted before the first trade turns up.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-y border-primary/10 bg-card/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3 sm:gap-8 sm:px-10 sm:py-20">
        {STEPS.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1}>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-bg">
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-display text-sm font-semibold text-accent-ink">
                  0{i + 1}
                </span>
              </div>
              <h2 className="font-display mt-4 text-xl font-semibold text-primary">
                {step.title}
              </h2>
              <p className="mt-2 leading-relaxed text-ink/75">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
