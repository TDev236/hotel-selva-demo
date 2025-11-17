"use client";

import React from "react";

type HeroTexts = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  secondary: string;
  whatsappMessage: string;
};

type HeroParallaxProps = {
  texts: HeroTexts;
};

const WHATSAPP_NUMBER = "573001112233"; // cámbialo por el del lodge

export function HeroParallax({ texts }: HeroParallaxProps) {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texts.whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-emerald-50 via-white to-emerald-50 pt-20 pb-12 sm:pb-16 md:pt-24 md:pb-20">
      {/* Fondos suaves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-24 -right-16 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 sm:px-6 md:flex-row md:items-center md:gap-14">
        {/* Bloque imagen (abajo en mobile, al lado en desktop) */}
        <div className="relative flex w-full justify-center md:flex-1 md:justify-end">
          <div className="relative h-64 w-full max-w-sm sm:h-72 md:h-80">
            {/* Card principal */}
            <div className="absolute inset-0 rounded-3xl border border-emerald-200 bg-white/90 shadow-xl backdrop-blur">
              <div
                className="h-40 rounded-3xl rounded-b-none bg-cover bg-center sm:h-44 md:h-48"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/3121050/pexels-photo-3121050.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
                aria-hidden="true"
              />
              <div className="p-4 text-xs text-slate-800 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
                  Amazon rainforest
                </p>
                <p className="mt-1 text-sm sm:text-[13px]">
                  Selva, río y cielo estrellado en una sola estadía.
                </p>
              </div>
            </div>

            {/* Tarjeta flotante inferior */}
            <div className="absolute right-2 bottom-2 w-40 rounded-2xl border border-emerald-200 bg-white/95 p-3 text-[11px] text-slate-800 shadow-md backdrop-blur sm:right-4 sm:bottom-4">
              <p>Paquetes desde 2 noches</p>
              <p className="mt-1 text-emerald-700">
                Todo coordinado por WhatsApp
              </p>
            </div>

            {/* Tarjeta flotante superior */}
            <div className="absolute left-2 top-2 w-32 rounded-2xl border border-emerald-100 bg-white/95 p-3 text-[11px] text-slate-800 shadow-sm sm:left-3 sm:top-3">
              <p>Guías locales</p>
              <p className="mt-1 text-[10px] text-slate-500">
                Caminatas, río y comunidades.
              </p>
            </div>
          </div>
        </div>

        {/* Texto (arriba en mobile, al lado en desktop) */}
        <div className="w-full max-w-xl md:flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {texts.badge}
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            {texts.title}
          </h1>

          <p className="mt-3 text-sm text-slate-700 sm:text-base">
            {texts.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-300/60 transition hover:bg-emerald-500"
            >
              <span>WhatsApp</span>
              <span className="text-lg">↗</span>
            </button>

            <a
              href="#rooms"
              className="text-sm font-medium text-emerald-800 underline-offset-4 hover:underline"
            >
              {texts.secondary}
            </a>
          </div>

          <p className="mt-4 max-w-xs text-[11px] text-slate-600 sm:max-w-sm">
            Coordinamos traslados, actividades y horarios por WhatsApp para que
            solo tengas que pensar en disfrutar.
          </p>
        </div>
      </div>
    </section>
  );
}
