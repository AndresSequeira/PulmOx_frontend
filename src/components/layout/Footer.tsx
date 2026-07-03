import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactConfig } from "../../config/contact";
import { navigationItems } from "../../data/navigation";
import { services } from "../../data/services";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { siteImages } from "../../config/images";

export function Footer() {
  return (
    <footer className="bg-brand-ink px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="shell grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-xl font-semibold">
            <img src={siteImages.logoRounded} alt="Logo redondo" className="size-16" />
            PulmOx Costa Rica
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
            Sitio corporativo frontend para servicios respiratorios, camara hiperbarica, sedes y equipos medicos.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Enlaces</h2>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {navigationItems.slice(0, 6).map((item) => (
              <Link key={item.href} to={item.href} className="min-h-8 hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Servicios</h2>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {services.slice(0, 4).map((service) => (
              <Link key={service.id} to={`/servicios/${service.slug}`} className="min-h-8 hover:text-white">{service.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Contacto</h2>
          <div className="mt-4 grid gap-3 text-sm text-blue-100">
            <a className="flex gap-2" href={`tel:${contactConfig.phoneNumber}`}><Phone className="h-4 w-4" /> {contactConfig.phoneNumber}</a>
            <a className="flex gap-2" href={`mailto:${contactConfig.email}`}><Mail className="h-4 w-4" /> {contactConfig.email}</a>
            <a className="flex gap-2" href={createWhatsAppUrl(contactConfig.whatsappNumber, "Hola, deseo contactar a PulmOx.")}><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            <p className="flex gap-2"><MapPin className="h-4 w-4" /> {contactConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="shell mt-10 border-t border-white/10 pt-6 text-sm text-blue-100">
        <p>© {new Date().getFullYear()} PulmOx Costa Rica. Derechos reservados.</p>
      </div>
    </footer>
  );
}
