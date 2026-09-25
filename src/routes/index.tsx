import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroImg from "../assets/hero.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import {
  site,
  whatsappLink,
  instagramUrl,
  facebookUrl,
  directionsUrl,
  mapEmbedUrl,
} from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Norte Barber Studio | Barbería masculina en San Nicolás de los Garza",
      },
      {
        name: "description",
        content:
          "Norte Barber Studio: barbería masculina premium en San Nicolás de los Garza, Nuevo León. Cortes y arreglo de barba con atención individual. Reserva tu cita por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Norte Barber Studio | Barbería en San Nicolás de los Garza",
      },
      {
        property: "og:description",
        content:
          "Barbería masculina premium en San Nicolás de los Garza. Cortes y arreglo de barba. Reserva tu cita.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Norte Barber Studio",
          description:
            "Barbería masculina premium en San Nicolás de los Garza, Nuevo León.",
          areaServed: "San Nicolás de los Garza",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Universidad 1200, Col. Anáhuac",
            addressLocality: "San Nicolás de los Garza",
            addressRegion: "Nuevo León",
            addressCountry: "MX",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const gallery = [
  { src: gallery1, alt: "Herramientas de barbería sobre madera oscura" },
  { src: gallery2, alt: "Sillón de barbería de cuero" },
  { src: gallery3, alt: "Estaciones de barbería" },
  { src: gallery4, alt: "Productos de arreglo y navaja" },
];

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground ring-1 ring-accent/30 transition hover:brightness-110 active:scale-[0.99]";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-4 text-sm font-medium text-foreground/80 transition hover:bg-white/5 active:scale-[0.99]";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-accent/70">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl leading-none tracking-wide text-foreground sm:text-5xl">
      {children}
    </h2>
  );
}

function Nav() {
  const wa = whatsappLink();
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-display text-xl tracking-[0.08em] text-foreground">
          Norte <span className="text-accent">Barber</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          <a href="#servicios" className="text-sm font-medium text-foreground/70 transition hover:text-accent">
            Servicios
          </a>
          <a href="#galeria" className="text-sm font-medium text-foreground/70 transition hover:text-accent">
            Galería
          </a>
          <a href="#ubicacion" className="text-sm font-medium text-foreground/70 transition hover:text-accent">
            Ubicación
          </a>
          <a href="#contacto" className="text-sm font-medium text-foreground/70 transition hover:text-accent">
            Contacto
          </a>
        </div>
        <a
          href={wa}
          target={wa.startsWith("http") ? "_blank" : undefined}
          rel={wa.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent-foreground transition hover:brightness-110"
        >
          Reservar
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const wa = whatsappLink();
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior de barbería premium con luz ámbar"
          className="h-full w-full object-cover"
          width={1088}
          height={1920}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:pb-16">
        <Eyebrow>San Nicolás de los Garza</Eyebrow>
        <h1 className="gold-text max-w-[14ch] font-display text-6xl leading-[0.86] sm:text-8xl">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-foreground/70 sm:text-lg">
          {site.heroSubtitle}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={wa}
            target={wa.startsWith("http") ? "_blank" : undefined}
            rel={wa.startsWith("http") ? "noopener noreferrer" : undefined}
            className={primaryBtn}
          >
            <WhatsAppIcon /> Reservar cita
          </a>
          <a href="#servicios" className={secondaryBtn}>
            Ver servicios
          </a>
        </div>
        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-accent/70">
          {site.heroKicker}
        </p>
      </div>
    </section>
  );
}

function Presentacion() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>La barbería</Eyebrow>
        <SectionHeading>Hecha para el detalle</SectionHeading>
        {site.presentation.map((p) => (
          <p key={p.slice(0, 20)} className="mt-6 max-w-[60ch] text-base leading-relaxed text-foreground/70">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Servicios y precios</Eyebrow>
        <SectionHeading>Servicios</SectionHeading>
        <p className="mt-4 max-w-[52ch] text-sm text-foreground/50">
          Precios claros para que sepas exactamente qué esperar. Reserva el que
          necesites por WhatsApp.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <div
              key={s.name}
              className="rounded-xl bg-card p-6 ring-1 ring-white/5 transition hover:ring-accent/30"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl tracking-wide text-foreground">
                  {s.name}
                </h3>
                <span className="whitespace-nowrap font-semibold text-accent">
                  {s.price}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                {s.description}
              </p>
              <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/35">
                {s.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Por qué elegirnos</Eyebrow>
        <SectionHeading>Por qué Norte</SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-xl bg-card p-6 ring-1 ring-white/5"
            >
              <span className="font-display text-3xl text-accent/80">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section id="galeria" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Galería</Eyebrow>
        <SectionHeading>El espacio</SectionHeading>
        <p className="mt-4 max-w-[52ch] text-sm text-foreground/50">
          Cortes, barba y un espacio pensado para que disfrutes cada visita.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3">
          {gallery.map((g) => (
            <div key={g.src} className="overflow-hidden rounded-lg">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.03]"
                width={736}
                height={912}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promocion() {
  if (!site.promo) return null;
  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-8 sm:p-10">
          <Eyebrow>{site.promo.eyebrow}</Eyebrow>
          <h3 className="font-display text-4xl leading-none tracking-wide text-foreground sm:text-5xl">
            {site.promo.title}
          </h3>
          <a href="#contacto" className={`${primaryBtn} mt-6`}>
            {site.promo.cta}
          </a>
          <p className="mt-4 text-xs text-foreground/45">{site.promo.note}</p>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>Dónde estamos</Eyebrow>
        <SectionHeading>Ubicación</SectionHeading>

        <div className="mt-10 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-xl ring-1 ring-white/5">
            <iframe
              title={`Mapa de ${site.name}`}
              src={mapEmbedUrl()}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-xl bg-card p-6 ring-1 ring-white/5">
            <h3 className="font-display text-2xl tracking-wide text-foreground">
              {site.name}
            </h3>
            <p className="mt-1 text-sm text-foreground/60">{site.addressLine}</p>
            <p className="text-sm text-foreground/60">{site.addressCity}</p>
            {site.demoMode ? (
              <p className="mt-2 text-xs text-foreground/40">
                Ubicación de referencia para demostración.
              </p>
            ) : null}

            <div className="mt-5">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                Horario
              </p>
              <ul className="space-y-1 text-sm">
                {site.schedule.map((d) => (
                  <li
                    key={d.day}
                    className="flex justify-between gap-4 text-foreground/70"
                  >
                    <span>{d.day}</span>
                    <span className="text-foreground/85">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={directionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [demoNotice, setDemoNotice] = useState(false);
  const wa = whatsappLink();
  const booking = site.bookingUrl || wa;
  const isExternal = booking.startsWith("http");
  const label = site.bookingUrl ? "Reservar cita" : "Reservar por WhatsApp";
  return (
    <section
      id="contacto"
      className="border-t border-white/5 bg-gradient-to-b from-background to-card py-24"
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Eyebrow>Reserva tu cita</Eyebrow>
        <h2 className="font-display text-5xl leading-none tracking-wide text-foreground sm:text-6xl">
          ¿Listo para tu <span className="text-accent">próximo corte?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-sm text-foreground/60 sm:text-base">
          Reserva tu cita y dale a tu estilo el acabado que merece.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={booking}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (site.demoMode) {
                e.preventDefault();
                setDemoNotice(true);
              }
            }}
            className={`${primaryBtn} px-8`}
          >
            <WhatsAppIcon /> {label}
          </a>
        </div>
        {demoNotice ? (
          <p role="status" className="mx-auto mt-5 max-w-[44ch] text-xs text-foreground/55">
            Sitio de demostración: en la versión final este botón abre el chat
            de WhatsApp del negocio con un mensaje listo para reservar.
          </p>
        ) : null}
      </div>
    </section>
  );
}

function Footer() {
  const wa = whatsappLink();
  const ig = instagramUrl();
  const fb = facebookUrl();
  return (
    <footer className="border-t border-white/5 bg-background px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-2xl tracking-[0.08em] text-foreground">
              Norte Barber <span className="text-accent">Studio</span>
            </p>
            <p className="mt-2 text-sm text-foreground/55">
              Barbería masculina contemporánea.
              <br />
              San Nicolás de los Garza, Nuevo León.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                Contacto
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href={wa}
                    target={wa.startsWith("http") ? "_blank" : undefined}
                    rel={wa.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition hover:text-accent"
                  >
                    WhatsApp: {site.whatsappDisplay}
                  </a>
                </li>
                {site.phone ? (
                  <li>
                    <a
                      href={`tel:${site.phone}`}
                      className="transition hover:text-accent"
                    >
                      Llamar
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                Redes
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                {ig ? (
                  <li>
                    <a
                      href={ig}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-accent"
                    >
                      Instagram: @{site.instagram}
                    </a>
                  </li>
                ) : null}
                {fb ? (
                  <li>
                    <a
                      href={fb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-accent"
                    >
                      Facebook
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
                Horario
              </p>
              <ul className="space-y-1 text-xs text-foreground/55">
                {site.schedule.map((d) => (
                  <li key={d.day}>
                    {d.day}: {d.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. Todos los derechos reservados.</p>
          <p>San Nicolás de los Garza, Nuevo León, México.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const wa = whatsappLink();
  const isExternal = wa.startsWith("http");
  return (
    <a
      href={wa}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/40 ring-1 ring-accent/40 transition hover:brightness-110 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Presentacion />
      <Servicios />
      <Beneficios />
      <Galeria />
      <Promocion />
      <Ubicacion />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Index;
