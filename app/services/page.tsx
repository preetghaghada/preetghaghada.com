import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, marketing and AI automation for small businesses — service details coming this week.",
};

export default function Services() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Services
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Websites, marketing and AI automation — full service details are being
        written this week.
      </p>
    </div>
  );
}
