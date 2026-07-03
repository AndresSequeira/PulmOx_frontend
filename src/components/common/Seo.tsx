import { useEffect } from "react";
import { siteConfig } from "../../config/site";

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | PulmOx Costa Rica`;

    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        if (selector.includes("property")) {
          element.setAttribute("property", selector.match(/"(.+)"/)?.[1] ?? "");
        } else {
          element.setAttribute("name", selector.match(/"(.+)"/)?.[1] ?? "");
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', "content", description);
    updateMeta('meta[property="og:title"]', "content", title);
    updateMeta('meta[property="og:description"]', "content", description || siteConfig.description);
  }, [description, title]);

  return null;
}
