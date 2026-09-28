import { createFileRoute } from "@tanstack/react-router";

import { Appointment } from "@/components/site/Appointment";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import {
  BeforeAfterTreatment,
  EmergencyCTA,
  Facilities,
  WhyChoose,
} from "@/components/site/Sections";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <BeforeAfterTreatment />
      <Facilities />
      <Appointment />
      <EmergencyCTA />
      <Footer />
    </main>
  );
}
