import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  usePageMeta({
    title: `About | ${siteConfig.name}`,
    description:
      "Learn more about Danielle Dawson, a software developer focused on frontend engineering, UI/UX, solution design, backend work, and SQL-backed systems.",
    path: "/about",
  });

  return (
    <div className="space-y-14">
      <section className="max-w-4xl space-y-5">
        <p className="section-eyebrow">About</p>
        <h1 className="heading-lg">
          Frontend, UX, backend logic, and the discipline to connect them properly.
        </h1>

        <div className="prose-copy space-y-4">
          {siteConfig.aboutSummary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {siteConfig.principles.map((principle) => (
          <article key={principle.title} className="surface-card rounded-[1.75rem] p-6">
            <p className="section-eyebrow">How I work</p>
            <h2 className="font-display mt-3 text-2xl font-semibold">{principle.title}</h2>
            <p className="mt-4 text-[var(--text-soft)] leading-8">{principle.description}</p>
          </article>
        ))}
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Training and progression</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          A career path built through deliberate, intensive growth.
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteConfig.credentials.map((item) => (
            <article
              key={item.title + item.subtitle}
              className="rounded-[1.5rem] border border-[var(--border)] p-4"
            >
              <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{item.subtitle}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-4">
        {siteConfig.timeline.map((item) => (
          <article key={item.period} className="surface-card rounded-[1.75rem] p-6">
            <p className="section-eyebrow">{item.period}</p>
            <h2 className="font-display mt-3 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 text-[var(--text-soft)] leading-8">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">A little more about me</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          The creative side of me shapes the engineering side too.
        </h2>
        <p className="mt-4 max-w-4xl text-[var(--text-soft)] leading-8">
          I wanted this site to feel human as well as professional. The details below are here in a
          deliberate way: not to distract from the work, but to show the kind of person behind it.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {siteConfig.personalSide.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-[var(--border)] p-4"
            >
              <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Looking ahead</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          The kind of work I love doing most
        </h2>
        <p className="mt-4 max-w-4xl text-[var(--text-soft)] leading-8">
          {siteConfig.lookingFor}
        </p>
      </section>
    </div>
  );
}
