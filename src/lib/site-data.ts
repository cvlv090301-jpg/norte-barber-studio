/**
 * Norte Barber Studio — business data.
 *
 * Toda la información del negocio vive en este archivo para que sea fácil
 * de personalizar. Reemplaza los valores entre corchetes "[ ]" y los campos
 * vacíos ("") con los datos reales antes de entregar el sitio.
 *
 * No se inventa información: donde un dato no está disponible se deja un
 * marcador claramente identificable.
 */

export type Service = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type ScheduleItem = {
  day: string;
  hours: string;
};

export const site = {
  name: "Norte Barber Studio",
  shortName: "Norte Barber",
  type: "Barbería",
  city: "San Nicolás de los Garza",
  state: "Nuevo León",
  country: "México",

  tagline: "Precisión en cada corte",
  heroSubtitle:
    "Barbería masculina premium en San Nicolás de los Garza. Cortes y arreglo de barba con atención individual, en un espacio pensado para que salgas impecable.",

  presentation:
    "Norte Barber Studio es una barbería masculina en San Nicolás de los Garza. Trabajamos cortes y arreglo de barba en un espacio premium, moderno y enfocado en el detalle. Cada visita se toma con tiempo: te recibimos, escuchamos lo que buscas y te damos un acabado limpio y a tu medida.",

  /**
   * Número de WhatsApp en formato internacional, sin "+" ni espacios.
   * Ejemplo para Monterrey: "528112345678"
   * Mientras esté vacío, los botones de WhatsApp apuntan a la sección de
   * contacto (#reservar) en lugar de abrir un chat roto.
   */
  whatsappNumber: "",

  /** Usuario de Instagram sin "@". Vacío = se oculta el enlace. */
  instagram: "",

  /** URL o usuario de Facebook. Vacío = se oculta el enlace. */
  facebook: "",

  /** Teléfono para llamada (formato internacional). Vacío = se oculta. */
  phone: "",

  /** Calle, número y colonia reales. */
  addressLine: "[Calle, número y colonia]",
  addressCity: "San Nicolás de los Garza, Nuevo León",

  /** Consulta que se usa en el mapa y en el botón "Cómo llegar". */
  mapQuery: "San Nicolás de los Garza, Nuevo León",

  /** Enlace de reservación externo (Booking/Calendly/etc). Vacío = se usa WhatsApp. */
  bookingUrl: "",

  schedule: [
    { day: "Lunes", hours: "[HORARIO]" },
    { day: "Martes", hours: "[HORARIO]" },
    { day: "Miércoles", hours: "[HORARIO]" },
    { day: "Jueves", hours: "[HORARIO]" },
    { day: "Viernes", hours: "[HORARIO]" },
    { day: "Sábado", hours: "[HORARIO]" },
    { day: "Domingo", hours: "[HORARIO]" },
  ] satisfies ScheduleItem[],

  /**
   * Servicios. Reemplaza nombre, descripción, precio y duración con los reales.
   * Mantén el orden para la cuadrícula de tarjetas.
   */
  services: [
    {
      name: "[Servicio 1]",
      description: "[Descripción breve del servicio]",
      price: "$XXX",
      duration: "XX min",
    },
    {
      name: "[Servicio 2]",
      description: "[Descripción breve del servicio]",
      price: "$XXX",
      duration: "XX min",
    },
    {
      name: "[Servicio 3]",
      description: "[Descripción breve del servicio]",
      price: "$XXX",
      duration: "XX min",
    },
    {
      name: "[Servicio 4]",
      description: "[Descripción breve del servicio]",
      price: "$XXX",
      duration: "XX min",
    },
  ] satisfies Service[],

  /**
   * Razones para elegir el negocio. Usa únicamente características reales.
   * Reemplaza los marcadores con diferenciadores concretos del negocio.
   */
  benefits: [
    {
      title: "[Diferenciador 1]",
      description:
        "[Describe una razón concreta para elegir Norte Barber Studio — técnica, ambiente o atención.]",
    },
    {
      title: "[Diferenciador 2]",
      description:
        "[Describe una razón concreta para elegir Norte Barber Studio.]",
    },
    {
      title: "[Diferenciador 3]",
      description:
        "[Describe una razón concreta para elegir Norte Barber Studio.]",
    },
  ] satisfies Benefit[],

  /**
   * Promoción actual. null = la sección de promoción no se muestra.
   * Para activarla: { title: "...", description: "..." }
   */
  promo: null as null | { title: string; description: string },
} as const;

/** Mensaje inicial precargado para el botón de WhatsApp. */
const whatsappMessage = `Hola, quiero reservar una cita en ${site.name}.`;

/** Enlace de WhatsApp o, si no hay número, ancla a la sección de contacto. */
export const whatsappLink = (): string =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "#reservar";

/** Enlace de Instagram normalizado o vacío. */
export const instagramUrl = (): string =>
  site.instagram ? `https://instagram.com/${site.instagram}` : "";

/** Enlace de Facebook normalizado o vacío. */
export const facebookUrl = (): string => site.facebook ?? "";

/** Enlace "Cómo llegar" a Google Maps. */
export const directionsUrl = (): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

/** URL de embed del mapa (sin API key). */
export const mapEmbedUrl = (): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
