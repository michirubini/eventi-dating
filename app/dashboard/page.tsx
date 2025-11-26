// app/dashboard/page.tsx
import Link from "next/link";

type Event = {
  id: number;
  title: string;
  dateLabel: string;
  peopleInterested: number;
  highlyCompatible: number;
};

type MatchUser = {
  id: number;
  name: string;
  age: number;
  subtitle: string;
  variant?: "highlight";
};

const events: Event[] = [
  {
    id: 1,
    title: "Aperitivo in centro",
    dateLabel: "Oggi, 20:30",
    peopleInterested: 6,
    highlyCompatible: 2,
  },
  {
    id: 2,
    title: "Concerto live indie",
    dateLabel: "Domani, 21:00",
    peopleInterested: 12,
    highlyCompatible: 3,
  },
];

const matches: MatchUser[] = [
  {
    id: 1,
    name: "Sara",
    age: 27,
    subtitle: "Live music • Aperitivi",
  },
  {
    id: 2,
    name: "Luca",
    age: 30,
    subtitle: "Sport • Serate tranquille",
    variant: "highlight",
  },
  {
    id: 3,
    name: "Giulia",
    age: 29,
    subtitle: "Mostre • Vini naturali",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6">
      <div className="max-w-md mx-auto space-y-6">
                {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">EventMatch</h1>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/profile"
              className="text-slate-300 hover:text-emerald-400"
            >
              Profilo
            </Link>
            <Link
              href="/logout"
              className="text-red-400 hover:text-red-300"
            >
              Logout
            </Link>
          </div>
        </header>


        {/* Eventi vicini */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wide">
            Eventi vicino a te
          </h2>

          <div className="space-y-3">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`rounded-xl border bg-slate-900/60 p-4 space-y-1 ${
                  index === 0
                    ? "border-emerald-500/60 shadow-lg shadow-emerald-500/20"
                    : "border-slate-800"
                }`}
              >
                <p
                  className={`text-xs uppercase ${
                    index === 0 ? "text-emerald-400" : "text-slate-400"
                  }`}
                >
                  {event.dateLabel}
                </p>
                <p className="font-semibold">{event.title}</p>
                <p className="text-xs text-slate-400">
                  {event.peopleInterested} persone interessate •{" "}
                  {event.highlyCompatible} molto compatibili
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Persone compatibili */}
        <section className="space-y-3">
          <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wide">
            Persone compatibili ora
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {matches.map((user) => (
              <div
                key={user.id}
                className={`rounded-xl p-3 border space-y-2 ${
                  user.variant === "highlight"
                    ? "bg-gradient-to-br from-emerald-600/50 to-slate-900 border-emerald-500/70"
                    : "bg-slate-900/60 border-slate-800"
                }`}
              >
                <div className="h-24 rounded-lg bg-gradient-to-br from-slate-700/70 to-slate-900" />
                <p className="text-sm font-medium">
                  {user.name}, {user.age}
                </p>
                <p className="text-[11px] text-slate-200">{user.subtitle}</p>
              </div>
            ))}
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
