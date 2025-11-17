import Link from "next/link";

export const metadata = {
  title: "Demo lodge selva | Versiones",
  description: "Selector de versiones de la web del hotel en la selva.",
};

export default function DemoHome() {
  return (
    <main className="min-h-screen bg-linear-to-b from-black via-slate-900 to-black text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-10">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Demo · Jungle Lodge
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Selecciona la versión de la web
          </h1>
          <p className="mt-3 max-w-xl text-sm text-gray-300 md:text-base">
            Esta es una demo para revisión de diseño. Haz clic en cada versión
            para ver cómo se vería la página del hotel en la selva.
          </p>
        </div>

        <div className="grid w-full max-w-3xl gap-5 md:grid-cols-2">
          {/* Versión 1 - Selva dark */}
          <Link
            href="/version-1"
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg transition hover:border-emerald-400/80 hover:bg-white/10"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Versión 1
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                Selva · Dark / Turismo
              </h2>
              <p className="mt-2 text-xs text-gray-300 md:text-sm">
                Diseño oscuro con gradientes verdes, enfoque en experiencias y
                storytelling de viaje. Ideal para un lodge más inmersivo.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-emerald-300">
              <span>Ver versión</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>

          {/* Versión 2 - White */}
          <Link
            href="/version-2"
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/80 p-5 text-slate-900 shadow-lg transition hover:border-emerald-400/80 hover:bg-white"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600">
                Versión 2
              </p>
              <h2 className="mt-2 text-lg font-semibold">White / Minimal</h2>
              <p className="mt-2 text-xs text-slate-700 md:text-sm">
                Versión clara, más corporativa y limpia. Ideal si el cliente
                prefiere una web blanca con acentos sutiles de color.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-emerald-700">
              <span>Ver versión</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-gray-500 text-center max-w-md">
          Puedes compartir directamente{" "}
          <span className="text-emerald-300">/version-1</span> o{" "}
          <span className="text-emerald-300">/version-2</span>, o enviar este
          home para que el cliente elija cuál le gusta más.
        </p>
      </div>
    </main>
  );
}
