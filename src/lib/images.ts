export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Venice Grand Canal and historic palazzi — the world's most extraordinary city",
  ),
  ogDefault: img(
    "og-default",
    "St Mark's Square and Venice lagoon light — Venice Shore Excursions",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Venice Shore Excursions",
  },
  port: img("cruise-port", "Venice cruise port area — gateway to the historic lagoon city"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "St Mark's Square and historic Venice architecture"),
  coast: img("coastal", "Venetian Lagoon and colourful island shores"),
  coastal: img("coastal", "Venetian Lagoon and colourful island shores"),
  walking: img("walking", "Walking Venice canals and bridges from a cruise day ashore"),
  food: img("food-and-wine", "Cicchetti and Venetian food culture"),
  "food-and-wine": img("food-and-wine", "Cicchetti and Venetian food culture"),
  private: img("private", "Private gondola and intimate Venice experiences"),
  photography: img("photography", "Venice viewpoints and Grand Canal light"),
  wine: img("food-and-wine", "Venetian aperitivo and wine culture"),
  compare: img("compare", "Comparing Venice shore excursion options"),
  port: img("cruise-port", "Venice cruise passenger terminal area"),
  highlights: img("historic", "Venice highlights for cruise visitors"),
  city: img("historic", "Historic Venice centre from the cruise port"),
  nature: img("coastal", "Murano and Burano lagoon islands"),
  family: img("family", "Family-friendly Venice and lagoon day ashore"),
  "hero-home": img("hero", "Venice Grand Canal — the world's most extraordinary city"),
  "st-marks": img("st-marks", "St Mark's Basilica and Square in Venice"),
  rialto: img("rialto", "Rialto Bridge over the Grand Canal"),
  "grand-canal": img("grand-canal", "Grand Canal palazzi in Venice"),
  murano: img("murano", "Murano island on the Venetian Lagoon"),
  burano: img("burano", "Colourful houses of Burano"),
  gondola: img("gondola", "Gondola on a Venice canal"),
  viewpoints: img("viewpoints", "Classic Venice canal and bridge viewpoint"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "venice-highlights-st-marks": "st-marks",
  "venice-walking-tour": "walking",
  "murano-burano-islands": "burano",
  "secret-venice": "walking",
  "doges-palace-tour": "historic",
  "st-marks-basilica-tour": "st-marks",
  "doges-palace-st-marks-combo": "st-marks",
  "venice-doges-walking-combo": "historic",
  "hidden-gems-gondola": "gondola",
  "illuminating-venice-gondola": "gondola",
  "mysteries-legends-venice": "historic",
  "cicchetti-bars-tour": "food",
  "rialto-market-food-walk": "rialto",
  "venice-cooking-class": "food",
  "cicchetti-cooking-class": "food",
  "fresh-pasta-class": "food",
  "chocolate-tasting-venice": "food",
  "dinner-venetian-restaurant": "food",
  "evening-wine-tasting": "food",
  "venice-spritz-time": "food",
  "paint-venetian-mask": "historic",
  "private-gondola-30": "gondola",
  "private-gondola-60": "gondola",
  "private-gondola-dinner": "gondola",
  "private-murano-burano-torcello": "murano",
  "private-castello-district": "walking",
  "private-artisan-traditions": "historic",
  "private-transfer-airport-pier": "port",
  "private-transfer-pier-lido": "coastal",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("st-marks");

const highlightImageKeys: Record<string, string> = {
  "st-marks-square": "st-marks",
  "doges-palace": "historic",
  "rialto-bridge": "rialto",
  "grand-canal": "grand-canal",
  "bridge-of-sighs": "viewpoints",
  murano: "murano",
  burano: "burano",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "venice-or-lagoon-islands": "burano",
  "best-shore-excursions": "historic",
  "first-time-venice-day": "st-marks",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
