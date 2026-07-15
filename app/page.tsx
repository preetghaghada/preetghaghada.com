import Link from "next/link";

const services = [
  {
    title: "Website — built for you, one-time price",
    blurb:
      "A fast, professional site, live in weeks — pages, copy, hosting setup, the lot. Two revision rounds included so it ends up the way you want it.",
  },
  {
    title: "Marketing — so the site doesn't sit idle",
    blurb:
      "A website without visitors is a business card in a drawer. I run SEO and paid ads (plus social and email where it fits) to put your site in front of the people searching for what you do. From ₹8,000/month, scoped to what you actually need.",
  },
  {
    title: "Automation — stop answering the same question twice",
    blurb:
      "WhatsApp assistants and workflow bots that answer common questions, take bookings, and chase the routine work you do by hand. One-time setup from ₹15,000, with a monthly plan for hosting and updates — discounted when paired with a marketing plan.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-24">
      <section className="flex max-w-3xl flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Preet Ghaghada — I build your website, run your ads, and my AI
          answers every enquiry.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I build websites for small businesses and solo professionals — and
          then run the AI-driven marketing and automation that make the phone
          ring. First site or a tired old one, the goal is the same: people
          find you, and they get in touch.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Get a quote
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-400"
          >
            See pricing
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I do
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map(({ title, blurb }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {blurb}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Most clients pair the site with a marketing plan from day one — one
          project, one outcome: a site that pays for itself.{" "}
          <Link
            href="/services"
            className="font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
          >
            More on how each service works →
          </Link>
        </p>
      </section>

      <section className="flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-2xl font-semibold tracking-tight">
          Tell me what you need
        </h2>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          A 15-minute call is enough to scope most projects — or send a
          message with what you have in mind.
        </p>
        <Link
          href="/contact"
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
