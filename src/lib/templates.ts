import type { LucideIcon } from "lucide-react";
import {
  HardHat,
  Hammer,
  KeyRound,
  ShieldAlert,
} from "lucide-react";

export type CategoryId = "cpp" | "refurb" | "landlord" | "risk";

export const CATEGORIES: { id: CategoryId; label: string; icon: LucideIcon }[] = [
  { id: "cpp", label: "Construction Phase Plans", icon: HardHat },
  { id: "refurb", label: "Property Refurbishment Packs", icon: Hammer },
  { id: "landlord", label: "Landlord Compliance Docs", icon: KeyRound },
  { id: "risk", label: "Risk Assessment Templates", icon: ShieldAlert },
];

export type Template = {
  id: string;
  category: CategoryId;
  title: string;
  blurb: string;
  contents: string;
  price: string;
};

export const TEMPLATES: Template[] = [
  {
    id: "cpp-domestic",
    category: "cpp",
    title: "Construction Phase Plan — Domestic Refurb",
    blurb: "A plain-English CPP template sized for domestic jobs, with guidance notes in the margins.",
    contents: "Template + guidance + checklist",
    price: "From £9.99",
  },
  {
    id: "cpp-starter",
    category: "cpp",
    title: "CPP Starter Pack",
    blurb: "The plan plus a pre-start checklist and a short note on when a project is notifiable.",
    contents: "3 documents",
    price: "From £19.99",
  },
  {
    id: "cpp-induction",
    category: "cpp",
    title: "Site Induction & Toolbox Talks",
    blurb: "Induction record and a set of toolbox talk sheets to run alongside your phase plan.",
    contents: "Induction + 10 talk sheets",
    price: "From £14.99",
  },
  {
    id: "refurb-prestart",
    category: "refurb",
    title: "Refurb Pre-Start Pack",
    blurb: "Due-diligence and site-safety paperwork to sort before the first trade arrives.",
    contents: "4 documents",
    price: "From £24.99",
  },
  {
    id: "refurb-kitchen-bath",
    category: "refurb",
    title: "Kitchen & Bathroom Refurb Pack",
    blurb: "Scoped for wet-room and kitchen strip-outs — the jobs where paperwork gets skipped.",
    contents: "3 documents",
    price: "From £19.99",
  },
  {
    id: "refurb-full-house",
    category: "refurb",
    title: "Full House Renovation Pack",
    blurb: "The complete paperwork set for a whole-property refurbishment, start to handover.",
    contents: "6 documents",
    price: "From £39.99",
  },
  {
    id: "landlord-log",
    category: "landlord",
    title: "Landlord Compliance Log",
    blurb: "One tracker for certificates, inspections and renewal dates across your properties.",
    contents: "Tracker + guidance",
    price: "From £7.99",
  },
  {
    id: "landlord-hmo",
    category: "landlord",
    title: "HMO Documents Pack",
    blurb: "Record-keeping templates for houses in multiple occupation, in plain English.",
    contents: "5 documents",
    price: "From £24.99",
  },
  {
    id: "landlord-vetting",
    category: "landlord",
    title: "Contractor Vetting Pack",
    blurb: "Simple checks and records for landlords hiring trades — before work starts.",
    contents: "3 documents",
    price: "From £12.99",
  },
  {
    id: "risk-rams",
    category: "risk",
    title: "Risk Assessment & Method Statement",
    blurb: "A RAMS template small contractors can fill in without a consultant on the payroll.",
    contents: "RAMS + worked example",
    price: "From £9.99",
  },
  {
    id: "risk-coshh",
    category: "risk",
    title: "COSHH Assessment Template",
    blurb: "Step-by-step substance assessment sheet, structured around published HSE guidance.",
    contents: "Template + guidance",
    price: "From £7.99",
  },
  {
    id: "risk-height",
    category: "risk",
    title: "Working at Height Risk Assessment",
    blurb: "Pre-filled hazard prompts for ladders, towers and roof edges — edit to your job.",
    contents: "Template + checklist",
    price: "From £7.99",
  },
];
