import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  { id: "editors-choice", label: "Editor's Choice", shortLabel: "Editor's Choice", description: "Our strongest overall choice for a well-timed Venice cruise day." },
  { id: "best-historic", label: "Best Historic Experience", shortLabel: "Historic", description: "St Mark's, the Doge's Palace and Venice through the centuries." },
  { id: "best-independent", label: "Best Independent Experience", shortLabel: "Walk It Yourself", description: "A realistic self-guided Classic Venice day — when independence is genuinely best." },
  { id: "best-coastal", label: "Best Lagoon Islands", shortLabel: "Lagoon", description: "Murano and Burano when hours ashore allow organised boat logistics." },
  { id: "best-view", label: "Best Views", shortLabel: "Views", description: "Grand Canal vistas, basin light and quieter photo pauses." },
  { id: "best-got", label: "Signature Experience", shortLabel: "Signature", description: "Our future Venice small-group flagship, currently in preparation." },
  { id: "best-families", label: "Best for Families", shortLabel: "Families", description: "Manageable walks and colourful island days with sensible pacing." },
  { id: "best-photography", label: "Best Photography", shortLabel: "Photography", description: "Canals, bridges and lagoon light." },
  { id: "best-food", label: "Best Food & Wine", shortLabel: "Food & Wine", description: "Cicchetti, bàcari and Venetian flavours." },
  { id: "best-luxury", label: "Best Private Tour", shortLabel: "Private", description: "Gondolas, artisans and flexible pacing for your own party." },
  { id: "hidden-gem", label: "Hidden Gem", shortLabel: "Hidden Gem", description: "Quieter campi and canals beyond the busiest postcard corners." },
  { id: "best-value", label: "Best Value", shortLabel: "Best Value", description: "A rewarding port day without unnecessary expense." },
  { id: "best-short-port", label: "Best Short Port Call", shortLabel: "Short Port", description: "Focused St Mark's highlights when usable hours are limited." },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description: "Venice Highlights & St Mark's — the strongest introduction for first-time cruise visitors.",
    href: "/shore-excursions/venice-highlights-st-marks",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "⛵",
    label: "Best First-Time Tour",
    description: "Venice Highlights for first-time visitors who want context and free time afterwards.",
    href: "/shore-excursions/venice-highlights-st-marks",
    cta: "Discover Venice",
  },
  {
    id: "historic",
    emoji: "🎭",
    label: "Best Historic Walk",
    description: "Venice Walking Tour — campi, canals and bridges at a human pace.",
    href: "/shore-excursions/venice-walking-tour",
    cta: "Explore on foot",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food Experience",
    description: "Cicchetti bars and taverns — Venetian flavours beyond the postcard queues.",
    href: "/shore-excursions/cicchetti-bars-tour",
    cta: "Taste Venice",
  },
  {
    id: "private",
    emoji: "🚤",
    label: "Best Lagoon Day",
    description: "Murano and Burano when your port call supports the boat time.",
    href: "/compare/venice-or-lagoon-islands",
    cta: "Compare Venice vs islands",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description: "Grand Canal light and the viewpoints that repay patience.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description: "Colourful Burano and manageable island pacing for mixed-age parties.",
    href: "/shore-excursions/murano-burano-islands",
    cta: "See lagoon islands",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description: "Classic Venice independently — St Mark's, Rialto, cicchetti and quiet canals.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Venice Discovery",
    description: "A future maximum-eight-guest Venice day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
