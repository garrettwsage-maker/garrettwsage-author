
const books = [
  {
    title: "Archetypes",
    image: "/covers/Archetypes.jpeg",
    series: "The Eve Protocol",
  },
  {
    title: "Genotypes",
    image: "/covers/Genotypes.jpeg",
    series: "The Eve Protocol",
  },
  {
    title: "Xenotypes",
    image: "/covers/xenotypes.jpeg",
    series: "The Eve Protocol",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Dark Feminist Fiction
            </p>

            <h1 className="text-6xl font-serif text-white mb-6">
              Garrett W. Sage
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
              Author of interconnected psychological thrillers exploring trauma,
              misogyny, power, survival, institutional corruption, endurance,
              and resistance.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.amazon.com"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-2xl font-semibold"
              >
                Amazon Author Page
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582677728903"
                target="_blank"
                className="px-6 py-3 border border-zinc-700 rounded-2xl"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img
              src="/covers/Archetypes.jpeg"
              alt="Archetypes"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-serif text-white mb-12">
            The Eve Protocol Series
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full"
                />

                <div className="p-6">
                  <p className="text-sm uppercase tracking-widest text-zinc-500 mb-2">
                    {book.series}
                  </p>

                  <h3 className="text-2xl text-white font-serif">
                    {book.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
