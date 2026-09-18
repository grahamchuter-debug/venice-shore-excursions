/**
 * Internal destination completion tracker — not rendered publicly.
 */

export type CompletionState = "pending" | "in-progress" | "complete";

export type CompletionSection =
  | "editorial"
  | "images"
  | "products"
  | "pricing"
  | "schedules"
  | "booking"
  | "stripe"
  | "worker"
  | "d1"
  | "searchConsole"
  | "analytics"
  | "productionImages"
  | "deployment";

export type DestinationCompletion = Record<CompletionSection, CompletionState>;

export const destinationCompletion = {
  editorial: "complete",
  images: "in-progress",
  products: "in-progress",
  pricing: "pending",
  schedules: "in-progress",
  booking: "in-progress",
  stripe: "pending",
  worker: "pending",
  d1: "pending",
  searchConsole: "pending",
  analytics: "pending",
  productionImages: "pending",
  deployment: "pending",
} as const satisfies DestinationCompletion;
