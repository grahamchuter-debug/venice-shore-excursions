/**
 * World 2.0 Destination Configuration — Venice Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "venice",
  name: "Venice Shore Excursions",
  destination: "Venice",
  descriptor: "Shore Excursions",
  strapline: "The World's Most Extraordinary City",
  domain: "veniceshoreexcursion.com",
  url: "https://veniceshoreexcursion.com",
  description: "Premium independent cruise shore excursions and port guidance for Venice.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "VE",
  pagesProject: "venice-shore-excursions",
  paymentsWorkerName: "venice-payments",
  d1DatabaseName: "venice-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@veniceshoreexcursion.com",
    bookings: "bookings@veniceshoreexcursion.com",
    privacy: "privacy@veniceshoreexcursion.com",
  },
  legal: {
    tradingName: "Venice Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "venice",
    meetingPointLabel: "Venice Cruise Port",
    country: "Italy",
  },
  seo: {
    defaultKeywords: [
      "Venice shore excursions",
      "Venice cruise excursions",
      "Venice cruise port guide",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "History",
    "Art",
    "Walking",
    "Photography",
    "Food",
    "Families",
    "Walk It Yourself",
    "Lagoon Islands",
    "Editor's Choice",
    "Romance",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
