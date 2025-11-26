// app/login/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // qui in futuro controlleremo email/password col DB
    // per ora facciamo finta che il login vada bene
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/80">
            EventMatch
          </p>
          <h1 className="text-2xl font-semibold">Bentornato</h1>
          <p className="text-sm text-slate-400">
            Accedi per vedere eventi e persone compatibili con te.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
        >
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

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-semibold py-2.5 mt-2 transition shadow-lg shadow-emerald-500/40"
          >
            Accedi
          </button>
        </form>

        <p className="text-center text-xs text-slate-400">
          Non hai ancora un account?{" "}
          <Link
            href="/signup"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Registrati
          </Link>
        </p>
      </div>
    </main>
  );
}
