import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureVeniceExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Venice Discovery",
  seoTitle: "Signature Venice Discovery — Future Private Day",
  metaDescription:
    "Preview a future small-group Venice shore experience — maximum eight guests, St Mark's highlights, canals and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through extraordinary Venice — designed around your ship, not a generic day tour.",
  overview:
    "Signature Venice Discovery is a product concept in preparation. The proposed experience would take no more than eight guests through Venice's ceremonial heart and quieter canals in a carefully paced format, with optional cicchetti time and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🎭",
      title: "Venice highlights focus",
      description: "St Mark's context, canal atmosphere and quieter campi at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for Grand Canal light and reflective rii rather than rushed checklist pacing.",
    },
    {
      emoji: "🍷",
      title: "Local pause",
      description: "A cicchetti or café interlude proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Venice water-transport buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Venice Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Venice shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor's Choice is our current recommended introduction. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing.",
    },
  ] as FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    title: signatureVeniceExperience.title,
    description: signatureVeniceExperience.tagline,
    href: SIGNATURE_EXPERIENCE_PATH,
  };
}

/** Compatibility aliases for shared components */
export const signatureRivieraExperience = signatureVeniceExperience;
export const signatureTallinnExperience = signatureVeniceExperience;
