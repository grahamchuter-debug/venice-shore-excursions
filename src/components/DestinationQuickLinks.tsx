import Link from "next/link";

const VENICE_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Venice cruise passengers — when to walk alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Best Venice shore excursions",
    description:
      "Our curated launch collection — Editor’s Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Cruise arrival guidance",
    description:
      "How water transport works from the cruise port into St Mark's and the historic centre.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Walk It Yourself",
    description:
      "Classic Venice independently — when a flexible foot day is the better choice.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Venice",
    description:
      "A practical first-call plan: Classic Venice, Editor's Choice, or the lagoon islands.",
    href: "/compare/first-time-venice-day",
  },
  {
    title: "Venice cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/venice",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Venice planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you lose yourself in Venice or discover the lagoon islands.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VENICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Venice planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
