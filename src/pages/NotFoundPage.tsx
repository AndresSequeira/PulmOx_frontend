import { ButtonLink } from "../components/common/ButtonLink";
import { Seo } from "../components/common/Seo";
import { contactConfig } from "../config/contact";
import { createWhatsAppUrl } from "../utils/whatsapp";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Pagina no encontrada" description="La pagina solicitada no existe." />
      <section className="section-pad bg-brand-primary text-white">
        <div className="shell max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">404</p>
          <h1 className="mt-4 text-5xl font-semibold">Pagina no encontrada</h1>
          <p className="mt-4 text-blue-100">La ruta que intenta visitar no esta disponible.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
            <ButtonLink to="/" variant="secondary">Volver al inicio</ButtonLink>
            <ButtonLink href={createWhatsAppUrl(contactConfig.whatsappNumber, "Hola, necesito ayuda navegando el sitio de PulmOx.")} variant="secondary">Contactar</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
