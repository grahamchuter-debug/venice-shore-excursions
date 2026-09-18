import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Venice Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Venice shore excursion or explore independently? Honest comparison for cruise passengers — neither option is automatically correct.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Venice is one of the finest cities in the world to explore independently. Independence wins for flexible wandering; a guided tour wins for expert commentary, organised logistics and Murano or Burano.",
    verdict:
      "Choose independence when Classic Venice on foot is your joy. Choose a tour when you want deeper insight, structured pacing, or the lagoon islands. Neither is the correct answer — only the match to your travel style.",
    overview: [
      "Many guests have an unforgettable day without joining a tour.",
      "Guided highlights tours add centuries of context while still leaving free time afterwards.",
      "Lagoon island days almost always need organised boat logistics to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Classic Venice wandering", optionB: "Commentary, interiors logistics or islands" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced bridges and campi", optionB: "Guided pace with group timing" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Murano & Burano", optionA: "Harder without organised boats", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Venice without an excursion?",
        answer:
          "Yes. Independent days are common and often extraordinary for guests who enjoy historic cities.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want expert commentary, skip-the-line interior concepts, limited-mobility support, or Murano and Burano within limited hours.",
      },
    ],
    relatedSlugs: ["first-time-venice-day", "best-shore-excursions", "venice-or-lagoon-islands"],
    imageKey: "compare",
  },
  {
    slug: "venice-or-lagoon-islands",
    title: "Venice or Lagoon Islands?",
    seoTitle: "Historic Venice or Murano & Burano?",
    metaDescription:
      "Compare a Classic Venice day with Murano and Burano for cruise passengers — timing, atmosphere, trade-offs and which to prioritise ashore.",
    kind: "versus",
    optionA: "Historic Venice",
    optionB: "Murano & Burano",
    summary:
      "Historic Venice is the essential first-time experience. Murano and Burano add glass, colour and lagoon light beyond the centre.",
    verdict:
      "First-time visitors should usually prioritise Venice itself. Choose the lagoon when islands are your clear dream and your port call supports the boat time.",
    overview: [
      "St Mark's, the Grand Canal and quieter campi define Venice's singularity.",
      "Island days consume hours in boat logistics — an honest trade-off, not a lesser day.",
    ],
    comparisonTable: [
      { category: "Headline", optionA: "Canals, squares, maritime republic", optionB: "Glass, colour, lagoon islands" },
      { category: "Logistics", optionA: "Water to centre, then walking", optionB: "Boat circuit with island stops" },
      { category: "Atmosphere", optionA: "Iconic and dense near landmarks", optionB: "Vivid colour, different rhythm" },
      { category: "Best for", optionA: "First-time Venice", optionB: "Island enthusiasts with time" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Only on a long, unhurried call with disciplined timing. Most guests should choose one priority and do it well.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-venice-day", "best-shore-excursions"],
    imageKey: "coast",
  },
  {
    slug: "first-time-venice-day",
    title: "First-Time Venice Day",
    seoTitle: "First-Time Venice Cruise Day — What to Choose",
    metaDescription:
      "First time in Venice on a cruise? Compare Walk It Yourself, Editor's Choice highlights and lagoon islands with honest advice.",
    kind: "guide",
    summary:
      "Three strong first-time paths: explore Classic Venice yourself, join Venice Highlights & St Mark's, or discover Murano and Burano.",
    verdict:
      "If you love wandering, Walk It Yourself. If you want guided landmark context, choose Editor's Choice. If islands are your dream, choose the lagoon — and accept less unstructured Venice time.",
    overview: [
      "Venice rewards whichever path matches your personality.",
      "Protect larger water-transport buffers than mainland ports require.",
    ],
    guideItems: [
      {
        name: "Walk It Yourself",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "Best when independence is your joy",
        topExcursion: "Self-guided Classic Venice",
        returnConfidence: "Your buffer discipline",
        walkingDifficulty: "Moderate — bridges",
      },
      {
        name: "Editor's Choice",
        slug: "venice-highlights-st-marks",
        href: "/shore-excursions/venice-highlights-st-marks",
        reason: "Best guided first-time introduction",
        topExcursion: "Venice Highlights & St Mark's",
        returnConfidence: "Operator-planned",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Lagoon Islands",
        slug: "murano-burano-islands",
        href: "/shore-excursions/murano-burano-islands",
        reason: "Best when Murano and Burano are the priority",
        topExcursion: "Murano & Burano Islands",
        returnConfidence: "Operator-planned boats",
        walkingDifficulty: "Moderate — island strolling",
      },
    ],
    faqs: [
      {
        question: "What do most first-timers choose?",
        answer:
          "Either a Classic Venice independent day or Venice Highlights & St Mark's. Islands are wonderful when that is the clear desire.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "venice-or-lagoon-islands", "best-shore-excursions"],
    imageKey: "historic",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Venice Shore Excursions",
    seoTitle: "Best Venice Shore Excursions for Cruise Passengers",
    metaDescription:
      "Editorially selected Venice shore excursions — Highlights & St Mark's, walking tours, Murano & Burano, food and private experiences.",
    kind: "guide",
    summary:
      "Our curated shortlist for Venice cruise days, led by Editor's Choice Venice Highlights & St Mark's.",
    verdict:
      "Start with Venice Highlights & St Mark's for guided first-timers, Walk It Yourself for independent explorers, and Murano & Burano when the lagoon is the goal.",
    overview: [
      "Fewer recommendations, clearer trade-offs.",
      "All catalogue products remain in preparation until EUR pricing is verified.",
    ],
    guideItems: [
      {
        name: "Venice Highlights & St Mark's",
        slug: "venice-highlights-st-marks",
        href: "/shore-excursions/venice-highlights-st-marks",
        reason: "Editor's Choice — strongest overall first-time day",
        topExcursion: "Venice Highlights & St Mark's",
        returnConfidence: "Cruise-aware",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Murano & Burano Islands",
        slug: "murano-burano-islands",
        href: "/shore-excursions/murano-burano-islands",
        reason: "Best lagoon day with organised boats",
        topExcursion: "Murano & Burano Islands",
        returnConfidence: "Cruise-aware",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Cicchetti Bars Tour",
        slug: "cicchetti-bars-tour",
        href: "/shore-excursions/cicchetti-bars-tour",
        reason: "Best food-and-local-life pathway",
        topExcursion: "Cicchetti Bars & Taverns",
        returnConfidence: "Cruise-aware",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Are prices published?",
        answer:
          "Not yet. Products are listed as in preparation until EUR selling prices and fulfilment routes are verified.",
      },
    ],
    relatedSlugs: ["first-time-venice-day", "tour-or-independent"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
