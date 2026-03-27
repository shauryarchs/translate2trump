export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Translate2Trump
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
          Rewrite any sentence into a bold, exaggerated, parody-style political voice.
        </p>

        <div className="mt-10 w-full max-w-2xl rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm">
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Enter your text
          </label>

          <textarea
            placeholder="Example: Our team needs to move faster."
            className="min-h-[160px] w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-zinc-500"
          />

          <button className="mt-4 rounded-xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
            Translate
          </button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          For parody and entertainment purposes only. Not affiliated with or endorsed by Donald J. Trump.
        </p>
      </section>
    </main>
  );
}
