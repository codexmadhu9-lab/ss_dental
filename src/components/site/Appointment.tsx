import { CalendarHeart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Reveal, SectionHeading } from "./primitives";

const services = [
  "Dental Crowns",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces",
  "Clear Aligners",
  "Teeth Whitening",
  "Cavity Treatment",
  "Bad Breath Care",
  "Kids Dentistry",
];

const doctors = [
  "Dr. Ananya Rao",
  "Dr. Karthik Menon",
  "Dr. Meera Iyer",
  "Dr. Rahul Verma",
  "Any available specialist",
];

const fieldClass =
  "w-full rounded-2xl border border-accent bg-white/95 px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

type AppointmentProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function Appointment({ imageSrc, imageAlt = "SS Dental Hospital care team" }: AppointmentProps) {
  const [submitting, setSubmitting] = useState(false);

  const getValue = (formData: FormData, field: string) => {
    const value = formData.get(field);
    return typeof value === "string" && value.trim() ? value.trim() : "Not provided";
  };

  return (
    <section id="appointment" className="lavender-band relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Appointments"
            title="Your Health Deserves the Best Care"
            subtitle="Share a few details and our care coordinator will confirm your slot within an hour, usually sooner."
          />
          {imageSrc ? (
            <Reveal delay={0.08}>
              <div className="mt-9 overflow-hidden rounded-[2rem] border border-white/75 bg-white shadow-lift">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  width={900}
                  height={760}
                  loading="eager"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.1}>
          <form
            className="glass-panel rounded-[2rem] p-7 sm:p-9"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitting(true);
              const form = event.currentTarget;
              const formData = new FormData(form);
              const message = [
                "New appointment request",
                "",
                `Name: ${getValue(formData, "name")}`,
                `Phone: ${getValue(formData, "phone")}`,
                `Email: ${getValue(formData, "email")}`,
                `Service: ${getValue(formData, "service")}`,
                `Doctor: ${getValue(formData, "doctor")}`,
                `Preferred Date: ${getValue(formData, "date")}`,
                `Preferred Time: ${getValue(formData, "time")}`,
                `Message: ${getValue(formData, "message")}`,
              ].join("\n");

              window.open(
                `https://wa.me/919014973467?text=${encodeURIComponent(message)}`,
                "_blank",
                "noopener,noreferrer",
              );

              setSubmitting(false);
              form.reset();
              toast.success("Opening WhatsApp", {
                description: "Please send the pre-filled appointment request to confirm.",
              });
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium">
                  Service
                </label>
                <select id="service" name="service" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select service
                  </option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="doctor" className="mb-2 block text-sm font-medium">
                  Doctor
                </label>
                <select id="doctor" name="doctor" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select doctor
                  </option>
                  {doctors.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-medium">
                  Preferred Date
                </label>
                <input id="date" name="date" type="date" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="time" className="mb-2 block text-sm font-medium">
                  Preferred Time
                </label>
                <input id="time" name="time" type="time" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your symptoms or preference"
                  className={fieldClass}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="brand-gradient mt-7 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <CalendarHeart className="h-4 w-4" />
              {submitting ? "Sending..." : "Book Appointment"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
