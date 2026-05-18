import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  usePageMeta({
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    path: "/",
  });

  return (
    <div className="space-y-16 md:space-y-20">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-3">
        {siteConfig.focusAreas.map((area) => (
          <article key={area.title} className="surface-card rounded-[1.75rem] p-6">
            <p className="section-eyebrow">What I do</p>
            <h2 className="font-display mt-3 text-2xl font-semibold">{area.title}</h2>
            <p className="mt-4 text-[var(--text-soft)] leading-8">{area.description}</p>
          </article>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Selected work</p>
            <h2 className="heading-lg mt-3">
              Thoughtful, high-trust software work shared without overstepping confidentiality.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--text-soft)]">
              Much of my day-to-day work sits in secure and commercially sensitive environments, so
              these summaries focus on the kinds of problems I solve, the responsibilities I take on,
              and the way I think through delivery.
            </p>
          </div>

          <Link to="/projects" prefetch="intent" className="button-secondary">
            View all selected work
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Background and training</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          A strong practical foundation across frontend, backend, systems, and cloud.
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
    </div>
  );
}
