const streams = [
  {
    title: "Websites",
    blurb: "A fast, modern site built to bring you customers — not just to look good.",
  },
  {
    title: "Marketing",
    blurb: "Ads and content that put your business in front of the people searching for it.",
  },
  {
    title: "AI automation",
    blurb: "An AI assistant that answers every enquiry on WhatsApp, day and night.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-24">
      <section className="flex max-w-3xl flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Preet Ghaghada — I build your website, run your ads, and my AI
          answers every enquiry.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Websites, marketing and AI automation for small businesses. The full
          site is being built this week — launching here soon.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {streams.map(({ title, blurb }) => (
          <div
            key={title}
            className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {blurb}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
