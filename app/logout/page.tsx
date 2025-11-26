// app/logout/page.tsx
import Link from "next/link";

export default function LogoutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold text-emerald-400">
          Logout effettuato
        </h1>
        <p className="text-slate-400 text-sm">
          Hai effettuato l'uscita dal tuo account.
        </p>

        <Link
          href="/login"
          className="inline-flex justify-center items-center rounded-xl px-6 py-3 text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/30"
        >
          Torna al login
        </Link>

        <Link
          href="/"
          className="block text-xs text-slate-400 hover:text-emerald-300 transition mt-4"
        >
          Vai alla home
        </Link>
      </div>
    </main>
  );
}
