import { doctors } from "../data/doctors";
import { equipment } from "../data/equipment";
import { locations } from "../data/locations";
import { services } from "../data/services";
import type { Doctor, Location, MedicalEquipment, Service } from "../types";

export const getServicesByIds = (serviceIds: string[]): Service[] =>
  services.filter((service) => serviceIds.includes(service.id));

export const getDoctorsByIds = (doctorIds: string[]): Doctor[] =>
  doctors.filter((doctor) => doctorIds.includes(doctor.id));

export const getLocationsByIds = (locationIds: string[]): Location[] =>
  locations.filter((location) => locationIds.includes(location.id));

export const getServicesByDoctor = (doctor: Doctor): Service[] => getServicesByIds(doctor.serviceIds);

export const getLocationsByDoctor = (doctor: Doctor): Location[] => getLocationsByIds(doctor.locationIds);

export const getLocationsByService = (serviceId: string): Location[] =>
  locations.filter((location) => location.serviceIds.includes(serviceId));

export const getDoctorsByService = (serviceId: string): Doctor[] =>
  doctors.filter((doctor) => doctor.serviceIds.includes(serviceId));

export const getFeaturedServices = (): Service[] => services.filter((service) => service.featured);

export const getFeaturedEquipment = (): MedicalEquipment[] => equipment.filter((item) => item.featured);

export const getFeaturedLocations = (): Location[] => locations.filter((location) => location.featured);

export const getFeaturedDoctors = (): Doctor[] => doctors.filter((doctor) => doctor.featured);
