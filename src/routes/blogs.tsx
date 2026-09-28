import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";

import { PageLayout } from "@/components/site/PageLayout";
import { EmergencyCTA, Insights } from "@/components/site/Sections";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs | SS Dental Hospital" },
      {
        name: "description",
        content:
          "Read practical dental and health insights from SS Dental Hospital, including preventive care, lifestyle guidance and medical awareness.",
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/blogs") {
    return <Outlet />;
  }

  return (
    <PageLayout>
      <Insights />
      <EmergencyCTA />
    </PageLayout>
  );
}
