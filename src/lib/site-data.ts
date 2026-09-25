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

  tagline: "Tu estilo. Tu corte.",
  heroSubtitle:
    "Barbería masculina contemporánea en San Nicolás de los Garza.",
  heroKicker: "Cortes · Barba · Estilo",

  presentation: [
    "Norte Barber Studio nace con una idea sencilla: ofrecer un espacio donde un buen corte, una barba bien definida y una atención cuidada formen parte de la misma experiencia.",
    "Un concepto de barbería contemporánea pensado para quienes buscan verse bien sin complicaciones.",
  ],

  /**
   * SITIO DE DEMOSTRACIÓN: el número es ficticio. Mientras demoMode sea true,
   * los botones de WhatsApp no abren un chat real (simulan la interacción).
   * Para un cliente real: pon demoMode en false y whatsappNumber real (ej. "528112345678").
   */
  demoMode: true,
  whatsappNumber: "528100000000",
  whatsappDisplay: "+52 81 0000 0000",

  instagram: "nortebarberstudio",
  facebook: "",
  phone: "",

  addressLine: "Av. Universidad 1200, Col. Anáhuac",
  addressCity: "San Nicolás de los Garza, Nuevo León",
  mapQuery: "San Nicolás de los Garza, Nuevo León",
  bookingUrl: "",

  schedule: [
    { day: "Lunes – Viernes", hours: "10:00 AM – 8:00 PM" },
    { day: "Sábado", hours: "9:00 AM – 6:00 PM" },
    { day: "Domingo", hours: "Cerrado" },
  ] satisfies ScheduleItem[],

  services: [
    { name: "Corte clásico", description: "Corte personalizado de acuerdo con tu estilo y tipo de cabello.", price: "$250 MXN", duration: "45 min" },
    { name: "Corte + barba", description: "Corte de cabello acompañado de perfilado y arreglo de barba.", price: "$350 MXN", duration: "60 min" },
    { name: "Perfilado de barba", description: "Definición de líneas, contornos y acabado de barba.", price: "$180 MXN", duration: "30 min" },
    { name: "Ritual Norte", description: "Corte + barba + lavado + tratamiento de toalla caliente.", price: "$500 MXN", duration: "90 min" },
  ] satisfies Service[],

  benefits: [
    { title: "Corte personalizado", description: "Cada servicio se adapta al estilo que buscas." },
    { title: "Atención con cita", description: "Agenda tu horario y disfruta tu servicio sin prisas." },
    { title: "Acabado profesional", description: "Cada corte termina con styling y detalles finales." },
    { title: "Ambiente premium", description: "Un espacio pensado para relajarte mientras renuevas tu estilo." },
  ] satisfies Benefit[],

  promo: {
    eyebrow: "Nuevos clientes",
    title: "10% de descuento en tu primera visita",
    cta: "Quiero reservar",
    note: "",
  } as null | { eyebrow: string; title: string; cta: string; note: string },
} as const;

/** Mensaje inicial precargado para el botón de WhatsApp. */
const whatsappMessage = `Hola, quiero reservar una cita en ${site.name}.`;

/** Enlace de WhatsApp o, si no hay número, ancla a la sección de contacto. */
export const whatsappLink = (): string =>
  site.whatsappNumber && !site.demoMode
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "#contacto";

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
  `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`;
