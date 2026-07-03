export interface BusinessHour {
  day: string;
  openTime?: string;
  closeTime?: string;
  closed?: boolean;
  note?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefit: string;
  benefits: string[];
  process: ServiceProcessStep[];
  image: string;
  gallery?: string[];
  featured: boolean;
  whatsappMessage: string;
  faqs?: Faq[];
}

export interface EquipmentCategory {
  id: string;
  name: string;
  description: string;
}

export interface MedicalEquipment {
  id: number;
  slug: string;
  name: string;
  brand: string;
  model?: string;
  shortDescription: string;
  description: string;
  features: string[];
  images: string[];
  categoryId: string;
  availableForSale: boolean;
  availableForRent: boolean;
  featured: boolean;
  whatsappMessage: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  address: string;
  province: string;
  canton?: string;
  district?: string;
  phone: string;
  whatsapp: string;
  email?: string;
  mapUrl?: string;
  mapEmbedUrl?: string;
  image: string;
  gallery?: string[];
  serviceIds: string[];
  doctorIds: string[];
  businessHours: BusinessHour[];
  featured: boolean;
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  professionalTitle: string;
  specialties: string[];
  shortBiography?: string;
  image: string;
  locationIds: string[];
  serviceIds: string[];
  featured: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  locationId: string;
  serviceId: string;
  equipmentSlug: string;
  message: string;
}
