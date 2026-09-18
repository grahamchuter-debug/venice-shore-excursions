import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  "title": "Venice Cruise Port Guide",
  "subtitle": "Berths, water transport and realistic timing for a composed day ashore.",
  "terminals": [
    {
      "name": "Venezia Terminal Passeggeri (Marittima)",
      "quay": "Main cruise terminal complex",
      "usedBy": "Many large cruise ships calling at Venice / nearby passenger facilities",
      "cityAccess": "Water shuttle, vaporetto connections or organised transfers toward the historic centre — confirm on the day"
    },
    {
      "name": "Other / seasonal berths",
      "quay": "Varies by sailing and regulations",
      "usedBy": "Selected calls and operators",
      "cityAccess": "Always verify the exact berth and transfer method with your cruise line before arrival"
    }
  ],
  "sections": [
    {
      "heading": "Where ships dock",
      "paragraphs": [
        "Venice cruise logistics have evolved with port regulations. Many passengers still begin with a terminal experience that requires water transport into the historic centre rather than a short city walk.",
        "Treat your cruise line's berth and transfer notes as authoritative for your sailing."
      ]
    },
    {
      "heading": "Water transport into Venice",
      "paragraphs": [
        "Vaporetto lines, operator shuttles and private boats are the practical tools. Ticket queues and boarding bottlenecks expand when multiple ships are in.",
        "Budget more time than a mainland port would need for the same map distance."
      ]
    },
    {
      "heading": "Historic centre highlights",
      "paragraphs": [
        "St Mark's Square, the Basilica, the Doge's Palace, the Grand Canal and Rialto form the classic first-time circuit.",
        "Quieter campi and side canals are where Venice becomes unforgettable beyond the postcard."
      ]
    },
    {
      "heading": "Lagoon islands",
      "paragraphs": [
        "Murano and Burano reward a dedicated half day with organised boat logistics.",
        "Choosing islands usually means less unstructured time in Venice itself — an honest trade-off, not a failure."
      ]
    },
    {
      "heading": "Return-to-ship planning",
      "paragraphs": [
        "Begin returning 90–120 minutes before all-aboard unless your transfer is unusually direct.",
        "The ship will not wait for one more cicchetti stop."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Venice walkable from the cruise ship?",
      "answer": "Not in the simple mainland sense. Plan water transport or an organised shuttle depending on berth."
    },
    {
      "question": "Do I need a tour?",
      "answer": "No. Many visitors explore independently with great success. Tours help for commentary, interiors logistics and lagoon islands."
    },
    {
      "question": "How early should I return?",
      "answer": "Build a larger buffer than you would elsewhere — often 90–120 minutes before all-aboard."
    }
  ]
} as const;

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs: FAQ[] = [...portGuideContent.faqs];
