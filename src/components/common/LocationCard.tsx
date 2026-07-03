import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Location } from "../../types";
import { getDoctorsByIds, getServicesByIds } from "../../utils/relations";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { ButtonLink } from "./ButtonLink";
import { ResponsiveImage } from "./ResponsiveImage";

export function LocationCard({ location }: { location: Location }) {
  const locationServices = getServicesByIds(location.serviceIds);
  const locationDoctors = getDoctorsByIds(location.doctorIds);
  const message = `Hola, deseo recibir mas informacion sobre la sede de ${location.name}.`;

  return (
    <article className="overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm">
      <div className="aspect-[16/9] bg-brand-mist">
        <ResponsiveImage src={location.image} alt={location.name} className="h-full w-full" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold">{location.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{location.shortDescription}</p>
        <div className="mt-4 space-y-2 text-sm text-slate-700">
          <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-primary" /> {location.address}</p>
          <p className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-primary" /> {location.phone}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {locationServices.slice(0, 3).map((service) => (
            <span key={service.id} className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold">{service.name}</span>
          ))}
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-primary">
            {locationDoctors.length} doctores
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ButtonLink to={`/sedes/${location.slug}`} variant="secondary" className="w-full">Ver sede</ButtonLink>
          <ButtonLink href={location.mapUrl} target="_blank" rel="noreferrer" variant="ghost" className="w-full">Como llegar</ButtonLink>
          <ButtonLink href={createWhatsAppUrl(location.whatsapp, message)} className="w-full sm:col-span-2">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
