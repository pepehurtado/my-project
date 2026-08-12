import SiteShell from "../components/site/SiteShell";
import { es } from "../../content/es";
import { buildJsonLd } from "../../content/jsonLd";

export default function HomePageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(es)) }}
      />
      <SiteShell initialLocale="es" />
    </>
  );
}
