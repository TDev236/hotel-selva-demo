"use client";

import React from "react";

type Lang = "es" | "en";

type NavTexts = {
  home: string;
  rooms: string;
  experiences: string;
  location: string;
  contact: string;
};

type NavbarProps = {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  texts: NavTexts;
};

export function Navbar({ lang, onChangeLang, texts }: NavbarProps) {
  const [open, setOpen] = React.useState(false);

  const handleLangToggle = () => {
    onChangeLang(lang === "es" ? "en" : "es");
  };

  const navItems = [
    { href: "#top", label: texts.home },
    { href: "#rooms", label: texts.rooms },
    { href: "#experiences", label: texts.experiences },
    { href: "#location", label: texts.location },
    { href: "#contact", label: texts.contact },
  ];

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-40 border-b border-emerald-100 bg-white/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-sm">
            JL
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Jungle Lodge
            </span>
            <span className="text-[11px] text-emerald-500">
              Amazon rainforest stay
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs text-emerald-800 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer text-[11px] uppercase tracking-[0.18em] text-emerald-800/80 transition hover:text-emerald-600"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleLangToggle}
            className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700 transition hover:bg-emerald-100 hover:border-emerald-400"
          >
            {lang === "es" ? "ES / EN" : "EN / ES"}
          </button>
        </nav>

        {/* Mobile: lang + burger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={handleLangToggle}
            className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700"
          >
            {lang === "es" ? "ES" : "EN"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700"
          >
            <span className="sr-only">Menú</span>
            <div className="space-y-1.5">
              <span className="block h-[2px] w-4 bg-current rounded-full" />
              <span className="block h-[2px] w-4 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-emerald-100 bg-white/95 px-4 pb-3 pt-2 text-xs text-emerald-800 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1.5 text-[11px] uppercase tracking-[0.18em] text-emerald-800/80 transition hover:text-emerald-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
