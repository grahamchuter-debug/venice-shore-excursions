import veniceSchedule from "./imported-schedules/venice.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/** Wave 1C — authority-synced Venice schedules. Terminal/lagoon logistics remain volatile. */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Venice cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times and call logistics can change — always confirm arrival, departure and all-aboard with your cruise line.",
  },
  {
    question: "Where do cruise ships berth in Venice?",
    answer:
      "Cruise logistics connect most passengers to the historic centre by water transport or organised shuttle depending on berth and operator. Confirm the exact arrangement for your sailing — we do not invent terminal assignments.",
  },
  {
    question: "Is a Venice call long enough for Murano and Burano?",
    answer:
      "A full day in port can support a cruise-timed lagoon islands excursion, but boat time is longer than a Classic Venice half day. Shorter calls are better suited to St Mark's and independent exploring.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning by water from the historic centre or lagoon islands",
  "Keep a lighter Plan B (Classic Venice on foot) if your call is shortened",
  "Venice rewards composure — water queues expand when multiple ships coincide",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "venice",
    name: "Venice",
    country: "Italy",
    seoTitle: "Venice Cruise Ship Schedule — Lagoon Port Calls",
    metaDescription:
      "Venice cruise ship schedule for planning St Mark's, Classic Venice walking days and Murano & Burano around published arrival and departure times.",
    intro:
      "Venice is the world's most extraordinary city on the lagoon — and a gateway to Murano and Burano when your hours ashore allow.",
    description:
      "A city built on water, with access to St Mark's, the Grand Canal, quieter campi and famous lagoon islands.",
    scheduleOverview:
      "Verified published calls for this planning window, including a validated 2028 itinerary subset. Lagoon terminal logistics are volatile — confirm arrangements with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  venice: veniceSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
