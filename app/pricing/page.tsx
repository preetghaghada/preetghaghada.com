import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward pricing for websites, marketing and AI automation — published this week.",
};

export default function Pricing() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Pricing
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Straightforward tiers for websites, marketing and AI automation —
        pricing goes up this week.
      </p>
    </div>
  );
}
