"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroParallax } from "../components/HeroParallax";

type Lang = "es" | "en";

const STRINGS = {
  es: {
    nav: {
      home: "Inicio",
      rooms: "Habitaciones",
      experiences: "Experiencias",
      location: "Ubicación",
      contact: "Contacto",
    },
    hero: {
      badge: "Amazon Jungle Lodge",
      title: "Hotel en la selva amazónica",
      subtitle: "Desconéctate del ruido, conéctate con la selva.",
      cta: "Reservar por WhatsApp",
      secondary: "Ver habitaciones",
      whatsappMessage:
        "Hola, quiero más información y disponibilidad del hotel en la selva.",
    },
    rooms: {
      title: "Habitaciones",
      desc: "Cabañas inmersas en la selva, diseñadas para descansar profundamente y escuchar la naturaleza.",
    },
    experiences: {
      title: "Experiencias",
      desc: "Caminatas nocturnas, avistamiento de delfines rosados, visitas a comunidades, tubing y más.",
    },
    location: {
      title: "Ubicación",
      desc: "Ubicados en plena Amazonía. Te ayudamos a coordinar lancha, traslados y horarios desde la ciudad más cercana.",
    },
    contact: {
      title: "Contacto",
      desc: "Escríbenos por WhatsApp para confirmar disponibilidad, precios y coordinar tu llegada a la selva.",
      cta: "Hablar por WhatsApp",
      note: "Atención por WhatsApp todos los días.",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      home: "Home",
      rooms: "Rooms",
      experiences: "Experiences",
      location: "Location",
      contact: "Contact",
    },
    hero: {
      badge: "Amazon Jungle Lodge",
      title: "Jungle lodge in the Amazon",
      subtitle: "Disconnect from the noise, connect with the rainforest.",
      cta: "Book via WhatsApp",
      secondary: "View rooms",
      whatsappMessage:
        "Hi! I’d like more information and availability for the jungle lodge.",
    },
    rooms: {
      title: "Rooms",
      desc: "Jungle cabins designed for deep rest, surrounded by the sounds of nature.",
    },
    experiences: {
      title: "Experiences",
      desc: "Night walks, pink river dolphins, local communities, tubing and more.",
    },
    location: {
      title: "Location",
      desc: "Located in the heart of the Amazon. We help you arrange boats, transfers and schedules from the nearest city.",
    },
    contact: {
      title: "Contact",
      desc: "Send us a message on WhatsApp to check availability, prices and plan your arrival.",
      cta: "Chat on WhatsApp",
      note: "WhatsApp support every day.",
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

      {/* Spacer para que el contenido no quede debajo del header */}
      <div className="h-[56px] md:h-[60px]" />

      {/* Hero */}
      <HeroParallax texts={t.hero} />

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
        <div className="flex h-56 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs text-gray-400 sm:h-64 md:h-72">
          {lang === "es"
            ? "Aquí puedes colocar un mapa estático o una foto aérea de la zona."
            : "You can place a static map or an aerial photo of the area here."}
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="border-t border-white/10 bg-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-2 text-sm text-gray-300 sm:text-base">
              {t.contact.desc}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:bg-emerald-400"
            >
              {t.contact.cta}
            </a>
            <p className="text-xs text-gray-400 sm:text-sm">{t.contact.note}</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-4 text-center text-[11px] text-gray-500">
        © {new Date().getFullYear()} Selva Lodge.{" "}
        {lang === "es" ? STRINGS.es.footer : STRINGS.en.footer}
      </footer>
    </main>
  );
}
