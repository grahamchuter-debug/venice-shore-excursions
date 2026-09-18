import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Venice without an excursion?",
    answer:
      "Yes. Venice is one of the finest cities in the world to explore independently. Many visitors who enjoy historic cities have an unforgettable day without joining a tour.",
  },
  {
    question: "How do I get from the cruise port into Venice?",
    answer:
      "Most ships connect to the historic centre by water transport — vaporetto, organised shuttle or transfer depending on berth. Allow generous time for tickets and queues.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want expert commentary, organised logistics, or Murano and Burano. Skip when you prefer self-paced wandering through canals and campi. Neither choice is automatically correct.",
  },
  {
    question: "How much walking is involved in Venice?",
    answer:
      "Bridges, paving stones and standing time add up. Island days add boat boarding. Comfortable shoes are essential.",
  },
  {
    question: "Is Venice suitable for limited mobility?",
    answer:
      "Bridges without lifts and boat steps can be challenging. Ask about transfer-assisted or lower-walking formats and consider private water transport where appropriate.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 90–120 minutes after sightseeing for water connections. Venice punishes optimistic buffers.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Venice Highlights & St Mark's — the strongest overall first-time Venice experience, with landmark context and free time afterwards.",
  },
  {
    question: "What currency is used?",
    answer:
      "Italy uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
