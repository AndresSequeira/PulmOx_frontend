import {
  Activity,
  ArrowRight,
  Stethoscope,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "../components/common/ButtonLink";
import { DoctorCard } from "../components/common/DoctorCard";
import { EquipmentCard } from "../components/common/EquipmentCard";
import { FaqList } from "../components/common/FaqList";
import { LocationCard } from "../components/common/LocationCard";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { contactConfig } from "../config/contact";
import { siteImages } from "../config/images";
import { faqs } from "../data/faqs";
import { createWhatsAppUrl } from "../utils/whatsapp";
import {
  getFeaturedDoctors,
  getFeaturedEquipment,
  getFeaturedLocations,
  getFeaturedServices,
} from "../utils/relations";
import { ServiceCard } from "../components/common/ServiceCard";

export function HomePage() {
  return (
    <>
      <Seo
        title="Inicio"
        description="PulmOx Costa Rica: terapia respiratoria, camara hiperbarica, trastornos del sueno, equipos respiratorios."
      />
      <section className="overflow-hidden bg-brand-primary px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="shell rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-soft backdrop-blur">
          <div className="grid gap-4 rounded-[22px] bg-white p-4 text-brand-ink lg:grid-cols-[1.1fr_0.9fr] lg:p-6">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 inline-flex rounded-full bg-brand-mist px-4 py-2 text-sm font-regular text-brand-primary">
                  Salud respiratoria y tecnologia medica
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-normal sm:text-6xl lg:text-7xl">
                  PulmOx Costa Rica
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  En PulmOx contamos con más de 4 años de experiencia brindando
                  servicios de cámara hiperbárica y atención respiratoria
                  personalizada. Nuestro compromiso es ofrecer soluciones
                  seguras, profesionales y adaptadas a las necesidades de cada
                  paciente, acompañándolo en cada etapa de su bienestar y
                  recuperación.
                </p>
                <div className="mt-6 grid gap-3 sm:flex">
                  <ButtonLink
                    className="w-full sm:w-auto"
                    href={createWhatsAppUrl(
                      contactConfig.whatsappNumber,
                      "Hola, deseo agendar o consultar con PulmOx.",
                    )}
                  >
                    <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                  </ButtonLink>
                  <ButtonLink
                    to="/servicios"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Ver servicios <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-brand-primary p-4 text-white">
              <ResponsiveImage
                src={siteImages.homeHero}
                alt="Equipo medico PulmOx"
                loading="eager"
                className="absolute inset-x-0 bottom-0 h-[78%] w-full"
              />
              <div className="relative z-10 max-w-xs">
                <h2 className="mt-2 text-3xl font-semibold leading-none">
                  Atencion ajustada a cada necesidad
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading
            align="center"
            title="Servicios respiratorios en una experiencia ajustada a tu necesidad"
            description="Contamos con las mejores tecnologias y equipos para brindarte un servicio de calidad profesional."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Atencion respiratoria",
                text: "Profesionales de la salud respiratoria altamente capacitados.",
              },
              {
                icon: Activity,
                title: "Tecnologia medica",
                text: "Camara hiperbarica y equipos respiratorios listos para brindarer el mejor servicio.",
              },
              {
                icon: ShieldCheck,
                title: "Seguridad",
                text: "Contamos con certificados bajo estandares internacionales para tu seguridad.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-brand-line bg-brand-mist p-5"
              >
                <item.icon className="h-8 w-8 text-brand-primary" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Servicios"
            title="Servicios destacados"
            description="Estos son los servicios preferidos por nuestros clientes."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {getFeaturedServices().map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl bg-brand-primary p-5 text-white">
            <ResponsiveImage
              src={siteImages.hyperbaricChamberMain}
              alt="Camara hiperbarica"
              className="aspect-[4/3] w-full rounded-xl"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Camara hiperbarica"
              title="Pagina independiente para consulta especializada"
              description="Contenido preparado para explicar beneficios, aplicaciones posibles y proceso general sin prometer resultados medicos."
            />
            <ButtonLink to="/camara-hiperbarica" className="mt-6">
              Conocer el servicio <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Equipos"
            title="Catalogo informativo"
            description="Venta y alquiler preparados para consulta, sin carrito ni pagos."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {getFeaturedEquipment().map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Sedes"
            title="Ubicaciones y servicios por sede"
            description="Las sedes resuelven servicios y doctores mediante identificadores locales."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {getFeaturedLocations().map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading
            eyebrow="Equipo"
            title="Doctores y especialistas"
            description="Datos temporales marcados para reemplazo cuando PulmOx confirme la informacion."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {getFeaturedDoctors().map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Informacion rapida para pacientes"
            />
            <div className="mt-6">
              <FaqList items={faqs} />
            </div>
          </div>
          <div className="rounded-2xl bg-brand-primary p-6 text-white">
            <MapPin className="h-10 w-10" />
            <h2 className="mt-6 text-3xl font-semibold">
              Listo para consultar una sede?
            </h2>
            <p className="mt-3 text-blue-100">
              WhatsApp se mantiene disponible en todo el sitio y cada modulo
              crea mensajes contextuales.
            </p>
            <ButtonLink
              href={createWhatsAppUrl(
                contactConfig.whatsappNumber,
                "Hola, deseo recibir informacion sobre sedes y servicios de PulmOx.",
              )}
              variant="secondary"
              className="mt-6"
            >
              Escribir por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
