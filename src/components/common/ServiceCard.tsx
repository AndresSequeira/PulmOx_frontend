import { ArrowRight, MessageCircle } from "lucide-react";
import { contactConfig } from "../../config/contact";
import type { Service } from "../../types";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { ButtonLink } from "./ButtonLink";
import { ResponsiveImage } from "./ResponsiveImage";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[16/10] overflow-hidden bg-brand-mist">
        <ResponsiveImage src={service.image} alt={service.name} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Servicio</p>
        <h3 className="text-xl font-semibold leading-tight">{service.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
        <p className="mt-3 rounded-lg bg-brand-mist px-3 py-2 text-sm text-brand-ink">{service.benefit}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ButtonLink to={`/servicios/${service.slug}`} variant="secondary" className="w-full">
            Ver detalles <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, service.whatsappMessage)} className="w-full" aria-label={`Consultar ${service.name} por WhatsApp`}>
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
