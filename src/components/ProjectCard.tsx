import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="surface-card overflow-hidden rounded-[1.75rem] p-6"
      whileHover={shouldReduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="mb-5 h-1.5 rounded-full"
        style={{
          background: `linear-gradient(120deg, ${project.accentFrom}, ${project.accentTo})`,
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-eyebrow">{project.role}</p>
          <h3 className="font-display mt-2 text-2xl font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="tag text-sm">{project.timeframe}</span>
        <span className="tag text-sm">{project.status}</span>
      </div>

      <p className="mt-4 text-[var(--text-soft)] leading-8">{project.summary}</p>

      {project.note && (
        <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{project.note}</p>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="tag text-sm">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to={`/projects/${project.slug}`} prefetch="intent" className="button-primary">
          Read summary
        </Link>

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button-secondary">
            Live demo
          </a>
        )}

        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button-secondary">
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}
