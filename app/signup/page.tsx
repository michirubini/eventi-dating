// app/signup/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";

export default function SignupPage() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = {
      name: formData.get("name") as string,
      age: Number(formData.get("age")),
      email: formData.get("email") as string,
      tags: [], // lo gestiremo nello step successivo
    };

    // Salvo l’utente nel nostro store globale
    setUser(user);

    // Redirect alla dashboard
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/80">
            EventMatch
          </p>
          <h1 className="text-2xl font-semibold">Crea il tuo profilo</h1>
          <p className="text-sm text-slate-400">
            Partiamo dalle basi e dal tuo stile di vita.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-slate-300">Nome</label>
              <input
                name="name"
                type="text"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                placeholder="Michele"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">Età</label>
              <input
                name="age"
                type="number"
                min="18"
                className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
                placeholder="28"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-300">Password</label>
            <input
              name="password"
              type="password"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/70"
              placeholder="••••••••"
              required
            />
          </div>

          {/* I TAG li implementiamo nello STEP successivo */}
          <div className="space-y-2">
            <label className="text-xs text-slate-300">
              Il tuo stile di vita (tag)
            </label>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Mattiniero",
                "Nottambulo",
                "Sportivo",
                "Serate tranquille",
                "Concerti",
                "Aperitivi",
              ].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-slate-700 px-3 py-1 bg-slate-950/60 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold py-2.5 mt-2 transition shadow-lg shadow-emerald-500/40"
          >
            Continua
          </button>

          <p className="text-[11px] text-slate-500 mt-2 text-center">
            Cliccando su Continua accetti i nostri Termini e confermi di avere
            almeno 18 anni.
          </p>
        </form>

        <p className="text-center text-xs text-slate-400">
          Hai già un account?{" "}
          <Link
            href="/login"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Accedi
          </Link>
        </p>
      </div>
    </main>
  );
}
