// app/dashboard/page.tsx
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">EventMatch</h1>
          <Link
            href="/logout"
            className="text-xs text-red-400 hover:text-red-300"
          >
            Logout
          </Link>
        </header>

        {/* Eventi vicini */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wide">
            Eventi vicino a te
          </h2>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1">
            <p className="text-emerald-400 text-xs uppercase">Oggi, 20:30</p>
            <p className="font-semibold">Aperitivo in centro</p>
            <p className="text-xs text-slate-400">
              6 persone interessate • 2 molto compatibili
            </p>
          </div>
        </section>

        {/* Persone compatibili */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wide">
            Persone compatibili ora
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800 space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900" />
              <p className="text-sm font-medium">Sara, 27</p>
              <p className="text-[11px] text-slate-400">
                Live music • Aperitivi
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800 space-y-2">
              <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-600/60 to-slate-900" />
              <p className="text-sm font-medium">Luca, 30</p>
              <p className="text-[11px] text-slate-400">
                Sport • Serate tranquille
              </p>
            </div>
          </div>
        </section>

        {/* Pulsante CTA */}
        <div className="pt-4">
          <button className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-3 shadow-lg shadow-emerald-500/40 transition">
            Partecipa &amp; Matcha
          </button>
        </div>
      </div>
    </main>
  );
}
