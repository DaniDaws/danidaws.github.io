import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <motion.p
          className="section-eyebrow"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {siteConfig.availability}
        </motion.p>

        <motion.h1
          className="heading-xl text-balance"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          I bring <span className="gradient-text">order to complexity</span> through thoughtful software engineering.
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg leading-8 text-[var(--text-soft)] md:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {siteConfig.intro} {siteConfig.blurb}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Link to="/projects" prefetch="intent" className="button-primary">
            View selected work
          </Link>
          <Link to="/about" prefetch="intent" className="button-secondary">
            Read about me
          </Link>
          <Link to="/contact" prefetch="intent" className="button-secondary">
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          {siteConfig.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.08 }}
      >
        <div className="hero-grid absolute inset-0 rounded-[2rem]" />
        <div className="surface-card relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div
            className="orb left-[-3rem] top-6 h-40 w-40"
            style={{ background: "rgba(121, 231, 255, 0.28)" }}
          />
          <div
            className="orb right-[-4rem] top-10 h-44 w-44"
            style={{ background: "rgba(155, 140, 255, 0.24)" }}
          />
          <div
            className="orb bottom-[-4rem] left-[30%] h-40 w-40"
            style={{ background: "rgba(135, 246, 199, 0.18)" }}
          />

          <div className="relative">
            <p className="section-eyebrow">What I bring</p>
            <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
              Design sensitivity, technical care, and a strong instinct for clarity.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Frontend engineering + UX",
                  body: "I care deeply about how software feels to use, not just whether it technically works.",
                },
                {
                  title: "End-to-end solution thinking",
                  body: "I enjoy helping shape work from early concept and UX direction through to implementation and delivery.",
                },
                {
                  title: "Backend and SQL depth",
                  body: "Stored procedures, views, relational structure, and the system logic that supports dynamic applications.",
                },
                {
                  title: "A grounded growth story",
                  body: "Commercial fintech experience backed by Northcoders, Code First Girls Software Engineering, and CFG +Masters in DevOps & Cloud.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-[var(--border)] bg-white/4 p-4">
                  <h3 className="font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
