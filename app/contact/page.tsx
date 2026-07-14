import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Preet Ghaghada — contact form, WhatsApp, phone and booking coming this week.",
};

export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Contact form, WhatsApp, phone and booking are going live here this
        week. For now, email works:
      </p>
      <a
        href="mailto:preet@preetghaghada.com"
        className="text-lg font-medium underline underline-offset-4"
      >
        preet@preetghaghada.com
      </a>
    </div>
  );
}
