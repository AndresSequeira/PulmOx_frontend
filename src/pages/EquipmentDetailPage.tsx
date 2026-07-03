import { MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ButtonLink } from "../components/common/ButtonLink";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { contactConfig } from "../config/contact";
import { equipment } from "../data/equipment";
import { equipmentCategories } from "../data/equipmentCategories";
import { createWhatsAppUrl } from "../utils/whatsapp";

export function EquipmentDetailPage() {
  const { slug } = useParams();
  const item = equipment.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <section className="section-pad">
        <div className="shell">
          <h1 className="text-3xl font-semibold">Equipo no encontrado</h1>
          <Link to="/equipos" className="mt-4 inline-block text-brand-primary">Volver a equipos</Link>
        </div>
      </section>
    );
  }

  const category = equipmentCategories.find((entry) => entry.id === item.categoryId);

  return (
    <>
      <Seo title={item.name} description={item.shortDescription} />
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow={category?.name ?? "Equipo"} title={item.name} description={item.description} />
            <p className="mt-4 text-sm text-slate-600">Marca: {item.brand} | Modelo: {item.model ?? "MODELO_POR_DEFINIR"}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.availableForSale ? <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold">Disponible para venta</span> : null}
              {item.availableForRent ? <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold">Disponible para alquiler</span> : null}
            </div>
            <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, item.whatsappMessage)} className="mt-6">
              <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
            </ButtonLink>
          </div>
          <ResponsiveImage src={item.images[0]} alt={item.name} className="aspect-[4/3] w-full rounded-2xl bg-white shadow-soft" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Caracteristicas" />
            <ul className="mt-6 grid gap-3">
              {item.features.map((feature) => <li key={feature} className="rounded-lg border border-brand-line px-4 py-3">{feature}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading title="Galeria" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.images.map((image) => <ResponsiveImage key={image} src={image} alt={item.name} className="aspect-[4/3] w-full rounded-lg border border-brand-line" />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
