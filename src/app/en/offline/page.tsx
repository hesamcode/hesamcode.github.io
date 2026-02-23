export default function EnOfflinePage() {
  return (
    <main dir="ltr" className="min-h-dvh w-full grid place-items-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--glass-2)] backdrop-blur p-5 text-center">
        <h1 className="text-xl font-extrabold text-[var(--text)]">
          You are offline
        </h1>
        <p className="mt-2 text-sm font-bold text-[var(--muted)] leading-7">
          The page is not available right now. Please check your connection and
          try again.
        </p>

        <a
          href="/en/"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 font-bold text-white transition active:scale-95"
        >
          Reload
        </a>
      </div>
    </main>
  );
}
