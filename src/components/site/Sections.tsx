import { AnimatePresence, motion } from "framer-motion";
import {
  ActivitySquare,
  ArrowRight,
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
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import aboutImage from "@/assets/about.png";
import aboutHero from "@/assets/about1.png";
import advancedDentalTreatmentOperatory from "@/assets/Advanced Dental Treatment Operatory.jpg";
import afterTreatment from "@/assets/after.png";
import beforeTreatment from "@/assets/before.png";
import braces from "@/assets/braces.png";
import clearAligners from "@/assets/clear-aligners.png";
import dentalCrown from "@/assets/dental-crown.png";
import dentalImplantTreatmentUnit from "@/assets/Dental Implant Treatment Unit.png";
import dentalImplants from "@/assets/dental-implants.png";
import digitalDentalImagingDiagnosticUnit from "@/assets/Digital Dental Imaging & Diagnostic Unit.png";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";
import facilityDiagnostics from "@/assets/facility-diagnostics.jpg";
import generalDentistryTreatmentRoom from "@/assets/General Dentistry Treatment Room.jpg";
import halitosis from "@/assets/halitosis.png";
import kidsDentistry from "@/assets/kids-dentistry.png";
import oralSurgeryProcedureSuite from "@/assets/Oral Surgery & Procedure Suite.png";
import rootCanalTreatment from "@/assets/root-canal-treatment.png";
import teethWhitening from "@/assets/teeth-whitening.png";
import teethWhiteningCosmeticDentistryUnit from "@/assets/Teeth Whitening & Cosmetic Dentistry Unit.jpg";
import toothDecayDentalCavity from "@/assets/tooth-decay-dental-cavity.png";

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
  { name: "Advanced Dental Treatment Operatory", image: advancedDentalTreatmentOperatory },
  {
    name: "Teeth Whitening & Cosmetic Dentistry Unit",
    image: teethWhiteningCosmeticDentistryUnit,
  },
  { name: "General Dentistry Treatment Room", image: generalDentistryTreatmentRoom },
  { name: "Digital Dental Imaging & Diagnostic Unit", image: digitalDentalImagingDiagnosticUnit },
  { name: "Oral Surgery & Procedure Suite", image: oralSurgeryProcedureSuite },
  { name: "Dental Implant Treatment Unit", image: dentalImplantTreatmentUnit },
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

const insights = [
  {
    tag: "Preventive Healthcare",
    title: "Five screenings worth doing before you turn 40",
    image: facilityDiagnostics,
    content: [
      "Preventive screening helps catch silent health changes before they become urgent. Blood pressure, blood sugar, lipid profile, dental checkups and basic imaging can reveal risks early enough for simple treatment plans.",
      "The right schedule depends on age, symptoms, family history and lifestyle. A clinician can help decide what is needed now, what can wait, and how often each test should be repeated.",
    ],
  },
  {
    tag: "Healthy Lifestyle",
    title: "Small daily habits that lower your blood pressure",
    image: generalDentistryTreatmentRoom,
    content: [
      "Blood pressure improves most reliably with steady routines: brisk walking, reduced salt, good sleep, stress breaks and regular medication when prescribed. Small daily choices are easier to maintain than extreme short-term changes.",
      "Home monitoring also helps. Bring your readings to appointments so your doctor can see patterns instead of relying on a single clinic measurement.",
    ],
  },
  {
    tag: "Women's Health",
    title: "Understanding iron deficiency and everyday fatigue",
    image: doctor3,
    content: [
      "Iron deficiency can show up as tiredness, dizziness, shortness of breath, headaches or hair fall. It is common, but it should still be checked because the cause matters as much as the low level itself.",
      "A consultation may include blood tests, diet review and questions about menstrual health or digestion. Treatment can include food changes, supplements or further evaluation when needed.",
    ],
  },
  {
    tag: "Children's Health",
    title: "A parent's guide to the childhood vaccine calendar",
    image: kidsDentistry,
    content: [
      "Vaccines protect children from serious infections at the ages when they are most vulnerable. Keeping a clear calendar avoids missed doses and helps schools and doctors maintain accurate health records.",
      "If a dose is delayed, parents usually do not need to restart the full schedule. A pediatrician can create a catch-up plan that fits the child's age and previous vaccines.",
    ],
  },
  {
    tag: "Heart Health",
    title: "Warning signs of a heart attack people still ignore",
    image: doctor1,
    content: [
      "Chest pressure is the classic warning sign, but heart attacks can also feel like breathlessness, sweating, jaw pain, arm discomfort, nausea or unusual fatigue. Symptoms may be subtle, especially in older adults and women.",
      "Do not wait for pain to become severe. Fast medical attention protects heart muscle and improves recovery, so emergency care is the right choice when symptoms feel unusual or persistent.",
    ],
  },
  {
    tag: "Medical Awareness",
    title: "When a fever actually needs a hospital visit",
    image: digitalDentalImagingDiagnosticUnit,
    content: [
      "Most fevers improve with fluids, rest and guided medication, but some need prompt evaluation. Warning signs include breathing difficulty, confusion, persistent vomiting, severe dehydration, rash, seizures or fever in very young infants.",
      "A hospital visit is also important when fever lasts several days, returns repeatedly, or appears in someone with chronic illness or weakened immunity.",
    ],
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
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/25 to-transparent" />
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
    <section id="about" className="relative overflow-hidden py-28 sm:py-32">
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
                <div key={stat.label} className="rounded-3xl border border-accent bg-white/70 p-5">
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
    <section id="doctors" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Doctors Who Listen First"
          subtitle="Meet a few of the consultants leading care at SS Dental Hospital."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.08}>
              <article className="lift-card group h-full overflow-hidden rounded-[2rem] border border-accent bg-white">
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
    <section id="services" className="soft-canvas relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="Everything Your Treatment Needs"
          subtitle="Diagnostics, pharmacy, surgery and emergency response, coordinated within one hospital."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={(index % 5) * 0.06}>
              <article className="lift-card group h-full overflow-hidden rounded-3xl border border-accent bg-white/90">
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
    <section className="relative overflow-hidden py-24 sm:py-28">
      <AmbientBlobs />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <div className="lift-card glass-panel h-full rounded-3xl p-6 shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
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
              <div className="lift-card glass-panel flex h-full gap-4 rounded-3xl p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
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
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
            Smile Results
          </p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
            Before & After Treatment
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Drag to compare the treatment result. Move right to reveal more of the before photo, or
            left to reveal more of the after photo.
          </p>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lift">
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

                <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Before
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">
                  After
                </span>

                <div
                  aria-hidden
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.22)]"
                  style={{ left: `calc(${position}% - 2px)` }}
                />
                <div
                  aria-hidden
                  className="absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-teal-700 text-white shadow-lift"
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

            <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
              <h3 className="font-display text-2xl text-slate-900">Smile Whitening Treatment</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
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
    <section className="soft-canvas relative overflow-hidden py-24 sm:py-32">
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
    <section id="facilities" className="py-24 sm:py-28">
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
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 font-display text-xl text-white">
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
                className="lift-card rounded-3xl border border-accent bg-white/80 px-6 py-8 text-center font-display text-lg text-secondary-foreground"
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
    <section className="soft-canvas relative overflow-hidden py-24 sm:py-28">
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
  const [activePost, setActivePost] = useState<(typeof insights)[number] | null>(null);

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Health Insights"
          title="Latest Health Updates"
          subtitle="Practical guidance written by our clinical teams."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 0.08}>
              <article className="lift-card flex h-full flex-col overflow-hidden rounded-3xl border border-accent bg-white/85">
                <img
                  src={post.image}
                  alt={post.title}
                  width={900}
                  height={620}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                    {post.tag}
                  </span>
                  <h3 className="mt-5 flex-1 text-lg leading-snug text-secondary-foreground">
                    {post.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePost ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/55 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-dialog-title"
            onClick={() => setActivePost(null)}
          >
            <motion.article
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-lift"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close article"
                onClick={() => setActivePost(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-secondary-foreground shadow-soft backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={activePost.image}
                alt={activePost.title}
                width={1200}
                height={760}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="p-7 sm:p-9">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  {activePost.tag}
                </span>
                <h3
                  id="insight-dialog-title"
                  className="mt-5 font-display text-2xl leading-tight text-secondary-foreground sm:text-3xl"
                >
                  {activePost.title}
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {activePost.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
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
