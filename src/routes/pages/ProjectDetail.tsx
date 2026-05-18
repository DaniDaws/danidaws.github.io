import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  usePageMeta(
    project
      ? {
          title: `${project.title} | ${siteConfig.name}`,
          description: project.summary,
          path: `/projects/${project.slug}`,
        }
      : {
          title: `Selected work not found | ${siteConfig.name}`,
          description: "The requested selected-work summary could not be found.",
          path: "/projects",
          noIndex: true,
        },
  );

  if (!project) {
    return (
      <section className="surface-card rounded-[2rem] p-8">
        <p className="section-eyebrow">Selected work not found</p>
        <h1 className="font-display mt-3 text-3xl font-semibold">
          That summary isn't available.
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--text-soft)] leading-8">
          The link may have changed, or the page you were trying to open may still be in development.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects" prefetch="intent" className="button-primary">
            Back to selected work
          </Link>
          <Link to="/" prefetch="intent" className="button-secondary">
            Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="space-y-10">
      <header className="surface-card overflow-hidden rounded-[2rem] p-6 md:p-8">
        <div
          className="mb-6 h-2 rounded-full"
          style={{
            background: `linear-gradient(120deg, ${project.accentFrom}, ${project.accentTo})`,
          }}
        />

        <p className="section-eyebrow">{project.role}</p>
        <h1 className="heading-lg mt-3">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="tag">{project.timeframe}</span>
          <span className="tag">{project.status}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        {project.note && (
          <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-white/4 p-4">
            <p className="text-sm leading-7 text-[var(--text-soft)]">{project.note}</p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects" prefetch="intent" className="button-primary">
            All selected work
          </Link>

          <Link to="/contact" prefetch="intent" className="button-secondary">
            Get in touch
          </Link>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card rounded-[2rem] p-6 md:p-8">
          <p className="section-eyebrow">Problem</p>
          <h2 className="font-display mt-3 text-2xl font-semibold">The challenge</h2>
          <p className="mt-4 text-[var(--text-soft)] leading-8">{project.problem}</p>
        </div>

        <div className="surface-card rounded-[2rem] p-6 md:p-8">
          <p className="section-eyebrow">Approach</p>
          <h2 className="font-display mt-3 text-2xl font-semibold">The solution</h2>
          <p className="mt-4 text-[var(--text-soft)] leading-8">{project.solution}</p>
        </div>
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Outcome</p>
        <h2 className="font-display mt-3 text-2xl font-semibold">What this says about how I work</h2>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {project.impact.map((item) => (
            <li
              key={item}
              className="rounded-[1.25rem] border border-[var(--border)] p-4 text-[var(--text-soft)] leading-8"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
