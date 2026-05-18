import { Link } from "react-router-dom";
import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  usePageMeta({
    title: `Page not found | ${siteConfig.name}`,
    description: "This page could not be found.",
    path: "/404",
    noIndex: true,
  });

  return (
    <section className="surface-card rounded-[2rem] p-8 md:p-10">
      <p className="section-eyebrow">404</p>
      <h1 className="font-display mt-3 text-4xl font-semibold">This page doesn't exist.</h1>
      <p className="mt-4 max-w-2xl text-[var(--text-soft)] leading-8">
        The link may be outdated, or the page may have moved while the site was being updated.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/" prefetch="intent" className="button-primary">
          Go home
        </Link>
        <Link to="/projects" prefetch="intent" className="button-secondary">
          Browse selected work
        </Link>
      </div>
    </section>
  );
}
