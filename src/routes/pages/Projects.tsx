import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  usePageMeta({
    title: `Selected Work | ${siteConfig.name}`,
    description:
      "Selected work summaries covering secure digital products, frontend engineering, solution design, backend structures, and SQL-backed systems.",
    path: "/projects",
  });

  return (
    <div className="space-y-10">
      <section className="max-w-4xl space-y-5">
        <p className="section-eyebrow">Selected work</p>
        <h1 className="heading-lg">
          Strong work can be communicated well without compromising trust.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-soft)]">
          Much of my current professional work sits in secure and commercially sensitive
          environments. Rather than filling this page with vague placeholders or oversharing, I've
          chosen to show careful high-level summaries of the problems I work on, the
          responsibilities I take on, and the way I approach delivery.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">What comes next</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          Public builds will be added over time.
        </h2>
        <p className="mt-4 max-w-4xl text-[var(--text-soft)] leading-8">
          My current priority is doing excellent work for my team, but I'll also be adding public
          projects and code samples that reflect my strengths in frontend engineering, UI/UX, and
          thoughtful solution design.
        </p>
      </section>
    </div>
  );
}
