import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline =
  "The world's most extraordinary city, waiting beyond the water.";

export const homepageSubheading =
  "Lose yourself among canals and campi, or join a guided day for deeper insight and the lagoon islands — two outstanding ways to experience Venice, matched to your travel style.";

export const homepageDestinationLine =
  "St Mark's · Grand Canal · Rialto · Murano · Burano";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Venice for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to Classic Venice on foot, a guided St Mark's highlights day, or Murano and Burano on the lagoon — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Venice",
    shortLabel: "First visit",
    description:
      "Compare walking independently, our Editor's Choice highlights experience, or a lagoon islands day before you choose.",
    href: "/compare/first-time-venice-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Venice is one of the finest cities in the world to explore on foot — many guests have an unforgettable day without joining a tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Venice plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across St Mark's, classic Venice walking, lagoon islands, food and private days — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on cruise arrival, water transport, St Mark's, Rialto, the Grand Canal, Murano, Burano and when a guided day actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Venice will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "A city built on water.",
  body: [
    "Venice rises from the lagoon like a mirage made permanent — marble façades reflected in dark canals, church bells carrying across water, and alleyways that turn without warning into sudden, luminous squares. For centuries this maritime republic projected power across the Mediterranean; today its genius still feels intact in the Grand Canal's theatre, the hush of a side rio at midday, and the golden mosaics of St Mark's catching lagoon light.",
    "Nowhere else asks you to navigate by bridge and vaporetto, to measure time in footsteps between campi, or to accept that getting gently lost is part of the point. We write like an independent cruise concierge: fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship. Walk independently if that is your joy. Join a guide when you want deeper insight or the famous lagoon islands. Venice remains unlike anywhere else in the world — timeless, romantic, and unforgettable either way.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "Independence is a first-class option",
    body: "Venice is one of the finest cities in the world to explore independently. If you enjoy wandering historic cities, you can have an unforgettable day without joining a tour.",
  },
  {
    title: "Guides shine for insight — and islands",
    body: "Organised commentary and logistics matter when you want expert context around St Mark's, or when you wish to combine Venice with Murano or Burano.",
  },
  {
    title: "Water changes the clock",
    body: "Plan from all-aboard, then add a generous buffer for boats, bridges and crowds. Venice rewards composure more than optimism.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Venice without an excursion?",
      answer:
        "Yes. Venice is one of the finest cities in the world to explore independently. Many first-time visitors who enjoy historic cities have an unforgettable day on foot — St Mark's, the Grand Canal, Rialto and quieter campi — without joining a tour. A guided excursion becomes especially useful for expert commentary, organised logistics, or Murano and Burano.",
    },
    {
      question: "How do I get from the cruise port into Venice?",
      answer:
        "Most ships berth at terminals connected to the historic centre by water transport — vaporetto, organised shuttles or transfers depending on berth and operator. Allow generous time for tickets, boarding and walking bridges. Our cruise port guide and Walk It Yourself route cover realistic timings.",
    },
    {
      question: "Should I book a tour or walk independently?",
      answer:
        "Neither is the correct answer for everyone. Walk independently if you love getting lost in historic cities. Book a guided day when you want deeper insight, skip-the-line access concepts, or the lagoon islands. Match the day to your travel style.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Venice Highlights & St Mark's — the strongest overall first-time Venice experience, with landmark context and free time afterwards.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "venice-highlights-st-marks",
    type: "guided",
    title: "Venice Highlights & St Mark's",
    eyebrow: "Editor's Choice pathway",
    description:
      "The finest first-time introduction to Venice's ceremonial heart — St Mark's, palace atmosphere and Grand Canal orientation.",
    href: "/shore-excursions/venice-highlights-st-marks",
    cta: "View Editor's Choice",
    imageKey: "historic",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Walk It Yourself",
    eyebrow: "Free self-guided route",
    description:
      "Classic Venice at your own pace — canals, St Mark's, Rialto and hidden squares. One of the strongest independent days in the network.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "5–7 hours",
    distance: "Approximately 6–9 km",
    difficulty: "Moderate — bridges and crowds",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "murano-burano-islands",
    type: "nature",
    title: "Lagoon Islands",
    description:
      "Murano glass traditions and Burano's colourful canals — Venice beyond the historic centre.",
    href: "/shore-excursions/murano-burano-islands",
    cta: "Discover the lagoon",
    imageKey: "coastal",
  },
  {
    slug: "art-history",
    type: "history",
    title: "Art & History",
    description:
      "Venice through the centuries — Basilica mosaics, the Doge's Palace and the maritime republic's legacy.",
    href: "/shore-excursions/doges-palace-st-marks-combo",
    cta: "Explore art & history",
    imageKey: "historic",
  },
  {
    slug: "food-local-life",
    type: "food-wine",
    title: "Food & Local Life",
    description:
      "Cicchetti, canals and hidden squares — Venetian flavours away from the postcard queues.",
    href: "/shore-excursions/cicchetti-bars-tour",
    cta: "Taste Venice",
    imageKey: "food",
  },
];

export const experienceCards: ExperienceCard[] = [
  ...featuredExperienceCards,
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description: "Grand Canal light, quiet rii and the viewpoints that repay patience.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Manageable walking days and island colour when travelling with children.",
    href: "/shore-excursions/murano-burano-islands",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Gondolas, artisans and flexible pacing shaped around your party.",
    href: "/shore-excursions/private-gondola-30",
    cta: "Browse private options",
    imageKey: "private",
  },
];

export const homepageHero = {
  eyebrow: "Venice Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Venice?",
  subtitle:
    "Lose yourself independently, discover the lagoon islands, or join our Editor's Choice highlights day — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-venice-yourself",
      emoji: "🚶",
      title: "Explore Venice Yourself",
      tagline:
        "A carefully paced Classic Venice walking guide for one of the world's finest cities to explore independently.",
      highlights: [
        "Cruise arrival and water-transport advice",
        "St Mark's, Rialto and the Grand Canal at your pace",
        "Hidden streets, cicchetti and quiet canals",
        "Honest return buffers for watery logistics",
        "Ideal when wandering is your joy",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-the-lagoon",
      emoji: "🚤",
      title: "Discover the Lagoon",
      tagline:
        "Murano and Burano by boat — glass traditions, colourful houses and lagoon light beyond Venice itself.",
      highlights: [
        "Organised boat logistics",
        "Murano glass demonstration",
        "Burano's painted canalside streets",
        "Best on a fuller port call",
        "Honest trade-off versus historic-centre time",
      ],
      cta: "See lagoon islands",
      href: "/shore-excursions/murano-burano-islands",
      imageKey: "coastal",
      wide: true,
    },
    {
      slug: "editors-choice-experience",
      emoji: "⭐",
      title: "Editor's Choice Experience",
      tagline:
        "Venice Highlights & St Mark's — landmark context, ceremonial square and free time afterwards for first-time visitors.",
      highlights: [
        "Best overall first-time guided introduction",
        "St Mark's Square and Basilica context",
        "Doge's Palace atmosphere and Bridge of Sighs view",
        "Grand Canal orientation",
        "Free time for cafés or quieter campi",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/venice-highlights-st-marks",
      imageKey: "historic",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Venice?",
  subtitle:
    "The honest answer: Venice is one of the finest cities in the world to explore independently. If this is your first visit and you enjoy wandering historic cities, you can have an unforgettable day without joining a tour. If you prefer expert commentary, organised logistics or wish to combine Venice with Murano or Burano, a guided excursion is an excellent choice. Neither option is the correct answer — only the one that matches your travel style.",
  independent: {
    title: "You can explore Venice independently — and many passengers do",
    body: "The historic centre rewards a human pace. With water-transport planning and a generous buffer, a flexible day can include:",
    items: [
      "St Mark's Square and Basilica exterior",
      "Doge's Palace exterior and Bridge of Sighs viewpoint",
      "Grand Canal and Rialto Bridge",
      "Hidden streets, Campo Santa Maria Formosa and cicchetti",
    ],
    note: "Set a 90–120 minute return buffer for water connections and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "Organised commentary and logistics matter when you want more than wandering — or when you leave for the lagoon:",
    items: [
      {
        label: "Venice Highlights & St Mark's",
        detail: "landmark context with free time afterwards — our Editor's Choice",
      },
      {
        label: "Art & palace interiors",
        detail: "Basilica and Doge's Palace access with less queue uncertainty",
      },
      {
        label: "Murano & Burano",
        detail: "lagoon islands with boat logistics handled for you",
      },
      {
        label: "Food experiences",
        detail: "cicchetti walks and market tastings with local hosts",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/walking-from-port", label: "Cruise arrival guidance" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Venice experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
