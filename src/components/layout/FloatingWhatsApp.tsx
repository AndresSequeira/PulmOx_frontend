import { MessageCircle } from "lucide-react";
import { contactConfig } from "../../config/contact";
import { createWhatsAppUrl } from "../../utils/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppUrl(contactConfig.whatsappNumber, "Hola, deseo recibir mas informacion de PulmOx.")}
      className="fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-primary text-white shadow-soft transition hover:-translate-y-1 sm:bottom-6 sm:right-6"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
