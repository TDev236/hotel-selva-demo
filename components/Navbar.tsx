"use client";

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

  const otherLang: Lang = lang === "es" ? "en" : "es";

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide">
            Selva Lodge
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-6 text-xs uppercase tracking-[0.15em] text-gray-300">
            <a href="#home" className="hover:text-white">
              {texts.home}
            </a>
            <a href="#rooms" className="hover:text-white">
              {texts.rooms}
            </a>
            <a href="#experiences" className="hover:text-white">
              {texts.experiences}
            </a>
            <a href="#location" className="hover:text-white">
              {texts.location}
            </a>
            <a href="#contact" className="hover:text-white">
              {texts.contact}
            </a>
          </div>

          {/* Selector idioma */}
          <div className="flex items-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => onChangeLang("es")}
              className={`uppercase tracking-[0.15em] ${
                lang === "es" ? "text-white" : "text-gray-400"
              }`}
            >
              ES
            </button>
            <span className="text-gray-500">/</span>
            <button
              type="button"
              onClick={() => onChangeLang("en")}
              className={`uppercase tracking-[0.15em] ${
                lang === "en" ? "text-white" : "text-gray-400"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile: hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-4 bg-white" />
          <span className="mt-1 block h-0.5 w-4 bg-white" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <a href="#home" onClick={handleNavClick} className="py-1">
                {texts.home}
              </a>
              <a href="#rooms" onClick={handleNavClick} className="py-1">
                {texts.rooms}
              </a>
              <a href="#experiences" onClick={handleNavClick} className="py-1">
                {texts.experiences}
              </a>
              <a href="#location" onClick={handleNavClick} className="py-1">
                {texts.location}
              </a>
              <a href="#contact" onClick={handleNavClick} className="py-1">
                {texts.contact}
              </a>

              <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-300">
                <button
                  type="button"
                  onClick={() => {
                    onChangeLang("es");
                    handleNavClick();
                  }}
                  className={lang === "es" ? "text-white" : "text-gray-400"}
                >
                  ES
                </button>
                <span className="text-gray-500">/</span>
                <button
                  type="button"
                  onClick={() => {
                    onChangeLang("en");
                    handleNavClick();
                  }}
                  className={lang === "en" ? "text-white" : "text-gray-400"}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React from "react";
