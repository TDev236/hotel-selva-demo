"use client";

import React, { useState } from "react";

type Lang = "es" | "en";

type ReservationTexts = {
  title: string;
  subtitle: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    roomType: string;
    notes: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
  roomOptions: string[];
  button: string;
  errorRequired: string;
};

type Props = {
  lang: Lang;
  texts: ReservationTexts;
};

const WHATSAPP_NUMBER = "573001112233"; // cámbialo por el del lodge

export function ReservationForm({ lang, texts }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(texts.roomOptions[0] ?? "");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !checkIn || !checkOut) {
      setError(texts.errorRequired);
      return;
    }

    const baseInfo =
      lang === "es"
        ? `Hola, me gustaría consultar disponibilidad y reservar en el hotel en la selva.\n\n`
        : `Hi! I'd like to check availability and book at the jungle lodge.\n\n`;

    const lines = [
      `${lang === "es" ? "Nombre" : "Name"}: ${name}`,
      email ? `${lang === "es" ? "Email" : "Email"}: ${email}` : "",
      `${lang === "es" ? "Teléfono" : "Phone"}: ${phone}`,
      `${lang === "es" ? "Check-in" : "Check-in"}: ${checkIn}`,
      `${lang === "es" ? "Check-out" : "Check-out"}: ${checkOut}`,
      `${lang === "es" ? "Huéspedes" : "Guests"}: ${guests}`,
      `${lang === "es" ? "Tipo de habitación" : "Room type"}: ${roomType}`,
      notes ? `${lang === "es" ? "Comentarios" : "Notes"}: ${notes}` : "",
    ].filter(Boolean);

    const text = baseInfo + lines.join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8 max-w-xl">
          <h2 className="text-2xl font-semibold text-emerald-950 md:text-3xl">
            {texts.title}
          </h2>
          <p className="mt-2 text-sm text-emerald-800/80 sm:text-base">
            {texts.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-md sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.name} *
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-400 outline-none focus:border-emerald-500"
                  placeholder={texts.placeholders.name}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.email}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-400 outline-none focus:border-emerald-500"
                  placeholder={texts.placeholders.email}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.phone} *
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-400 outline-none focus:border-emerald-500"
                  placeholder={texts.placeholders.phone}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.roomType}
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 outline-none focus:border-emerald-500"
                >
                  {texts.roomOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.checkIn} *
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.checkOut} *
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-emerald-900">
                  {texts.labels.guests}
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-emerald-900">
                {texts.labels.notes}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="h-24 w-full resize-none rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-400 outline-none focus:border-emerald-500"
                placeholder={texts.placeholders.notes}
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-emerald-500"
            >
              {texts.button}
            </button>

            <p className="mt-2 text-[11px] text-emerald-700/80">
              {lang === "es"
                ? "WhatsApp se abrirá con un mensaje prellenado. Solo tendrás que darle enviar."
                : "WhatsApp will open with a pre-filled message. You’ll just need to hit send."}
            </p>
          </form>

          {/* Textito de confianza */}
          <div className="space-y-4 text-sm text-emerald-900">
            <p>
              {lang === "es"
                ? "Responde un equipo local que vive en la selva y conoce el territorio. Te ayudamos a escoger fechas, traslados y actividades según tu tiempo."
                : "A local team who actually lives in the jungle will answer you. We’ll help you choose dates, transfers and activities based on your time."}
            </p>
            <p>
              {lang === "es"
                ? "No cobramos nada por WhatsApp: solo es para coordinar tu reserva, resolver dudas y compartirte recomendaciones antes de tu viaje."
                : "We don’t charge anything over WhatsApp: it’s just to coordinate your stay, answer questions and share recommendations before your trip."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
