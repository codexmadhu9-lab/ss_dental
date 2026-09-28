import { AnimatePresence, motion } from "framer-motion";
import { CalendarHeart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo ss.png";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-3xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled ? "glass-panel" : "border border-transparent bg-white/60 backdrop-blur-sm",
          )}
        >
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="SS Dental Hospital logo"
              width={56}
              height={56}
              className="h-11 w-11 object-contain sm:h-14 sm:w-14"
            />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg tracking-[0.14em] text-secondary-foreground">
                SS DENTAL
              </span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Hospital
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/contact#appointment"
              className="brand-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] lg:inline-flex"
            >
              <CalendarHeart className="h-4 w-4" />
              Book an Appointment
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent text-secondary-foreground xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel mt-3 overflow-hidden rounded-3xl p-4 xl:hidden"
            >
              <ul className="grid gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/contact#appointment"
                onClick={() => setOpen(false)}
                className="brand-gradient mt-3 flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <CalendarHeart className="h-4 w-4" />
                Book an Appointment
              </a>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
