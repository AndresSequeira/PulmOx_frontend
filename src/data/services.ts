import { siteImages } from "../config/images";
import type { Service } from "../types";

const defaultProcess = [
  {
    title: "Consulta inicial",
    description:
      "Revision de la necesidad del paciente y orientacion del siguiente paso.",
  },
  {
    title: "Evaluacion profesional",
    description:
      "Valoracion con el equipo o especialista correspondiente segun el servicio.",
  },
  {
    title: "Seguimiento",
    description:
      "Indicaciones claras para continuar el proceso con seguridad y acompanamiento.",
  },
];

export const services: Service[] = [
  {
    id: "camara-hiperbarica",
    slug: "camara-hiperbarica",
    name: "Camara hiperbarica",
    shortDescription:
      "Servicio especializado con oxigenoterapia hiperbarica bajo indicacion profesional.",
    description:
      "Espacio preparado para sesiones de camara hiperbarica con enfoque informativo, seguimiento profesional y criterios de seguridad definidos por el equipo tratante.",
    benefit: "Acompanamiento tecnico y medico durante el proceso.",
    benefits: [
      "Proceso guiado",
      "Informacion clara",
      "Atencion por sede disponible",
    ],
    process: defaultProcess,
    image: siteImages.hyperbaricChamber,
    featured: true,
    whatsappMessage:
      "Hola, deseo recibir mas informacion sobre el servicio de camara hiperbarica.",
  },
  {
    id: "trastornos-sueno",
    slug: "trastornos-del-sueno",
    name: "Trastornos del sueno",
    shortDescription:
      "Orientacion para pacientes con ronquido, apnea del sueno u otras alteraciones.",
    description:
      "Servicio preparado para evaluar sintomas relacionados con el descanso y coordinar estudios, equipos o seguimiento cuando corresponda.",
    benefit: "Ruta clara para consultar sobre descanso y respiracion nocturna.",
    benefits: [
      "Consulta orientativa",
      "Relacion con equipos CPAP y BiPAP",
      "Seguimiento personalizado",
    ],
    process: defaultProcess,
    image: siteImages.sleepStudy,
    featured: true,
    whatsappMessage:
      "Hola, deseo recibir mas informacion sobre los servicios de trastornos del sueno.",
  },
  {
    id: "espirometria",
    slug: "espirometria",
    name: "Espirometría",
    shortDescription:
      "Prueba respiratoria para evaluar la cantidad y velocidad del aire que movilizan los pulmones.",
    description:
      "La espirometría permite medir la función pulmonar mediante una prueba sencilla y no invasiva. Sus resultados sirven como apoyo para la valoración, seguimiento y control de la salud respiratoria.",
    benefit:
      "Brinda información objetiva sobre el funcionamiento de los pulmones.",
    benefits: [
      "Evaluación de la capacidad pulmonar",
      "Medición del flujo respiratorio",
      "Apoyo para el seguimiento de la salud respiratoria",
      "Prueba rápida y no invasiva",
    ],
    process: defaultProcess,
    image: siteImages.spirometry,
    featured: true,
    whatsappMessage:
      "Hola, deseo recibir más información sobre el servicio de espirometría.",
  },
];
