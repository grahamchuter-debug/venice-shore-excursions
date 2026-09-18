/**
 * Featured-tour helpers — Murano flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("portofino-santa-margherita")!;

export const featuredTour = {
  slug: flagship.slug,
  path: flagship.path,
  bookingPath: flagship.bookingPath,
  cardName: flagship.name,
  fullName: flagship.experienceName,
} as const;
