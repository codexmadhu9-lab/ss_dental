import { createFileRoute } from "@tanstack/react-router";

import { Appointment } from "@/components/site/Appointment";
import { PageLayout } from "@/components/site/PageLayout";
import { EmergencyCTA } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <PageLayout>
      <Appointment />
      <EmergencyCTA />
    </PageLayout>
  );
}
