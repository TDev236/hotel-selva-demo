"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_NUMBER = "573001112233"; // cámbialo por el del hotel

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

export function HeroParallax({ texts }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    texts.whatsappMessage
  )}`;

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[90vh] overflow-hidden md:h-screen"
    >
      {/* Fondo con parallax */}
      <motion.div
        style={{ y: yBg, scale }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <motion.div
          style={{ y: yText }}
          className="mx-auto flex max-w-3xl flex-col px-4 text-center sm:px-6 md:text-left"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-emerald-300 sm:text-sm">
            {texts.badge}
          </p>
          <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {texts.title}
          </h1>
          <p className="mb-8 text-sm text-gray-200 sm:text-base md:text-lg">
            {texts.subtitle}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:bg-emerald-400 sm:w-auto"
            >
              {texts.cta}
            </a>
            <a
              href="#rooms"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-black/30 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white hover:text-white sm:w-auto"
            >
              {texts.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
