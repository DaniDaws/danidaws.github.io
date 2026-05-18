import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../hooks/useTheme";

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Focus the main region after route changes so keyboard and screen reader users
    // land in the updated content in this SPA.
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="orb left-[-7rem] top-16 h-60 w-60 bg-cyan-300/30" />
        <div className="orb right-[-9rem] top-28 h-72 w-72 bg-violet-400/25" />
        <div className="orb bottom-[-8rem] left-[15%] h-72 w-72 bg-emerald-300/20" />
      </div>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        aria-label="Primary page content"
        className="container-shell pb-24 pt-8 md:pt-10"
      >
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
}
