import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import home2 from "@/assets/home2.png";
import home3 from "@/assets/home3.png";

import { MagneticButton, Reveal } from "./primitives";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37) % 96}%`,
  top: `${(i * 53) % 88}%`,
  size: 4 + ((i * 7) % 10),
  delay: (i % 9) * 0.7,
}));

const heroSlides = [
  {
    image: home2,
    alt: "Modern dental team consulting with a patient using digital imaging",
    overlay: "from-foreground/48 via-foreground/12 to-white/10",
  },
  {
    image: home3,
    alt: "Dentist explaining oral care to a patient in a lavender dental clinic",
    overlay: "from-foreground/48 via-foreground/12 to-white/10",
  },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative z-20 h-screen min-h-[100svh] overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1.02 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </div>
      {heroSlides.map((slide, index) => (
        <motion.div
          key={`${slide.image}-overlay`}
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
          initial={false}
          animate={{ opacity: activeSlide === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-white/18 via-transparent to-lavender-soft/12" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/45 blur-[1px]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -26, 0], opacity: [0.12, 0.55, 0.12] }}
            transition={{
              duration: 7 + (i % 5),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-8 sm:py-10">
        <motion.div style={{ opacity: fade }}>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-soft backdrop-blur-sm">
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-primary" />
              24/7 Emergency Care
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Advanced Healthcare
              <span className="block text-white/85">With Compassion</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Delivering trusted medical care with advanced technology, experienced professionals
              and a compassionate approach for every generation of your family.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/contact#appointment"
                className="brand-gradient rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lift"
              >
                <CalendarHeart className="h-4 w-4" />
                Book an Appointment
              </MagneticButton>
              <MagneticButton
                href="/services"
                className="rounded-full border border-white/70 bg-white/25 px-7 py-4 text-sm font-semibold text-white shadow-soft backdrop-blur-sm"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6">
              {[
                ["25+", "Years of care"],
                ["120+", "Specialists"],
                ["4.9/5", "Patient rating"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-white sm:text-3xl">{value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="mt-8 flex gap-3" aria-label="Hero image slides">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === index ? "w-12 bg-white" : "w-6 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
