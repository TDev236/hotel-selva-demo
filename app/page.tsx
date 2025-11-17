"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroParallax } from "../components/HeroParallax";
import { ReservationForm } from "../components/ReservationForm";

type Lang = "es" | "en";

const STRINGS = {
  es: {
    nav: {
      home: "Inicio",
      rooms: "Habitaciones",
      experiences: "Experiencias",
      location: "Ubicación",
      contact: "Reserva",
    },
    hero: {
      badge: "Amazon Jungle Lodge",
      title: "Despierta con la selva a tu ventana",
      subtitle:
        "Cabañas cómodas, comida local y experiencias guiadas por personas que realmente viven en la Amazonía.",
      cta: "Reservar por WhatsApp",
      secondary: "Ver habitaciones",
      whatsappMessage:
        "Hola, quiero más información y disponibilidad del hotel en la selva.",
    },
    highlights: {
      title: "Por qué quedarte aquí",
      items: [
        "Cabañas rodeadas de selva, con baño privado y energía en horarios definidos.",
        "Guías locales certificados que te llevan a caminar, nadar y conocer la Amazonía de forma segura.",
        "Alimentación casera con ingredientes de la región (opciones vegetarianas disponibles).",
        "Traslados coordinados desde la ciudad: no tienes que preocuparte por lanchas ni horarios.",
      ],
    },
    rooms: {
      title: "Habitaciones",
      desc: "Elige la cabaña que mejor se ajuste a tu estilo de viaje. Todas incluyen mosquiteros, sábanas frescas y ventilación natural.",
    },
    experiences: {
      title: "Experiencias en la selva",
      desc: "No es solo dormir en la selva: es conectar con el río, los animales y las personas que viven aquí.",
    },
    location: {
      title: "Ubicación y acceso",
      desc: "Estamos a orillas de un río amazónico, lejos del ruido pero conectados con la ciudad más cercana. Te enviamos instrucciones claras y te ayudamos a coordinar lanchas y horarios.",
      howToGetTitle: "¿Cómo se llega?",
      howToGetBullets: [
        "Llegas primero a la ciudad base (ej. Leticia o Tabatinga).",
        "Te recogemos en el puerto o coordinamos una lancha directa hacia el lodge.",
        "El trayecto en río suele durar entre 30 y 60 minutos, según el nivel del agua.",
      ],
    },
    contact: {
      sectionTitle: "Reserva tu estadía en la selva",
      sectionSubtitle:
        "Déjanos tus fechas tentativas y número de personas. Te confirmamos disponibilidad y valor por WhatsApp.",
      form: {
        title: "Formulario de reserva",
        subtitle:
          "Esto no genera un pago automático. Es una solicitud directa a nuestro WhatsApp para coordinar tu experiencia.",
        labels: {
          name: "Nombre completo",
          email: "Correo electrónico",
          phone: "Teléfono (con indicativo)",
          checkIn: "Fecha de llegada",
          checkOut: "Fecha de salida",
          guests: "Número de personas",
          roomType: "Tipo de habitación",
          notes: "Comentarios o requerimientos especiales",
        },
        placeholders: {
          name: "Ej. Ana Pérez",
          email: "Ej. ana@example.com",
          phone: "Ej. +57 300 000 0000",
          notes:
            "Ej. Llegamos en vuelo de la mañana, una persona vegetariana...",
        },
        roomOptions: [
          "Cabaña estándar (1–2 personas)",
          "Cabaña familiar (3–4 personas)",
          "Suite selva (vista panorámica)",
        ],
        button: "Enviar solicitud por WhatsApp",
        errorRequired:
          "Por favor completa al menos tu nombre, teléfono y fechas de llegada/salida.",
      },
      note: "Atención por WhatsApp todos los días. Respuesta usual en menos de 24 horas.",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      home: "Home",
      rooms: "Rooms",
      experiences: "Experiences",
      location: "Location",
      contact: "Book",
    },
    hero: {
      badge: "Amazon Jungle Lodge",
      title: "Wake up with the jungle at your window",
      subtitle:
        "Comfortable cabins, local food and guided experiences with people who actually live in the Amazon.",
      cta: "Book via WhatsApp",
      secondary: "View rooms",
      whatsappMessage:
        "Hi! I’d like more information and availability for the jungle lodge.",
    },
    highlights: {
      title: "Why stay with us",
      items: [
        "Jungle cabins with private bathroom and power at defined hours.",
        "Certified local guides to walk, swim and explore the Amazon safely.",
        "Homemade food with regional ingredients (vegetarian options available).",
        "Transfers coordinated from the city: no need to worry about boats or schedules.",
      ],
    },
    rooms: {
      title: "Rooms",
      desc: "Choose the cabin that fits your travel style. All include mosquito nets, fresh linens and natural airflow.",
    },
    experiences: {
      title: "Jungle experiences",
      desc: "It’s not only about sleeping in the jungle: it’s about connecting with the river, the animals and the people who live here.",
    },
    location: {
      title: "Location & access",
      desc: "We are located by an Amazonian river, far from the city noise but connected to the nearest town. We send clear instructions and help you coordinate boats and schedules.",
      howToGetTitle: "How do you get here?",
      howToGetBullets: [
        "First you arrive to the base city (e.g. Leticia or Tabatinga).",
        "We pick you up at the port or coordinate a direct boat to the lodge.",
        "The river trip usually takes 30–60 minutes, depending on water level.",
      ],
    },
    contact: {
      sectionTitle: "Book your jungle stay",
      sectionSubtitle:
        "Tell us your tentative dates and number of guests. We’ll confirm availability and pricing via WhatsApp.",
      form: {
        title: "Reservation form",
        subtitle:
          "This does not charge your card. It simply sends a detailed request to our WhatsApp so we can organize everything with you.",
        labels: {
          name: "Full name",
          email: "Email",
          phone: "Phone (with country code)",
          checkIn: "Check-in date",
          checkOut: "Check-out date",
          guests: "Number of guests",
          roomType: "Room type",
          notes: "Comments or special requests",
        },
        placeholders: {
          name: "E.g. Anna Smith",
          email: "E.g. anna@example.com",
          phone: "E.g. +1 555 000 0000",
          notes: "E.g. Morning flight, one vegetarian guest...",
        },
        roomOptions: [
          "Standard cabin (1–2 guests)",
          "Family cabin (3–4 guests)",
          "Jungle suite (panoramic view)",
        ],
        button: "Send request via WhatsApp",
        errorRequired:
          "Please fill at least your name, phone number and check-in/out dates.",
      },
      note: "WhatsApp support every day. We usually reply within 24 hours.",
    },
    footer: "All rights reserved.",
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = React.useState<Lang>("es");
  const t = STRINGS[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar lang={lang} onChangeLang={setLang} texts={t.nav} />

      {/* Spacer para el header fijo */}
      <div className="h-[56px] md:h-[60px]" />

      {/* Hero */}
      <HeroParallax texts={t.hero} />

      {/* Destacados: por qué quedarse */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-18">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          {t.highlights.title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.highlights.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Habitaciones */}
      <section
        id="rooms"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t.rooms.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-300 sm:text-base">
              {t.rooms.desc}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 h-40 w-full rounded-xl bg-[url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
            <h3 className="mb-1 text-sm font-semibold sm:text-base">
              {lang === "es" ? "Cabaña estándar" : "Standard cabin"}
            </h3>
            <p className="mb-2 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "1–2 personas · Vista a la selva · Baño privado"
                : "1–2 guests · Jungle view · Private bathroom"}
            </p>
            <p className="mt-auto text-sm font-medium text-emerald-300">
              {lang === "es" ? "Desde $X / noche" : "From $X / night"}
            </p>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 h-40 w-full rounded-xl bg-[url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
            <h3 className="mb-1 text-sm font-semibold sm:text-base">
              {lang === "es" ? "Cabaña familiar" : "Family cabin"}
            </h3>
            <p className="mb-2 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "3–4 personas · Terraza · Hamacas"
                : "3–4 guests · Terrace · Hammocks"}
            </p>
            <p className="mt-auto text-sm font-medium text-emerald-300">
              {lang === "es" ? "Desde $Y / noche" : "From $Y / night"}
            </p>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 h-40 w-full rounded-xl bg-[url('https://images.pexels.com/photos/2372724/pexels-photo-2372724.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
            <h3 className="mb-1 text-sm font-semibold sm:text-base">
              {lang === "es" ? "Suite selva" : "Jungle suite"}
            </h3>
            <p className="mb-2 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "Cama king · Vista panorámica · Desayuno incluido"
                : "King bed · Panoramic view · Breakfast included"}
            </p>
            <p className="mt-auto text-sm font-medium text-emerald-300">
              {lang === "es" ? "Desde $Z / noche" : "From $Z / night"}
            </p>
          </article>
        </div>
      </section>

      {/* Experiencias */}
      <section
        id="experiences"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t.experiences.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-300 sm:text-base">
            {t.experiences.desc}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold sm:text-base">
              {lang === "es" ? "Caminata nocturna" : "Night walk"}
            </p>
            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "Explora la selva de noche con guía local y escucha la vida nocturna del Amazonas."
                : "Explore the jungle at night with a local guide and listen to the Amazon’s night life."}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold sm:text-base">
              {lang === "es" ? "Delfines rosados" : "Pink dolphins"}
            </p>
            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "Navegación por el río para avistar delfines rosados y paisajes únicos."
                : "Boat trip to spot pink river dolphins and unique landscapes."}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold sm:text-base">
              {lang === "es" ? "Visita a comunidad" : "Community visit"}
            </p>
            <p className="mt-1 text-xs text-gray-300 sm:text-sm">
              {lang === "es"
                ? "Conoce tradiciones, artesanías y sabores locales de la región."
                : "Get to know local traditions, crafts and flavors from the region."}
            </p>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section
        id="location"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {t.location.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-300 sm:text-base">
            {t.location.desc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
          <div className="flex h-56 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-gray-400 sm:h-64 md:h-72">
            {lang === "es"
              ? "Aquí puedes colocar un mapa estático o una foto aérea de la zona."
              : "You can place a static map or an aerial photo of the area here."}
          </div>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="font-medium">{t.location.howToGetTitle}</p>
            <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm">
              {t.location.howToGetBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formulario de reserva (WhatsApp) */}
      <ReservationForm lang={lang} texts={t.contact.form} />

      {/* Nota de atención por WhatsApp */}
      <div className="border-t border-white/5 bg-black/80">
        <div className="mx-auto max-w-6xl px-4 py-4 text-[11px] text-gray-400 sm:px-6">
          {t.contact.note}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-4 text-center text-[11px] text-gray-500">
        © {new Date().getFullYear()} Tiffani ARM.{" "}
        {lang === "es" ? STRINGS.es.footer : STRINGS.en.footer}
      </footer>
    </main>
  );
}
