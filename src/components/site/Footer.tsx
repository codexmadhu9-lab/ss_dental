import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Youtube } from "lucide-react";

import logo from "@/assets/logo ss.png";

const address =
  "Opp. KGH Outgate, KGH Down Rd, Opposite KGH Clock Tower, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002";
const mapQuery = `S S Dental Hospital Implant Centre, ${address}`;

const quickLinks: Array<[string, string]> = [
  ["Services", "/services"],
  ["Doctors", "/doctors"],
  ["Appointments", "/contact#appointment"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#fbf7ff]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(216,180,254,0.5),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(192,132,252,0.2),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fbf7ff_52%,#f2e7ff_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 rounded-[2rem] border border-white/85 bg-white/78 p-6 shadow-lift backdrop-blur md:p-8 lg:grid-cols-[1.2fr_0.7fr_1fr_1.15fr]">
          <div>
            <img
              src={logo}
              alt="SS Dental Hospital logo"
              width={180}
              height={180}
              loading="lazy"
              className="w-36"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              SS Dental Hospital brings thoughtful dental care, experienced specialists and modern
              treatment facilities together for every smile.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="SS Dental Hospital social profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-lavender-soft bg-white text-secondary-foreground shadow-soft transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg text-secondary-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    className="rounded-md transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-secondary-foreground">Reach Us</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-soft text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-soft text-primary">
                  <PhoneCall className="h-4 w-4" />
                </span>
                <a
                  href="tel:+919849122573"
                  className="rounded-md transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  098491 22573
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-secondary-foreground">Find Us</h3>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-soft">
              <iframe
                title="SS Dental Hospital location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/70 bg-white/45">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SS Dental Hospital. Care for every smile.</p>
          <div className="flex gap-6">
            <a
              href="#home"
              className="rounded-md transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="rounded-md transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
