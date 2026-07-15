import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites built for a one-time price, marketing that brings visitors, and AI automation that answers enquiries — for small businesses and solo professionals.",
};

const services = [
  {
    title: "Website — built for you, one-time price",
    paragraphs: [
      "A fast, professional site, live in weeks — pages, copy, hosting setup, the lot. First site or a tired old one, the goal is the same: people find you, and they get in touch.",
      "Two revision rounds are included so it ends up the way you want it. A round is one consolidated batch of feedback — that's stated in writing up front, so you always know where you stand.",
    ],
  },
  {
    title: "Marketing — so the site doesn't sit idle",
    paragraphs: [
      "A website without visitors is a business card in a drawer. I run SEO and paid ads — plus social and email where it fits — to put your site in front of the people searching for what you do.",
      "Monthly plans start from ₹8,000 and are scoped to what you actually need, not a fixed bundle of things you don't.",
    ],
  },
  {
    title: "Automation — stop answering the same question twice",
    paragraphs: [
      "WhatsApp assistants and workflow bots that answer common questions, take bookings, and chase the routine work you do by hand — day and night, without you touching your phone.",
      "One-time setup from ₹15,000, with a monthly plan covering hosting and updates. The monthly is discounted when paired with a marketing plan.",
    ],
  },
];

export default function Services() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-24">
      <section className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Services
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Three things, done properly: a website that works, marketing that
          brings people to it, and automation that answers them when they
          arrive.
        </p>
      </section>

      <div className="flex flex-col gap-12">
        {services.map(({ title, paragraphs }) => (
          <section
            key={title}
            className="flex max-w-3xl flex-col gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800"
          >
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {paragraphs.map((p) => (
              <p
                key={p}
                className="leading-7 text-zinc-600 dark:text-zinc-400"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <section className="flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          Most clients pair the site with a marketing plan from day one — one
          project, one outcome: a site that pays for itself. Ask about the
          combined package when you get in touch.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/pricing"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            See pricing
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-400"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
