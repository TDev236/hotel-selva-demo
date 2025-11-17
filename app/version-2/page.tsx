"use client";

import { HeroParallax } from "@/components/version-2/HeroParallax";
import { Navbar } from "@/components/version-2/Navbar";
import { ReservationForm } from "@/components/version-2/ReservationForm";
import React from "react";

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
    strip: {
      items: [
        "Paquetes desde 2 noches",
        "Guías locales certificados",
        "Traslados desde la ciudad",
      ],
    },
    highlights: {
      title: "Tu refugio en medio de la Amazonía",
      items: [
        "Cabañas privadas inmersas en la selva, con mosquiteros y ventilación natural.",
        "Experiencias diseñadas para ver fauna, río y comunidades sin turismo masivo.",
        "Cocina casera con ingredientes locales y opciones vegetarianas.",
        "Acompañamiento desde que aterrizas en la ciudad hasta que regresas.",
      ],
    },
    rooms: {
      title: "Habitaciones pensadas para desconectar",
      desc: "Elige la cabaña que mejor se ajuste a tu viaje. Todas incluyen ropa de cama fresca, mosquiteros y vista a la selva.",
    },
    experiences: {
      title: "Experiencias que hacen el viaje",
      desc: "No es solo dormir en la selva: es navegar, caminar, escuchar y aprender con quienes viven aquí.",
    },
    location: {
      title: "¿Dónde estamos?",
      desc: "A orillas de un río amazónico, lejos del ruido de la ciudad y lo suficientemente cerca para coordinar tu llegada sin estrés.",
      howToGetTitle: "Cómo se llega",
      howToGetBullets: [
        "Primero llegas a la ciudad base (por ejemplo, Leticia o Tabatinga).",
        "Te recogemos en el puerto o coordinamos una lancha que te deje frente al lodge.",
        "El trayecto por río suele durar entre 30 y 60 minutos, según la época del año.",
      ],
      chip1: "Río Amazónico",
      chip2: "Acceso solo por lancha",
      chip3: "Desconexión real",
    },
    contact: {
      sectionTitle: "Reserva tu lugar en la selva",
      sectionSubtitle:
        "Cuéntanos tus fechas tentativas y cuántas personas viajan. Te confirmamos disponibilidad, valor y logística por WhatsApp.",
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
      note: "Atención por WhatsApp todos los días. Respondemos normalmente en menos de 24 horas.",
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
    strip: {
      items: [
        "Packages from 2 nights",
        "Certified local guides",
        "Transfers from the city",
      ],
    },
    highlights: {
      title: "Your hideaway in the Amazon",
      items: [
        "Private jungle cabins with mosquito nets and natural ventilation.",
        "Experiences designed to see wildlife, river and communities without mass tourism.",
        "Homemade food with regional ingredients and vegetarian options.",
        "Support from the moment you land in the city until you fly back home.",
      ],
    },
    rooms: {
      title: "Rooms made for slow travel",
      desc: "Choose the cabin that fits your style. All of them include fresh linens, mosquito nets and jungle views.",
    },
    experiences: {
      title: "Experiences that make the trip",
      desc: "It’s not only about sleeping in the jungle: it’s about navigating, walking, listening and learning with those who live here.",
    },
    location: {
      title: "Where are we?",
      desc: "On the banks of an Amazonian river, far from city noise and close enough to make your arrival simple and stress-free.",
      howToGetTitle: "How to get here",
      howToGetBullets: [
        "First you arrive to the base city (e.g. Leticia or Tabatinga).",
        "We pick you up at the port or coordinate a boat that drops you at the lodge.",
        "The river trip usually takes 30–60 minutes, depending on season and water level.",
      ],
      chip1: "Amazon river",
      chip2: "Boat access only",
      chip3: "Real disconnection",
    },
    contact: {
      sectionTitle: "Book your jungle stay",
      sectionSubtitle:
        "Tell us your tentative dates and number of guests. We’ll confirm availability, prices and logistics via WhatsApp.",
      form: {
        title: "Reservation form",
        subtitle:
          "This does not charge your card. It sends a detailed request directly to our WhatsApp so we can organize everything with you.",
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
};

export default function HomePage() {
  const [lang, setLang] = React.useState<Lang>("es");
  const t = STRINGS[lang];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-950">
      {/* Navbar */}
      <Navbar lang={lang} onChangeLang={setLang} texts={t.nav} />

      {/* Spacer por el header fijo */}
      <div className="h-14 md:h-[60px]" />

      {/* Hero parallax */}
      <HeroParallax texts={t.hero} />

      {/* Tira de highlights rápida */}
      <section className="mx-auto -mt-6 max-w-6xl px-4 pb-10 sm:px-6 md:pb-14">
        <div className="grid gap-3 rounded-3xl bg-gradient-to-r from-emerald-100 via-emerald-50 to-lime-100 p-4 shadow-sm sm:grid-cols-3">
          {t.strip.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 text-xs text-emerald-900 shadow-sm sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                {idx === 0 ? "🌿" : idx === 1 ? "🧭" : "⛵"}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bloque storytelling */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
              {t.highlights.title}
            </h2>
            <p className="mt-3 text-sm text-emerald-800/80 sm:text-base">
              {lang === "es"
                ? "Imagina dormir con el sonido de la selva, abrir la puerta de tu cabaña y ver el río, y saber que todo —traslados, comidas, caminatas— ya está pensado para ti."
                : "Imagine falling asleep to the jungle sounds, opening your cabin door to the river, and knowing everything – transfers, meals, walks – is already planned for you."}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-emerald-900">
              {t.highlights.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl sm:h-72 md:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3121050/pexels-photo-3121050.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            />
            {/* Degradado suave para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-950/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 px-4 py-3 text-xs text-emerald-900 backdrop-blur">
              {lang === "es"
                ? "Al caer la tarde el lodge se llena de sonidos: ranas, pájaros, insectos. Nuestro equipo te acompaña para que te sientas seguro en todo momento."
                : "At sunset the lodge fills with sounds: frogs, birds, insects. Our team is always around so you feel safe and taken care of."}
            </div>
          </div>
        </div>
      </section>

      {/* Habitaciones */}
      <section
        id="rooms"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
              {t.rooms.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-emerald-800/80 sm:text-base">
              {t.rooms.desc}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-md">
            <div className="relative h-40 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[11px] text-emerald-800 shadow-sm">
                {lang === "es" ? "Ideal parejas" : "Perfect for couples"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-1 text-sm font-semibold text-emerald-950 sm:text-base">
                {lang === "es" ? "Cabaña estándar" : "Standard cabin"}
              </h3>
              <p className="mb-2 text-xs text-emerald-800/80 sm:text-sm">
                {lang === "es"
                  ? "1–2 personas · Vista a la selva · Baño privado"
                  : "1–2 guests · Jungle view · Private bathroom"}
              </p>
              <p className="mt-auto text-sm font-medium text-emerald-700">
                {lang === "es" ? "Desde $X / noche" : "From $X / night"}
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 shadow-md">
            <div className="relative h-40 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[11px] text-emerald-800 shadow-sm">
                {lang === "es" ? "Grupos pequeños" : "Small groups"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-1 text-sm font-semibold text-emerald-950 sm:text-base">
                {lang === "es" ? "Cabaña familiar" : "Family cabin"}
              </h3>
              <p className="mb-2 text-xs text-emerald-800/80 sm:text-sm">
                {lang === "es"
                  ? "3–4 personas · Terraza · Hamacas"
                  : "3–4 guests · Terrace · Hammocks"}
              </p>
              <p className="mt-auto text-sm font-medium text-emerald-700">
                {lang === "es" ? "Desde $Y / noche" : "From $Y / night"}
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 shadow-md">
            <div className="relative h-40 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/2372724/pexels-photo-2372724.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[11px] text-emerald-800 shadow-sm">
                {lang === "es" ? "Vista río/selva" : "River & jungle view"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-1 text-sm font-semibold text-emerald-950 sm:text-base">
                {lang === "es" ? "Suite selva" : "Jungle suite"}
              </h3>
              <p className="mb-2 text-xs text-emerald-800/80 sm:text-sm">
                {lang === "es"
                  ? "Cama king · Vista panorámica · Desayuno incluido"
                  : "King bed · Panoramic view · Breakfast included"}
              </p>
              <p className="mt-auto text-sm font-medium text-emerald-700">
                {lang === "es" ? "Desde $Z / noche" : "From $Z / night"}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Experiencias */}
      <section
        id="experiences"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
              {t.experiences.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-emerald-800/80 sm:text-base">
              {t.experiences.desc}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm shadow-sm">
                <p className="font-semibold text-emerald-950">
                  {lang === "es" ? "Caminata nocturna" : "Night walk"}
                </p>
                <p className="mt-1 text-xs text-emerald-800/80 sm:text-sm">
                  {lang === "es"
                    ? "Salimos cuando baja el sol a buscar ranas, insectos y escuchar la selva despertar de noche."
                    : "We head out at sunset to look for frogs, insects and listen to the jungle waking up at night."}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm shadow-sm">
                <p className="font-semibold text-emerald-950">
                  {lang === "es" ? "Delfines rosados" : "Pink dolphins"}
                </p>
                <p className="mt-1 text-xs text-emerald-800/80 sm:text-sm">
                  {lang === "es"
                    ? "Navegación tranquila en el río para buscar delfines rosados y paisajes abiertos."
                    : "Slow navigation on the river to look for pink dolphins and wide-open river views."}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm shadow-sm">
                <p className="font-semibold text-emerald-950">
                  {lang === "es" ? "Comunidades locales" : "Local communities"}
                </p>
                <p className="mt-1 text-xs text-emerald-800/80 sm:text-sm">
                  {lang === "es"
                    ? "Visitas respetuosas a comunidades para conocer oficios, historias y artesanías."
                    : "Respectful visits to communities to learn about crafts, stories and daily life."}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm shadow-sm">
                <p className="font-semibold text-emerald-950">
                  {lang === "es" ? "Tardes de río" : "River afternoons"}
                </p>
                <p className="mt-1 text-xs text-emerald-800/80 sm:text-sm">
                  {lang === "es"
                    ? "Tiempo libre para nadar, leer en hamaca o simplemente ver el atardecer sobre el río."
                    : "Free time to swim, read in a hammock or just watch the sunset over the river."}
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl sm:h-72 md:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-emerald-900/10 to-transparent" />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {lang === "es" ? "Grupos pequeños" : "Small groups"}
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {lang === "es" ? "Guías locales" : "Local guides"}
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {lang === "es" ? "Ritmo tranquilo" : "Slow pace"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section
        id="location"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
            {t.location.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-emerald-800/80 sm:text-base">
            {t.location.desc}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-start">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 sm:h-72 md:h-80">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-emerald-900/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {t.location.chip1}
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {t.location.chip2}
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 text-emerald-800 shadow-sm">
                {t.location.chip3}
              </span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-emerald-900">
            <p className="font-semibold">{t.location.howToGetTitle}</p>
            <ul className="list-disc space-y-1 pl-5 text-xs sm:text-sm text-emerald-800/90">
              {t.location.howToGetBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="pt-2 text-xs text-emerald-700/80 sm:text-sm">
              {lang === "es"
                ? "Cuando confirmemos tu reserva, te enviamos un mapa con la ubicación exacta, horarios de lancha recomendados y qué llevar."
                : "Once your booking is confirmed, we send you a map with the exact location, recommended boat schedules and what to pack."}
            </p>
          </div>
        </div>
      </section>

      {/* Sección de reserva + formulario WhatsApp */}
      <section className="border-t border-emerald-100 bg-gradient-to-r from-emerald-50 via-emerald-100 to-lime-50">
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
              {t.contact.sectionTitle}
            </h2>
            <p className="mt-2 text-sm text-emerald-800/80 sm:text-base">
              {t.contact.sectionSubtitle}
            </p>
          </div>
        </div>

        <ReservationForm lang={lang} texts={t.contact.form} />

        <div className="mx-auto max-w-6xl px-4 pb-6 text-[11px] text-emerald-800/80 sm:px-6">
          {t.contact.note}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-emerald-50 py-4 text-center text-[11px] text-emerald-700">
        © {new Date().getFullYear()} Tiffani ARM.{" "}
        {lang === "es" ? STRINGS.es.footer : STRINGS.en.footer}
      </footer>
    </main>
  );
}
