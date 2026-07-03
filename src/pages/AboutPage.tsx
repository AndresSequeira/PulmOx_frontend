import { ButtonLink } from "../components/common/ButtonLink";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { siteImages } from "../config/images";

export function AboutPage() {
  return (
    <>
      <Seo title="Nosotros" description="Informacion corporativa editable de PulmOx Costa Rica." />
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Nosotros" title="PulmOx Costa Rica" description="Presentacion institucional preparada para reemplazar con historia, enfoque profesional, valores y compromiso con pacientes." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Enfoque profesional", "Atencion humana", "Tecnologia medica", "Datos verificables"].map((value) => (
                <div key={value} className="rounded-lg bg-white p-4 font-semibold shadow-sm">{value}</div>
              ))}
            </div>
            <ButtonLink to="/contacto" className="mt-6">Consultar</ButtonLink>
          </div>
          <ResponsiveImage src={siteImages.aboutMain} alt="PulmOx Costa Rica" className="aspect-[4/3] w-full rounded-2xl bg-white shadow-soft" />
        </div>
      </section>
    </>
  );
}
