import { publicAsset } from "../utils/assets";
import type { Doctor } from "../types";

export const doctors: Doctor[] = [
  {
    id: "doctor-1",
    slug: "reemplazar-doctor-1",
    name: "REEMPLAZAR_NOMBRE_DOCTOR",
    professionalTitle: "REEMPLAZAR_TITULO_PROFESIONAL",
    specialties: ["REEMPLAZAR_ESPECIALIDAD"],
    shortBiography: "Biografia breve editable del profesional.",
    image: publicAsset("images/doctors/doctor-1.webp"),
    locationIds: ["escazu"],
    serviceIds: ["neumologia", "trastornos-sueno"],
    featured: true,
  },
  {
    id: "doctor-2",
    slug: "reemplazar-doctor-2",
    name: "REEMPLAZAR_NOMBRE_DOCTOR",
    professionalTitle: "REEMPLAZAR_TITULO_PROFESIONAL",
    specialties: ["REEMPLAZAR_ESPECIALIDAD"],
    shortBiography: "Texto temporal claramente reemplazable.",
    image: publicAsset("images/doctors/doctor-2.webp"),
    locationIds: ["san-jose"],
    serviceIds: ["camara-hiperbarica"],
    featured: true,
  },
];
