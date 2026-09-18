/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Venice take you? Choose the experience that fits your hours ashore — then build everything around your ship's schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "Classic Venice on foot — canals, St Mark's, Rialto and hidden squares at your own pace.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Venice Highlights & St Mark's — the strongest first-time guided introduction.",
    href: "/shore-excursions/venice-highlights-st-marks",
    icon: "route",
  },
  {
    id: "history",
    title: "History",
    body: "Maritime republic, mosaics and palace intrigue through the centuries.",
    href: "/shore-excursions/doges-palace-st-marks-combo",
    icon: "route",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Grand Canal light, quiet rii and viewpoints that repay patience.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Cicchetti, market flavours and tavern stops away from the worst queues.",
    href: "/shore-excursions/cicchetti-bars-tour",
    icon: "food",
  },
  {
    id: "romance",
    title: "Romance",
    body: "Gondolas, lagoon light and the city's most atmospheric evenings.",
    href: "/shore-excursions/private-gondola-30",
    icon: "sunrise",
  },
  {
    id: "families",
    title: "Families",
    body: "Colourful islands and manageable walks when travelling with children.",
    href: "/shore-excursions/murano-burano-islands",
    icon: "family",
  },
  {
    id: "lagoon-islands",
    title: "Lagoon Islands",
    body: "Murano glass and Burano colour beyond the historic centre.",
    href: "/shore-excursions/murano-burano-islands",
    icon: "luxury",
  },
];
