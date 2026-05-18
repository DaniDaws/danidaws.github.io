import { FormEvent, useId, useState } from "react";
import { siteConfig } from "../data/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function buildMailtoUrl() {
    const subject = encodeURIComponent(
      form.subject.trim() || `Portfolio inquiry from ${form.name.trim() || "a visitor"}`,
    );

    const body = encodeURIComponent(
      [
        `Hi ${siteConfig.name},`,
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.assign(buildMailtoUrl());
    setSubmitted(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <form onSubmit={handleSubmit} className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Send a message</p>
        <h2 className="font-display mt-3 text-2xl font-semibold md:text-3xl">
          The form prepares an email draft so getting in touch stays simple.
        </h2>
        <p className="mt-3 text-[var(--text-soft)] leading-8">
          If you'd like to talk about software, product work, or future opportunities, send a message here and your email app will open with the draft ready.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor={nameId} className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              className="contact-input"
              placeholder="Your name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor={emailId} className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              className="contact-input"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor={subjectId} className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              id={subjectId}
              name="subject"
              type="text"
              className="contact-input"
              placeholder="Role, collaboration, or project inquiry"
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor={messageId} className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id={messageId}
              name="message"
              className="contact-textarea"
              placeholder="Tell me a little about what you'd like to discuss."
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button type="submit" className="button-primary">
            Draft email
          </button>

          <a href={siteConfig.links.email} className="button-secondary">
            Email directly
          </a>
        </div>

        {submitted && (
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            If no email client opened, use the direct email link from the panel on the right.
          </p>
        )}
      </form>

      <aside className="surface-card rounded-[2rem] p-6 md:p-8">
        <p className="section-eyebrow">Contact details</p>
        <h3 className="font-display mt-3 text-2xl font-semibold">
          I'm always happy to hear from thoughtful people building interesting things.
        </h3>

        <p className="mt-4 text-[var(--text-soft)] leading-8">
          I'm currently focused on doing great work in my role, but I'm always open to warm, professional conversations about software, product thinking, and future opportunities.
        </p>

        <div className="mt-6 space-y-3">
          <a href={siteConfig.links.email} className="button-secondary w-full justify-center">
            {siteConfig.email}
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="button-secondary w-full justify-center"
          >
            LinkedIn
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="button-secondary w-full justify-center"
          >
            GitHub
          </a>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] p-4">
          <p className="font-medium text-[var(--text)]">Based in the UK</p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
            Interested in thoughtful software, polished user experience, and engineering that is clear, robust, and well considered.
          </p>
        </div>
      </aside>
    </div>
  );
}
