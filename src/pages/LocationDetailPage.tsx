import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/common/ButtonLink";
import { DoctorCard } from "../components/common/DoctorCard";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { locations } from "../data/locations";
import { getDoctorsByIds, getServicesByIds } from "../utils/relations";
import { createWhatsAppUrl } from "../utils/whatsapp";

export function LocationDetailPage() {
  const { slug } = useParams();
  const location = locations.find((entry) => entry.slug === slug);

  if (!location) {
    return (
      <section className="section-pad">
        <div className="shell">
          <h1 className="text-3xl font-semibold">Sede no encontrada</h1>
          <Link to="/sedes" className="mt-4 inline-block text-brand-primary">Volver a sedes</Link>
        </div>
      </section>
    );
  }

  const locationServices = getServicesByIds(location.serviceIds);
  const locationDoctors = getDoctorsByIds(location.doctorIds);
  const message = `Hola, deseo recibir mas informacion sobre los servicios disponibles en la sede de ${location.name}.`;

  return (
    <>
      <Seo title={location.name} description={location.shortDescription} />
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Sede" title={location.name} description={location.description} />
            <div className="mt-5 grid gap-2 text-sm text-slate-700">
              <p>{location.address}</p>
              <p>{location.province}, {location.canton}, {location.district}</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={`tel:${location.phone}`} variant="secondary"><Phone className="h-4 w-4" /> Llamar</ButtonLink>
              <ButtonLink href={createWhatsAppUrl(location.whatsapp, message)}><MessageCircle className="h-4 w-4" /> WhatsApp</ButtonLink>
              <ButtonLink href={`mailto:${location.email}`} variant="secondary"><Mail className="h-4 w-4" /> Correo</ButtonLink>
              <ButtonLink href={location.mapUrl} target="_blank" rel="noreferrer" variant="ghost"><MapPin className="h-4 w-4" /> Como llegar</ButtonLink>
            </div>
          </div>
          <ResponsiveImage src={location.image} alt={location.name} className="aspect-[4/3] w-full rounded-2xl bg-white shadow-soft" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-brand-line bg-brand-mist p-5">
            <SectionHeading title="Ubicacion" description="Espacio preparado para mapa o enlace de Google Maps." />
            {location.mapEmbedUrl ? (
              <iframe title={`Mapa de ${location.name}`} src={location.mapEmbedUrl} className="mt-6 h-72 w-full rounded-lg border-0" loading="lazy" />
            ) : (
              <div className="mt-6 grid h-72 place-items-center rounded-lg border border-dashed border-brand-line bg-white text-center text-slate-500">
                REEMPLAZAR_MAPA
              </div>
            )}
          </div>
          <div>
            <SectionHeading title="Horarios" />
            <div className="mt-6 grid gap-3">
              {location.businessHours.map((hour) => (
                <div key={hour.day} className="flex justify-between gap-4 rounded-lg border border-brand-line px-4 py-3">
                  <span className="font-semibold">{hour.day}</span>
                  <span className="text-right text-sm text-slate-600">{hour.closed ? "Cerrado" : `${hour.openTime ?? ""} ${hour.closeTime ?? ""}`} {hour.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Servicios de la sede" />
            <div className="mt-6 grid gap-3">
              {locationServices.map((service) => (
                <Link key={service.id} to={`/servicios/${service.slug}`} className="rounded-lg bg-white p-4 font-semibold hover:text-brand-primary">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Doctores" />
            <div className="mt-6 grid gap-5">
              {locationDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
