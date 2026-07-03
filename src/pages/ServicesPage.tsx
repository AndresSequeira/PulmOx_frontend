import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { ServiceCard } from "../components/common/ServiceCard";
import { services } from "../data/services";

export function ServicesPage() {
  return (
    <>
      <Seo title="Servicios" description="Servicios medicos y respiratorios de PulmOx Costa Rica." />
      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading eyebrow="Servicios" title="Servicios medicos y respiratorios" description="Contenido generado desde src/data/services.ts con rutas dinamicas para cada detalle." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>
    </>
  );
}
