// app/profile/page.tsx
import Link from "next/link";

export default function ProfilePage() {
  // per ora dati finti; in futuro li prenderemo dal DB
  const user = {
    name: "Michele",
    age: 28,
    city: "Brescia",
    bio: "Aperitivi, live music e serate tranquille. Preferisco poche persone ma buone.",
    lifestyleTags: [
      "Mattiniero",
      "Sportivo",
      "Serate tranquille",
      "Concerti",
      "Aperitivi",
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Il tuo profilo</h1>
          <Link
            href="/dashboard"
            className="text-xs text-emerald-400 hover:text-emerald-300"
          >
            Torna alla dashboard
          </Link>
        </header>

        {/* Card profilo */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-emerald-500/60 to-slate-900" />
            <div>
              <p className="text-lg font-semibold">
                {user.name}, {user.age}
              </p>
              <p className="text-xs text-slate-400">{user.city}</p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase text-slate-400 tracking-wide">
              Bio
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {user.bio}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase text-slate-400 tracking-wide">
              Stile di vita
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {user.lifestyleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 px-3 py-1 bg-slate-950/80 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Azioni future */}
        <section className="text-center text-xs text-slate-500">
          In futuro qui potrai modificare questi dati, aggiungere foto e
          collegare i tuoi eventi preferiti.
        </section>
      </div>
    </main>
  );
}
