import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/site/PageLayout";
import { Doctors, Testimonials } from "@/components/site/Sections";

export const Route = createFileRoute("/doctors")({ component: DoctorsPage });

function DoctorsPage() {
  return (
    <PageLayout>
      <Doctors />
      <Testimonials />
    </PageLayout>
  );
}
