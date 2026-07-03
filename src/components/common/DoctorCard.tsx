import type { Doctor } from "../../types";
import { getLocationsByDoctor, getServicesByDoctor } from "../../utils/relations";
import { ResponsiveImage } from "./ResponsiveImage";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const doctorLocations = getLocationsByDoctor(doctor);
  const doctorServices = getServicesByDoctor(doctor);

  return (
    <article className="rounded-lg border border-brand-line bg-white p-4 shadow-sm">
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-brand-mist">
        <ResponsiveImage src={doctor.image} alt={doctor.name} className="h-full w-full" />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-primary">{doctor.professionalTitle}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{doctor.shortBiography}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.specialties.map((specialty) => (
            <span key={specialty} className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold">{specialty}</span>
          ))}
        </div>
        <div className="mt-4 text-sm text-slate-600">
          <p>Sedes: {doctorLocations.map((location) => location.name).join(", ")}</p>
          <p>Servicios: {doctorServices.map((service) => service.name).join(", ")}</p>
        </div>
      </div>
    </article>
  );
}
