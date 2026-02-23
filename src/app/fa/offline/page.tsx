export default function FaOfflinePage() {
  return (
    <main dir="rtl" className="min-h-dvh w-full grid place-items-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--glass-2)] backdrop-blur p-5 text-center">
        <h1 className="text-xl font-extrabold text-[var(--text)]">
          شما آفلاین هستید
        </h1>
        <p className="mt-2 text-sm font-bold text-[var(--muted)] leading-7">
          در حال حاضر دسترسی به این صفحه ممکن نیست. اتصال اینترنت را بررسی کنید
          و دوباره تلاش کنید.
        </p>

        <a
          href="/fa/"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 font-bold text-white transition active:scale-95"
        >
          تلاش دوباره
        </a>
      </div>
    </main>
  );
}
