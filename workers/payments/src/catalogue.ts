/**
 * Server-controlled excursion catalogue for Checkout.
 * Browser-supplied excursionName / price are never authoritative.
 *
 * Venice launch: empty until EUR face prices and fulfilment routes are verified.
 */

export type CatalogueCurrency = "eur" | "usd" | "gbp";

export type ExcursionProduct = {
  id: string;
  name: string;
  bookingPath: string;
  successPath: string;
  pricePerGuest: number;
  currency: CatalogueCurrency;
  pricePerGuestEur?: number;
};

export const EXCURSION_CATALOGUE: Readonly<Record<string, ExcursionProduct>> = {} as const;

export function getExcursionProduct(excursionId: string): ExcursionProduct | null {
  const id = excursionId.trim();
  return EXCURSION_CATALOGUE[id] ?? null;
}
