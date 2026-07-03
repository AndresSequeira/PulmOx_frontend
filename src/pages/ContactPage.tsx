import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "../components/common/ContactForm";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { contactConfig } from "../config/contact";
import { locations } from "../data/locations";
import { createWhatsAppUrl } from "../utils/whatsapp";

export function ContactPage() {
  return (
    <>
      <Seo title="Contacto" description="Contacto, WhatsApp, sedes y formulario visual de PulmOx." />
      <section className="section-pad bg-brand-mist">
        <div className="shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Contacto" title="Hablemos de su consulta" description="Formulario frontend con validacion visual y accesos directos a llamada, correo, WhatsApp y sedes." />
            <div className="mt-6 grid gap-3">
              <a className="flex min-h-12 items-center gap-3 rounded-lg bg-white px-4" href={`tel:${contactConfig.phoneNumber}`}><Phone className="h-5 w-5 text-brand-primary" /> {contactConfig.phoneNumber}</a>
              <a className="flex min-h-12 items-center gap-3 rounded-lg bg-white px-4" href={`mailto:${contactConfig.email}`}><Mail className="h-5 w-5 text-brand-primary" /> {contactConfig.email}</a>
              <a className="flex min-h-12 items-center gap-3 rounded-lg bg-white px-4" href={createWhatsAppUrl(contactConfig.whatsappNumber, "Hola, deseo contactar a PulmOx.")}><MessageCircle className="h-5 w-5 text-brand-primary" /> WhatsApp</a>
              <div className="flex min-h-12 items-center gap-3 rounded-lg bg-white px-4"><MapPin className="h-5 w-5 text-brand-primary" /> {contactConfig.address}</div>
            </div>
            <div className="mt-6 rounded-lg bg-white p-4">
              <h2 className="font-semibold">Sedes</h2>
              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                {locations.map((location) => <p key={location.id}>{location.name}: {location.address}</p>)}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
