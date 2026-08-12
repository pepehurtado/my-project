import SiteShell from "../../components/site/SiteShell";
import { en } from "../../../content/en";
import { buildJsonLd } from "../../../content/jsonLd";

export default function HomePageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(en)) }}
      />
      <SiteShell initialLocale="en" />
    </>
  );
}
