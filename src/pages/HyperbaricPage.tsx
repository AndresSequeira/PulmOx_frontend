import { MessageCircle } from "lucide-react";
import { ButtonLink } from "../components/common/ButtonLink";
import { DoctorCard } from "../components/common/DoctorCard";
import { FaqList } from "../components/common/FaqList";
import { LocationCard } from "../components/common/LocationCard";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { contactConfig } from "../config/contact";
import { faqs } from "../data/faqs";
import { services } from "../data/services";
import { getDoctorsByService, getLocationsByService } from "../utils/relations";
import { createWhatsAppUrl } from "../utils/whatsapp";

export function HyperbaricPage() {
  const service = services.find((item) => item.id === "camara-hiperbarica")!;
  const locations = getLocationsByService(service.id);
  const doctors = getDoctorsByService(service.id);

  return (
    <>
      <Seo title="Camara hiperbarica" description="Servicio independiente de camara hiperbarica de PulmOx Costa Rica." />
      <section className="section-pad bg-brand-primary text-white">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Servicio especializado</p>
            <h1 className="text-5xl font-semibold leading-none sm:text-6xl">Camara hiperbarica</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">{service.description}</p>
            <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, service.whatsappMessage)} variant="secondary" className="mt-6">
              <MessageCircle className="h-4 w-4" /> Consultar disponibilidad
            </ButtonLink>
          </div>
          <ResponsiveImage src={service.image} alt={service.name} className="aspect-[4/3] w-full rounded-2xl bg-white/10" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading title="Beneficios y posibles aplicaciones" description="Textos preparados para revision profesional. No se garantizan resultados ni se reemplaza una valoracion medica." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.benefits.map((benefit) => <div key={benefit} className="rounded-lg border border-brand-line p-5 font-semibold">{benefit}</div>)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Proceso de una sesion" />
            <div className="mt-6 space-y-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="rounded-lg bg-white p-5">
                  <p className="text-brand-primary">0{index + 1}</p>
                  <h2 className="text-xl font-semibold">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Preguntas frecuentes" />
            <div className="mt-6"><FaqList items={faqs} /></div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading title="Sedes y profesionales relacionados" />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {locations.map((location) => <LocationCard key={location.id} location={location} />)}
            {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </section>
    </>
  );
}
