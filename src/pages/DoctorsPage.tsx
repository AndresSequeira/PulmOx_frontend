import { DoctorCard } from "../components/common/DoctorCard";
import { SectionHeading } from "../components/common/SectionHeading";
import { Seo } from "../components/common/Seo";
import { doctors } from "../data/doctors";

export function DoctorsPage() {
  return (
    <>
      <Seo title="Doctores" description="Doctores y especialistas de PulmOx Costa Rica." />
      <section className="section-pad bg-brand-mist">
        <div className="shell">
          <SectionHeading eyebrow="Doctores" title="Especialistas por sede y servicio" description="Datos temporales claramente reemplazables desde src/data/doctors.ts." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </section>
    </>
  );
}
