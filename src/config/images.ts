import { publicAsset } from "../utils/assets";

export const siteImages = {
  logo: publicAsset("images/logo/logo.png"),
  logoRounded: publicAsset("images/logo/logo-rounded.png"),
  homeHero: publicAsset("images/home/hero-principal.png"),
  aboutMain: publicAsset("images/about/nosotros.webp"),
  hyperbaricChamberMain: publicAsset("images/services/camara-hiperbarica-main.png"),
  hyperbaricChamber: publicAsset("images/services/camara-hiperbarica.png"),
  sleepStudy: publicAsset("images/services/estudio-sueno.png"),
  spirometry: publicAsset("images/services/espirometria.png"),
  equipmentHero: publicAsset("images/equipment/equipos-hero.webp"),
  locationsHero: publicAsset("images/locations/sedes-hero.webp"),
  doctorsHero: publicAsset("images/doctors/doctores-hero.webp"),
  contactHero: publicAsset("images/general/contacto.webp"),
} as const;
