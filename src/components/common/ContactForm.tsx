import { useState } from "react";
import { equipment } from "../../data/equipment";
import { locations } from "../../data/locations";
import { services } from "../../data/services";
import type { ContactFormData } from "../../types";

const initialData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  locationId: "",
  serviceId: "",
  equipmentSlug: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) nextErrors.name = "Ingrese su nombre.";
    if (!formData.phone.trim()) nextErrors.phone = "Ingrese su telefono.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Ingrese un correo valido.";
    }
    if (!formData.message.trim()) nextErrors.message = "Ingrese su mensaje.";
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialData);
    }
  };

  const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-brand-line bg-white p-4 shadow-sm sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Nombre
          <input value={formData.name} onChange={(event) => updateField("name", event.target.value)} className={fieldClass} autoComplete="name" />
          {errors.name ? <span className="mt-1 block text-sm text-red-600">{errors.name}</span> : null}
        </label>
        <label className="text-sm font-semibold">
          Telefono
          <input type="tel" value={formData.phone} onChange={(event) => updateField("phone", event.target.value)} className={fieldClass} autoComplete="tel" />
          {errors.phone ? <span className="mt-1 block text-sm text-red-600">{errors.phone}</span> : null}
        </label>
        <label className="text-sm font-semibold">
          Correo
          <input type="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} className={fieldClass} autoComplete="email" />
          {errors.email ? <span className="mt-1 block text-sm text-red-600">{errors.email}</span> : null}
        </label>
        <label className="text-sm font-semibold">
          Sede
          <select value={formData.locationId} onChange={(event) => updateField("locationId", event.target.value)} className={fieldClass}>
            <option value="">Seleccionar sede</option>
            {locations.map((location) => <option key={location.id} value={location.id}>{location.name}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Servicio
          <select value={formData.serviceId} onChange={(event) => updateField("serviceId", event.target.value)} className={fieldClass}>
            <option value="">Seleccionar servicio</option>
            {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Equipo
          <select value={formData.equipmentSlug} onChange={(event) => updateField("equipmentSlug", event.target.value)} className={fieldClass}>
            <option value="">Seleccionar equipo</option>
            {equipment.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold">
        Mensaje
        <textarea value={formData.message} onChange={(event) => updateField("message", event.target.value)} className={`${fieldClass} min-h-32 resize-y`} />
        {errors.message ? <span className="mt-1 block text-sm text-red-600">{errors.message}</span> : null}
      </label>
      <button type="submit" className="mt-5 min-h-12 w-full rounded-full bg-brand-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-600">
        Enviar consulta
      </button>
      {submitted ? <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">Consulta registrada visualmente. Conecte un backend o canal externo cuando corresponda.</p> : null}
    </form>
  );
}
