import { MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
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

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section-pad">
        <div className="shell">
          <h1 className="text-3xl font-semibold">Servicio no encontrado</h1>
          <Link className="mt-4 inline-block text-brand-primary" to="/servicios">Volver a servicios</Link>
        </div>
      </section>
    );
  }

  const relatedLocations = getLocationsByService(service.id);
  const relatedDoctors = getDoctorsByService(service.id);

  return (
    <>
      <Seo title={service.name} description={service.shortDescription} />
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Servicio" title={service.name} description={service.description} />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.benefits.map((benefit) => <span key={benefit} className="rounded-full bg-white px-4 py-2 text-sm font-semibold">{benefit}</span>)}
            </div>
            <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, service.whatsappMessage)} className="mt-6">
              <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
            </ButtonLink>
          </div>
          <ResponsiveImage src={service.image} alt={service.name} className="aspect-[4/3] w-full rounded-2xl bg-white shadow-soft" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading title="Proceso general" description="Flujo editable para explicar como se acompana al paciente." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-brand-line p-5">
                <p className="text-3xl font-semibold text-brand-primary">0{index + 1}</p>
                <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Sedes donde se ofrece" />
            <div className="mt-6 grid gap-5">{relatedLocations.map((location) => <LocationCard key={location.id} location={location} />)}</div>
          </div>
          <div>
            <SectionHeading title="Profesionales relacionados" />
            <div className="mt-6 grid gap-5">{relatedDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell max-w-3xl">
          <FaqList items={service.faqs ?? faqs} />
        </div>
      </section>
    </>
  );
}
