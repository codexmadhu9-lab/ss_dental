import { createFileRoute } from "@tanstack/react-router";

import { Appointment } from "@/components/site/Appointment";
import { PageLayout } from "@/components/site/PageLayout";
import { Services, TechExperience } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <PageLayout>
      <Services />
      <TechExperience />
      <Appointment />
    </PageLayout>
  );
}
