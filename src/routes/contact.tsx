import { createFileRoute } from "@tanstack/react-router";

import { Appointment } from "@/components/site/Appointment";
import { PageLayout } from "@/components/site/PageLayout";
import { EmergencyCTA } from "@/components/site/Sections";
import contactImage from "@/assets/contact.jpg";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <PageLayout>
      <Appointment imageSrc={contactImage} imageAlt="SS Dental Hospital contact and appointment support" />
      <EmergencyCTA />
    </PageLayout>
  );
}
