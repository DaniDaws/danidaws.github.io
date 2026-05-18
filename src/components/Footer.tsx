import { siteConfig } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-shell">
        <div className="surface-card rounded-[2rem] px-6 py-8 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <p className="section-eyebrow">Always happy to connect</p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-[var(--text)] md:text-3xl">
                I care about thoughtful products, strong teams, and work done well.
              </h2>
              <p className="mt-4 max-w-2xl text-[var(--text-soft)] leading-8">
                {siteConfig.lookingFor}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary w-full justify-center"
              >
                GitHub
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button-secondary w-full justify-center"
              >
                LinkedIn
              </a>

              <a href={siteConfig.links.email} className="button-primary w-full justify-center">
                Email me
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.name}. Built with React, TypeScript, Vite, Tailwind CSS, and Motion.
            </p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
