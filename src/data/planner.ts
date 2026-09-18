import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Venice explorer",
    description: "A Classic Venice day using water transport, walking, cicchetti and your own return buffer.",
  },
  {
    id: "highlights",
    label: "First-time Venice highlights visitor",
    description: "A guided St Mark's introduction with historical context and free time afterwards.",
  },
  {
    id: "art-history",
    label: "Art & history traveller",
    description: "Basilica, Doge's Palace and Venice through the centuries.",
  },
  {
    id: "lagoon",
    label: "Lagoon islands traveller",
    description: "Murano and Burano when your port call supports the boat time.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "st-marks", label: "St Mark's & historic centre" },
  { id: "rialto", label: "Rialto & Grand Canal" },
  { id: "lagoon", label: "Murano & Burano" },
  { id: "food", label: "Food & cicchetti" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
  { id: "gondola", label: "Gondola experiences" },
];

type PlanKey = "independent" | "highlights" | "art-history" | "lagoon";

export const SAVONA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Classic Venice",
    summary:
      "The most flexible choice: water transport into the centre, then St Mark's, Rialto, quieter campi and cicchetti at your own pace.",
    minimumHours: 5,
    links: [
      {
        label: "Cruise arrival guidance",
        href: "/guides/walking-from-port",
        why: "Water transport, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full Classic Venice independent route.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Transfer into Venice and orient at St Mark's Square." },
      { time: "Late morning", text: "Grand Canal, Rialto and quieter back streets." },
      { time: "Afternoon", text: "Cicchetti pause and calm canals — then return with a buffer." },
    ],
  },
  highlights: {
    headline: "Venice Highlights introduction",
    summary:
      "A guided St Mark's highlights day with historical context and free time afterwards — our favourite first-time format.",
    minimumHours: 5,
    links: [
      {
        label: "Venice Highlights & St Mark's",
        href: "/shore-excursions/venice-highlights-st-marks",
        why: "Editor's Choice introduction for first-time cruise visitors.",
      },
      {
        label: "Venice Walking Tour",
        href: "/shore-excursions/venice-walking-tour",
        why: "Shorter walking alternative with independent time left.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide at the published meeting point." },
      { time: "Guided highlights", text: "St Mark's context, palace atmosphere and canal orientation." },
      { time: "Free time", text: "Cafés, photographs or quieter campi before returning to the ship." },
    ],
  },
  "art-history": {
    headline: "Art & history Venice",
    summary:
      "Basilica and Doge's Palace focus for guests who want interiors and centuries of context.",
    minimumHours: 5,
    links: [
      {
        label: "Doge's Palace & St Mark's Basilica",
        href: "/shore-excursions/doges-palace-st-marks-combo",
        why: "Skip-the-line combination of Venice's essential interiors.",
      },
      {
        label: "Venice of the Doges Walking Tour",
        href: "/shore-excursions/venice-doges-walking-combo",
        why: "Walking context paired with palace access.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Guided palace and Basilica time." },
      { time: "Midday", text: "Ceremonial square and canal-edge photographs." },
      { time: "Afternoon", text: "Optional independent wandering before the return buffer." },
    ],
  },
  lagoon: {
    headline: "Murano & Burano on the lagoon",
    summary:
      "Glass traditions and colourful houses beyond Venice itself — only when your usable hours support the boat time.",
    minimumHours: 7,
    links: [
      {
        label: "Murano & Burano Islands",
        href: "/shore-excursions/murano-burano-islands",
        why: "Organised boat logistics for the classic lagoon pair.",
      },
      {
        label: "Private Murano, Burano & Torcello",
        href: "/shore-excursions/private-murano-burano-torcello",
        why: "Private pacing across three lagoon gems.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Board for the lagoon with cruise-aware timing." },
      { time: "Experience", text: "Murano and Burano stops as chosen." },
      { time: "Return", text: "Boat back with a generous all-aboard buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    interests.includes("independent") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      return interests.includes("photography") || interests.includes("st-marks")
        ? "highlights"
        : "highlights";
    }
    return "independent";
  }
  if (interests.includes("lagoon")) return "lagoon";
  if (interests.includes("st-marks") && input.travelStyle === "guided") return "art-history";
  if (interests.includes("food") && hours < 7) return "independent";
  return hours >= 6 ? "highlights" : "independent";
}

export function generateVenicePlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = SAVONA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Venice concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Cicchetti Bars & Taverns",
      href: "/shore-excursions/cicchetti-bars-tour",
      why: "Local flavours without a lagoon transfer.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer Classic Venice on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Venice Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Berths, water transport and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Venice Ship Schedule",
        href: "/ship-schedules/venice",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Venice options",
        href: "/compare",
        why: "Review honest trade-offs before choosing islands or guided highlights.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Begin water transport back 90–120 minutes before all-aboard; lagoon island days require additional boat contingency.",
      },
    ],
  };
}

export function generateTallinnPlan(input: PlannerInput): PlannerResult {
  return generateVenicePlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateVenicePlan(input);
}

/** @deprecated Compatibility alias */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateVenicePlan(input);
}
