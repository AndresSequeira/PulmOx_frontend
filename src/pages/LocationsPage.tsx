import { LocationCard } from "../components/common/LocationCard";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { locations } from "../data/locations";

export function LocationsPage() {
  return (
    <>
      <Seo title="Sedes" description="Sedes de atencion de PulmOx Costa Rica." />
      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading eyebrow="Sedes" title="Ubicaciones de atencion" description="Cada sede muestra direccion, horario resumido, servicios, doctores y botones de contacto." />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {locations.map((location) => <LocationCard key={location.id} location={location} />)}
          </div>
        </div>
      </section>
    </>
  );
}
