import { Facebook, Instagram, Linkedin, MapPin, PhoneCall, Youtube } from "lucide-react";

import logo from "@/assets/logo ss.png";

const address =
  "Opp. KGH Outgate, KGH Down Rd, Opposite KGH Clock Tower, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002";
const mapQuery = `S S Dental Hospital Implant Centre, ${address}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

const quickLinks: Array<[string, string]> = [
  ["Services", "/services"],
  ["Doctors", "/doctors"],
  ["Appointments", "/contact#appointment"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer id="contact" className="lavender-band border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-4">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-white/75 text-secondary-foreground shadow-soft transition-colors hover:bg-secondary hover:text-primary"
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
                <a className="transition-colors hover:text-primary" href={href}>
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{address}</span>
            </li>
            <li className="flex gap-3">
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919849122573" className="transition-colors hover:text-primary">
                098491 22573
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-secondary-foreground">Find Us</h3>
          <div className="mt-4 overflow-hidden rounded-3xl border border-accent bg-white shadow-soft">
            <iframe
              title="SS Dental Hospital location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="h-52 w-full"
              loading="lazy"
            />
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full border border-accent bg-white/75 px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-soft transition-colors hover:bg-secondary hover:text-primary"
          >
            Open map
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SS Dental Hospital. Care for every smile.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
