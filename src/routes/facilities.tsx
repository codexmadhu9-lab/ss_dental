import { createFileRoute } from "@tanstack/react-router";

import { PageLayout } from "@/components/site/PageLayout";
import { Facilities } from "@/components/site/Sections";

export const Route = createFileRoute("/facilities")({ component: FacilitiesPage });

function FacilitiesPage() {
  return (
    <PageLayout>
      <Facilities />
    </PageLayout>
  );
}
