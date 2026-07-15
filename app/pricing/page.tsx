import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward pricing for websites, marketing and AI automation — three website tiers, monthly marketing plans, and bot setup costs, stated up front.",
};

const websiteTiers = [
  {
    tier: "Starter",
    includes:
      "3 pages, template design, copywriting, hosting setup, 2 revision rounds",
    india: "₹10k–18k",
    global: "$150–250",
  },
  {
    tier: "Business",
    includes:
      "5–7 pages, light custom design, forms, basic SEO, Google Business Profile",
    india: "₹25k–60k",
    global: "$400–800",
  },
  {
    tier: "Custom",
    includes:
      "Booking or e-commerce-lite, integrations, advanced SEO",
    india: "₹75k–1.5L+",
    global: "$1,000–3,000+",
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-24">
      <section className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pricing
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Stated up front, so neither of us wastes a call finding out we're
          not a fit. These are starting points — every quote is scoped to the
          job.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Websites — one-time price
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-300 dark:border-zinc-700">
                <th className="py-3 pr-4 font-semibold">Tier</th>
                <th className="py-3 pr-4 font-semibold">What you get</th>
                <th className="py-3 pr-4 font-semibold">India (₹)</th>
                <th className="py-3 font-semibold">Global (USD)</th>
              </tr>
            </thead>
            <tbody>
              {websiteTiers.map(({ tier, includes, india, global }) => (
                <tr
                  key={tier}
                  className="border-b border-zinc-200 dark:border-zinc-800"
                >
                  <td className="py-4 pr-4 font-medium">{tier}</td>
                  <td className="py-4 pr-4 leading-6 text-zinc-600 dark:text-zinc-400">
                    {includes}
                  </td>
                  <td className="py-4 pr-4 whitespace-nowrap">{india}</td>
                  <td className="py-4 whitespace-nowrap">{global}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Two revision rounds are included in every tier — a round is one
          consolidated batch of feedback. Extra rounds ₹1,500–2,500.
        </p>
      </section>

      <section className="flex max-w-3xl flex-col gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold tracking-tight">
          Marketing — monthly
        </h2>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          SEO, paid ads, and social and email where it fits. Plans run
          ₹8,000–25,000/month depending on scope — you pay for what your
          business actually needs, not a fixed bundle.
        </p>
      </section>

      <section className="flex max-w-3xl flex-col gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold tracking-tight">
          AI automation — setup plus monthly
        </h2>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          WhatsApp assistants and workflow bots: one-time setup ₹15,000–50,000
          by complexity, plus a monthly plan of ₹3,000–10,000 for hosting,
          updates and message costs. The monthly is discounted when bundled
          with a marketing plan.
        </p>
      </section>

      <section className="flex flex-col items-start gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          Most clients pair the site with a marketing plan from day one — ask
          about the combined package when you get in touch.
        </p>
        <Link
          href="/contact"
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Get a quote
        </Link>
      </section>
    </div>
  );
}
