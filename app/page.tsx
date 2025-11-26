// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Colonna sinistra – testo */}
        <div className="space-y-6">
          <span className="inline-flex items-center text-xs font-medium tracking-widest uppercase rounded-full border border-emerald-400/40 px-3 py-1 bg-emerald-500/10">
            Beta privata • Event Dating
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Incontri reali,
            <span className="block text-emerald-400">
              partendo dagli eventi che ami.
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Niente swipe infinito a caso. Scopri persone che vogliono andare
            agli stessi eventi, con il tuo stile di vita: aperitivi, concerti,
            serate tranquille o notti folli. Match solo dove ha davvero senso.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/30"
            >
              Inizia ora (MVP)
            </Link>

            <button className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-sm font-medium border border-slate-600 hover:border-slate-400 text-slate-200 transition">
              Guarda come funziona
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Match basati su eventi reali
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Filtri per stile di vita
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Profili video brevi
            </div>
          </div>
        </div>

        {/* Colonna destra – mockup app */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border border-slate-700 bg-slate-900/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 inset-x-14 h-6 bg-slate-900 rounded-b-3xl" />

            {/* Contenuto “schermo” */}
            <div className="relative z-10 h-full pt-8 px-4 pb-4 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold">EventMatch</span>
                <span>21:37</span>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-slate-900 border border-emerald-400/40 p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300">
                      Evento vicino a te
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Aperitivo in centro
                    </p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-slate-900/60 text-slate-200">
                    Oggi, 20:30
                  </span>
                </div>
                <p className="text-[11px] text-slate-200">
                  6 persone interessate • 2 compatibili al 90% con il tuo stile
                  di vita.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] text-slate-400">
                  Proposte per te ora:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-slate-800/80 p-2 space-y-1 border border-slate-700/70">
                    <div className="h-20 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900" />
                    <p className="text-[11px] font-semibold">Sara, 27</p>
                    <p className="text-[10px] text-slate-400">
                      Nottambula • Live music • Aperitivi
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-2 space-y-1 border border-slate-700/70">
                    <div className="h-20 rounded-lg bg-gradient-to-br from-emerald-600/60 to-slate-900" />
                    <p className="text-[11px] font-semibold">Luca, 30</p>
                    <p className="text-[10px] text-slate-400">
                      Mattiniero • Sport • Serate tranquille
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-[11px] text-slate-400">
                <button className="px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-slate-500 transition text-[11px]">
                  Salta
                </button>
                <button className="px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 text-[11px] font-semibold shadow-md shadow-emerald-500/40">
                  Partecipa &amp; matcha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
