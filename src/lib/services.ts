import {
  Smile,
  Sparkles,
  Shield,
  Activity,
  Baby,
  Crown,
  Stethoscope,
  Syringe,
} from "lucide-react";

export const SERVICES = [
  {
    id: "cleaning",
    name: "Cleaning & Hygiene",
    icon: Sparkles,
    desc: "Professional scaling, polish and personalised hygiene coaching.",
  },
  {
    id: "whitening",
    name: "Teeth Whitening",
    icon: Smile,
    desc: "Safe in-clinic whitening for a brighter, confident smile.",
  },
  {
    id: "braces",
    name: "Braces & Aligners",
    icon: Activity,
    desc: "Modern orthodontics — metal, ceramic and clear aligners.",
  },
  {
    id: "implants",
    name: "Dental Implants",
    icon: Crown,
    desc: "Permanent, natural-looking tooth replacements.",
  },
  {
    id: "root-canal",
    name: "Root Canal Therapy",
    icon: Syringe,
    desc: "Painless endodontic treatment to save your natural teeth.",
  },
  {
    id: "pediatric",
    name: "Pediatric Dentistry",
    icon: Baby,
    desc: "Gentle care for your little ones in a friendly setting.",
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    icon: Shield,
    desc: "Veneers, bonding and smile makeovers tailored to you.",
  },
  {
    id: "emergency",
    name: "Emergency Care",
    icon: Stethoscope,
    desc: "Same-day relief when you need it most.",
  },
] as const;

export type ServiceId = (typeof SERVICES)[number]["id"];
