import { ArrowRight, MessageCircle } from "lucide-react";
import { contactConfig } from "../../config/contact";
import type { MedicalEquipment } from "../../types";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { ButtonLink } from "./ButtonLink";
import { ResponsiveImage } from "./ResponsiveImage";

export function EquipmentCard({ item }: { item: MedicalEquipment }) {
  return (
    <article className="rounded-lg border border-brand-line bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-brand-mist">
        <ResponsiveImage src={item.images[0]} alt={item.name} className="h-full w-full" />
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-brand-primary">{item.brand}</p>
        <h3 className="mt-1 text-xl font-semibold">{item.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.availableForSale ? <span className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold">Venta</span> : null}
          {item.availableForRent ? <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-primary">Alquiler</span> : null}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ButtonLink to={`/equipos/${item.slug}`} variant="secondary" className="w-full">
            Info <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, item.whatsappMessage)} className="w-full">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
