import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/site/PageLayout";
import { About, AboutHero, WhyChoose } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <About />
      <WhyChoose />
    </PageLayout>
  );
}
