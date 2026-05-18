import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../data/site";
import type { Theme } from "../hooks/useTheme";

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" prefetch="intent" className="flex items-center gap-3" aria-label="Go to home">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(135deg, rgba(121,231,255,0.16), rgba(155,140,255,0.14))",
            }}
          >
            DD
          </span>

          <div>
            <p className="font-display text-base font-semibold leading-tight">{siteConfig.name}</p>
            <p className="text-xs text-[var(--text-muted)]">{siteConfig.role}</p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              prefetch="intent"
              className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="button-secondary hidden px-4 py-2 sm:inline-flex"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀︎" : "☾"}</span>
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="button-secondary px-4 py-2 md:hidden"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-nav"
            className="container-shell pb-4 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="surface-card rounded-[1.75rem] p-3">
              <div className="mb-3 flex items-center justify-between rounded-2xl border border-[var(--border)] px-4 py-3">
                <div>
                  <p className="font-medium text-[var(--text)]">{siteConfig.availability}</p>
                  <p className="text-sm text-[var(--text-muted)]">{siteConfig.location}</p>
                </div>

                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="button-secondary px-4 py-2"
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                >
                  {theme === "dark" ? "☀︎" : "☾"}
                </button>
              </div>

              <nav aria-label="Mobile primary navigation" className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    prefetch="intent"
                    className={({ isActive }) =>
                      `nav-link block text-base ${isActive ? "nav-link-active" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
