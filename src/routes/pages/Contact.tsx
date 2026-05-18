import ContactForm from "../../components/ContactForm";
import { siteConfig } from "../../data/site";
import usePageMeta from "../../hooks/usePageMeta";

export function Component() {
  usePageMeta({
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch with Danielle Dawson about software engineering, product thinking, and future opportunities.",
    path: "/contact",
  });

  return (
    <div className="space-y-10">
      <section className="max-w-4xl space-y-5">
        <p className="section-eyebrow">Contact</p>
        <h1 className="heading-lg">
          Warm, thoughtful conversations are always welcome.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-soft)]">
          {siteConfig.lookingFor}
        </p>
      </section>

      <ContactForm />
    </div>
  );
}
