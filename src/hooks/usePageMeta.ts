import { useEffect } from "react";
import { siteConfig } from "../data/site";

type MetaKey = "name" | "property";

type UsePageMetaOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

function upsertMeta(attribute: MetaKey, key: string, content: string) {
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export default function usePageMeta({
  title,
  description,
  path = "/",
  image = siteConfig.seo.socialImage,
  noIndex = false,
}: UsePageMetaOptions) {
  useEffect(() => {
    const canonical = new URL(path, siteConfig.seo.siteUrl).toString();
    const absoluteImage = new URL(image, siteConfig.seo.siteUrl).toString();

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", absoluteImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImage);

    upsertLink("canonical", canonical);
  }, [description, image, noIndex, path, title]);
}
