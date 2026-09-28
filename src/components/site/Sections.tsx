import { AnimatePresence, motion } from "framer-motion";
import {
  ActivitySquare,
  ArrowRight,
  CalendarDays,
  Clock,
  Heart,
  HeartPulse,
  IndianRupee,
  Languages,
  Microscope,
  MonitorSmartphone,
  Navigation,
  Phone,
  Quote,
  ScanHeart,
  ShieldCheck,
  ShieldPlus,
  Smile,
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import aboutImage from "@/assets/about.png";
import aboutHero from "@/assets/about1.png";
import afterTreatment from "@/assets/after.png";
import beforeTreatment from "@/assets/before.png";
import braces from "@/assets/braces.png";
import clearAligners from "@/assets/clear-aligners.png";
import dentalCrown from "@/assets/dental-crown.png";
import dentalImplants from "@/assets/dental-implants.png";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import halitosis from "@/assets/halitosis.png";
import infrastructure1 from "@/assets/i1.png";
import infrastructure2 from "@/assets/i2.png";
import infrastructure3 from "@/assets/i3.png";
import infrastructure4 from "@/assets/i4.png";
import infrastructure5 from "@/assets/i5.png";
import infrastructure6 from "@/assets/i6.png";
import kidsDentistry from "@/assets/kids-dentistry.png";
import rootCanalTreatment from "@/assets/root-canal-treatment.png";
import teethWhitening from "@/assets/teeth-whitening.png";
import toothDecayDentalCavity from "@/assets/tooth-decay-dental-cavity.png";
import { blogPosts, dentalTip, getRelatedBlogPosts, type BlogPost } from "@/data/blogs";

import {
  AmbientBlobs,
  Counter,
  MagneticButton,
  Reveal,
  SectionHeading,
  TiltCard,
} from "./primitives";

const doctors = [
  {
    name: "Dr. Ananya Rao",
    image: doctor1,
    speciality: "Senior Dental Surgeon",
    qualification: "BDS, MDS",
    experience: "16 years experience",
    languages: "English, Hindi, Telugu",
  },
  {
    name: "Dr. Karthik Menon",
    image: doctor2,
    speciality: "Orthodontist",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopaedics)",
    experience: "12 years experience",
    languages: "English, Malayalam, Hindi",
  },
  {
    name: "Dr. Meera Iyer",
    image: doctor3,
    speciality: "Prosthodontist & Implantologist",
    qualification: "BDS, MDS (Prosthodontics)",
    experience: "14 years experience",
    languages: "English, Tamil, Hindi",
  },
  {
    name: "Dr. Rahul Verma",
    image: doctor4,
    speciality: "Oral & Maxillofacial Surgeon",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "11 years experience",
    languages: "English, Hindi, Marathi",
  },
];

const services = [
  {
    image: dentalCrown,
    name: "Dental Crowns",
    text: "Natural-looking caps that restore strength, shape and bite comfort.",
  },
  {
    image: rootCanalTreatment,
    name: "Root Canal Treatment",
    text: "Precise infection removal that helps save painful or damaged teeth.",
  },
  {
    image: dentalImplants,
    name: "Dental Implants",
    text: "Stable tooth replacement planned for long-term function and aesthetics.",
  },
  {
    image: braces,
    name: "Braces",
    text: "Guided teeth alignment for healthier bites and confident smiles.",
  },
  {
    image: clearAligners,
    name: "Clear Aligners",
    text: "Removable transparent trays designed for discreet smile correction.",
  },
  {
    image: teethWhitening,
    name: "Teeth Whitening",
    text: "Professional whitening for brighter teeth with controlled sensitivity.",
  },
  {
    image: toothDecayDentalCavity,
    name: "Cavity Treatment",
    text: "Early decay care and tooth-colored fillings to protect your tooth.",
  },
  {
    image: halitosis,
    name: "Bad Breath Care",
    text: "Diagnosis-led treatment for lasting freshness and better oral health.",
  },
  {
    image: kidsDentistry,
    name: "Kids Dentistry",
    text: "Gentle preventive and restorative care for growing smiles.",
  },
];

const quickFeatures = [
  { icon: ShieldPlus, title: "24/7 Emergency Care", text: "Rapid response teams, always on duty." },
  { icon: Stethoscope, title: "Expert Doctors", text: "Senior specialists across 20+ fields." },
  { icon: Microscope, title: "Advanced Diagnostics", text: "Precision imaging and fast reports." },
  { icon: ActivitySquare, title: "Modern Facilities", text: "NABH-standard theatres and ICUs." },
];

const benefits = [
  {
    icon: Users,
    title: "Experienced Medical Professionals",
    text: "Senior consultants leading every specialty.",
  },
  {
    icon: MonitorSmartphone,
    title: "Advanced Technology",
    text: "Digital records and precision equipment.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    text: "Care plans built around the person, not the file.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Infrastructure",
    text: "Infection-controlled, accessible, calm spaces.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Support",
    text: "Helpline and ambulance ready every hour.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Healthcare",
    text: "Transparent pricing and insurance support.",
  },
];

const facilities = [
  { name: "Advanced Dental Treatment Operatory", image: infrastructure1 },
  {
    name: "Teeth Whitening & Cosmetic Dentistry Unit",
    image: infrastructure2,
  },
  { name: "General Dentistry Treatment Room", image: infrastructure3 },
  { name: "Digital Dental Imaging & Diagnostic Unit", image: infrastructure4 },
  { name: "Oral Surgery & Procedure Suite", image: infrastructure5 },
  { name: "Dental Implant Treatment Unit", image: infrastructure6 },
];

const testimonials = [
  {
    name: "Sridevi Kalyan",
    text: "From admission to discharge the team explained every step. My mother's cardiac care was handled with real warmth.",
    rating: 5,
  },
  {
    name: "Naveen Gupta",
    text: "The emergency team stabilised me within minutes. Clean, calm and genuinely professional at 2am.",
    rating: 5,
  },
  {
    name: "Fatima Sheikh",
    text: "Delivered my baby here. The maternity suite and the nursing staff made a nervous week feel safe.",
    rating: 5,
  },
];

const techLabels = [
  "Advanced Diagnostics",
  "Precision Treatment",
  "Digital Healthcare",
  "Patient Safety",
];

export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[22rem] overflow-hidden">
      <img
        src={aboutHero}
        alt="SS Dental Hospital"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-lavender-deep/45 via-primary/18 to-white/18" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
        <Reveal>
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              About SS
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Compassionate Dental Care For Every Smile
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Advanced treatment, experienced specialists and a calm clinical experience designed
              around patient comfort.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="lavender-band relative overflow-hidden py-28 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden
              className="animate-morph absolute -left-6 -top-6 h-40 w-40 bg-lavender-soft/70 blur-2xl"
            />
            <img
              src={aboutImage}
              alt="SS Dental Hospital team welcoming a patient"
              width={1280}
              height={960}
              loading="lazy"
              className="relative w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            <div className="glass-panel absolute -bottom-8 left-6 rounded-3xl px-6 py-5">
              <p className="font-display text-3xl text-secondary-foreground">
                <Counter to={98} suffix="%" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Patient satisfaction
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About SS"
            title="Compassionate Care. Advanced Medicine."
            subtitle="At SS, we believe a healthy smile begins with feeling heard. Whether you’re visiting for a routine checkup, relief from a toothache, or a longer treatment, our team takes time to understand your concerns and explain your options clearly. Our goal is to make dental care feel comfortable and approachable for every patient. We focus on thoughtful treatment, clear communication, and helping you make confident decisions about your oral health."
          />
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {[
                { value: 25, suffix: "+", label: "Years of experience" },
                { value: 120, suffix: "+", label: "Specialists" },
                { value: 450000, suffix: "+", label: "Patients served" },
              ].map((stat) => (
                <div key={stat.label} className="lavender-card rounded-3xl p-5">
                  <dt className="font-display text-2xl text-secondary-foreground">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Doctors Who Listen First"
          subtitle="Meet a few of the consultants leading care at SS Dental Hospital."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.08}>
              <article className="lift-card lavender-card group h-full overflow-hidden rounded-[2rem]">
                <div className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.speciality}`}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-secondary-foreground">{doctor.name}</h3>
                  <p className="text-sm font-medium text-primary">{doctor.speciality}</p>
                  <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <ScanHeart className="h-4 w-4 shrink-0 text-lavender" />
                      {doctor.qualification}
                    </li>
                    <li className="flex gap-2">
                      <Syringe className="h-4 w-4 shrink-0 text-lavender" />
                      {doctor.experience}
                    </li>
                    <li className="flex gap-2">
                      <Languages className="h-4 w-4 shrink-0 text-lavender" />
                      {doctor.languages}
                    </li>
                  </ul>
                  <a
                    href="#appointment"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full border border-accent px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
                  >
                    Book Appointment
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="lavender-band relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything Your Treatment Needs"
          subtitle="Diagnostics, pharmacy, surgery and emergency response, coordinated within one hospital."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={(index % 5) * 0.06}>
              <article className="lift-card lavender-card group h-full overflow-hidden rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} at SS Dental Hospital`}
                    width={720}
                    height={960}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg text-secondary-foreground">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <a
                    href="#appointment"
                    className="brand-gradient mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                  >
                    Book Appointment
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <AmbientBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <div className="lift-card lavender-card h-full rounded-3xl p-6">
                <span className="brand-gradient flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-soft">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg text-secondary-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Why SS" title="Reasons Families Keep Coming Back" />
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={(index % 3) * 0.08}>
              <div className="lift-card lavender-card flex h-full gap-4 rounded-3xl p-6">
                <span className="brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-soft">
                  <benefit.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base text-secondary-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterTreatment() {
  const [position, setPosition] = useState(50);

  return (
    <section className="lavender-band py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Smile Results
          </p>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
            Before & After Treatment
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Drag to compare the treatment result. Move right to reveal more of the before photo, or
            left to reveal more of the after photo.
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="lavender-card relative overflow-hidden rounded-3xl shadow-lift">
              <div className="relative aspect-[4/3] w-full select-none sm:aspect-[16/9]">
                <img
                  src={afterTreatment}
                  alt="After dental treatment result"
                  width={1200}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${position}%` }}
                >
                  <img
                    src={beforeTreatment}
                    alt="Before dental treatment"
                    width={1200}
                    height={800}
                    className="h-full w-full max-w-none object-cover"
                    style={{ width: `calc(100% * ${100 / Math.max(position, 1)})` }}
                    draggable={false}
                  />
                </div>

                <span className="absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Before
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  After
                </span>

                <div
                  aria-hidden
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.22)]"
                  style={{ left: `calc(${position}% - 2px)` }}
                />
                <div
                  aria-hidden
                  className="brand-gradient absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-white shadow-lift"
                  style={{ left: `${position}%` }}
                >
                  <span className="text-sm font-bold leading-none">&lt;&gt;</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  aria-label="Compare before and after treatment photos"
                  onChange={(event) => setPosition(Number(event.target.value))}
                  className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
                />
              </div>
            </div>

            <div className="lavender-treatment-card mt-7 rounded-3xl p-6 text-center">
              <h3 className="font-display text-2xl text-foreground">Smile Whitening Treatment</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                A visual comparison of the same patient before and after treatment, shown with
                consistent sizing for an accurate view of the result. Images should be used only
                with patient consent and without edits that misrepresent outcomes.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TechExperience() {
  return (
    <section className="lavender-band relative overflow-hidden py-24 sm:py-32">
      <AmbientBlobs />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <SectionHeading
          eyebrow="3D Medical Experience"
          title="Technology That Transforms Healthcare"
          subtitle="Move your cursor across the sphere to explore how technology supports every stage of your treatment."
        />
        <div className="relative mx-auto mt-16 flex h-[26rem] max-w-3xl items-center justify-center">
          <TiltCard
            intensity={16}
            className="relative flex h-full w-full items-center justify-center"
          >
            <motion.div
              className="relative flex h-56 w-56 items-center justify-center rounded-full brand-gradient shadow-lift sm:h-72 sm:w-72"
              animate={{ rotate: 360 }}
              transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-4 rounded-full border border-white/50" />
              <div className="absolute inset-10 rounded-full border border-white/40" />
              <HeartPulse className="h-16 w-16 text-white" />
            </motion.div>

            {techLabels.map((label, index) => {
              const angle = (index / techLabels.length) * Math.PI * 2;
              return (
                <motion.span
                  key={label}
                  className="glass-panel absolute rounded-full px-4 py-2 text-xs font-semibold text-secondary-foreground sm:text-sm"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * 38}% )`,
                    top: `calc(50% + ${Math.sin(angle) * 34}% )`,
                    translate: "-50% -50%",
                  }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                >
                  {label}
                </motion.span>
              );
            })}
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Facilities"
          title="Infrastructure Built Around Comfort"
          subtitle="Patient rooms, critical care, theatres and diagnostics designed to feel calm and be clinically exact."
        />
        <div id="gallery" className="mt-14 grid gap-5 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <Reveal key={facility.name} delay={(index % 2) * 0.1}>
              <figure className="group relative overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={facility.image}
                  alt={`${facility.name} at SS Dental Hospital`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/55 to-transparent p-6 font-display text-xl text-white">
                  {facility.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Pharmacy", "Waiting Lounge", "Emergency Department"].map((item) => (
              <div
                key={item}
                className="lift-card lavender-card rounded-3xl px-6 py-8 text-center font-display text-lg text-secondary-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index]!;

  return (
    <section className="lavender-band relative overflow-hidden py-24 sm:py-28">
      <AmbientBlobs />
      <div className="relative mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="Patient Stories" title="Care Remembered By Families" />
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-[2rem] p-8 text-center sm:p-12"
            >
              <Quote className="mx-auto h-8 w-8 text-lavender" />
              <p className="mt-6 font-display text-xl leading-relaxed text-secondary-foreground sm:text-2xl">
                “{active.text}”
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-secondary-foreground">{active.name}</p>
                <p className="mt-1 text-sm text-primary">{"★".repeat(active.rating)}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-10 brand-gradient" : "w-2.5 bg-accent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!activePost) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePost(null);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePost]);

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Blogs"
          title="Dental Insights For Healthier Smiles"
          subtitle="Helpful dental advice, treatment guidance, oral-health tips, and expert insights from our dental care team."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 0.08}>
              <article className="lift-card lavender-card flex h-full flex-col overflow-hidden rounded-3xl">
                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="group block overflow-hidden text-left"
                  aria-label={`Read ${post.title}`}
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={900}
                    height={620}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </button>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg leading-snug text-secondary-foreground">
                    <button
                      type="button"
                      onClick={() => setActivePost(post)}
                      className="text-left transition-colors hover:text-primary"
                    >
                      {post.title}
                    </button>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="group mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read More{" "}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePost ? (
          <BlogPostModal
            post={activePost}
            onClose={() => setActivePost(null)}
            onSelectPost={setActivePost}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function BlogPostModal({
  post,
  onClose,
  onSelectPost,
}: {
  post: BlogPost;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}) {
  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/60 px-3 py-6 backdrop-blur-sm sm:px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      onClick={onClose}
    >
      <motion.article
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] bg-white shadow-lift sm:rounded-[2rem]"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.97 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close blog article"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-secondary-foreground shadow-soft backdrop-blur-sm transition-colors hover:bg-secondary"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={post.image}
          alt={post.imageAlt}
          width={1280}
          height={720}
          className="h-60 w-full object-cover sm:h-80"
        />

        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              {post.publishedDate}
            </span>
          </div>

          <h2
            id="blog-modal-title"
            className="brand-gradient-text mt-5 text-3xl leading-tight sm:text-4xl"
          >
            {post.title}
          </h2>

          <div className="mt-7 space-y-4 text-base leading-8 text-muted-foreground">
            {post.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 space-y-9">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl leading-tight text-secondary-foreground">{section.title}</h3>
                {section.paragraphs ? (
                  <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2.5 text-sm leading-7 text-muted-foreground sm:text-base">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-[1.25rem] bg-cyan-50 p-5 text-slate-900 shadow-soft sm:p-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Smile className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg text-slate-950">Dental Tip</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{dentalTip}</p>
              </div>
            </div>
          </aside>

          <section className="mt-10">
            <h3 className="text-xl leading-tight text-secondary-foreground">Conclusion</h3>
            <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
              {post.conclusion.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="brand-gradient mt-10 rounded-[1.5rem] p-6 text-white shadow-lift sm:p-8">
            <h3 className="text-2xl leading-tight text-white">{post.ctaTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-white/90">
              Whether you need a routine checkup or advanced dental treatment, our dental care team
              is here to help.
            </p>
            <a
              href="/contact#appointment"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]"
            >
              {post.ctaButton}
            </a>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl text-secondary-foreground">You May Also Like</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <button
                  key={relatedPost.slug}
                  type="button"
                  onClick={() => onSelectPost(relatedPost)}
                  className="group overflow-hidden rounded-3xl border border-border bg-white text-left shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.imageAlt}
                    width={480}
                    height={320}
                    loading="lazy"
                    className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="p-4">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary">
                      {relatedPost.category}
                    </span>
                    <h4 className="mt-2 text-sm leading-snug text-secondary-foreground">
                      {relatedPost.title}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read More{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function EmergencyCTA() {
  return (
    <section className="px-4 pb-24">
      <Reveal>
        <div className="brand-gradient relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center shadow-lift sm:px-16">
          <div
            aria-hidden
            className="animate-morph absolute -left-10 -top-10 h-56 w-56 bg-white/25 blur-2xl"
          />
          <div
            aria-hidden
            className="animate-morph absolute -bottom-16 right-0 h-64 w-64 bg-white/20 blur-2xl"
          />
          <h2 className="relative text-3xl text-white sm:text-4xl">
            Need Immediate Medical Attention?
          </h2>
          <p className="relative mt-4 text-base text-white/90">
            Our emergency care team is available 24/7 — call ahead and we will be ready before you
            arrive.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-4">
            <MagneticButton
              href="#contact"
              className="rounded-full border border-white/70 px-7 py-4 text-sm font-semibold text-white"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
