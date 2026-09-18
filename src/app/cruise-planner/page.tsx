import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Venice cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored extraordinary Venice recommendations.";

export const metadata = buildMetadata({
  title: "Venice Cruise Planner — medieval Venice Port Day Itinerary",
  description,
  path,
  keywords: ["Venice cruise planner", "medieval Venice cruise day plan", "Venice port day itinerary", "St Mark's from Venice planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Venice Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Venice Cruise Planner", description, path })]} />
      <PageHero
        title="Venice Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the historic centre, St Mark's, Venice historic centre and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
