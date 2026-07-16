import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Preet Ghaghada — contact form, WhatsApp, phone, email, or book a 15-minute intro call.",
};

const channels = [
  {
    label: "WhatsApp",
    value: "+91 7249639699",
    href: "https://wa.me/917249639699",
  },
  {
    label: "Phone",
    value: "+91 7249639699",
    href: "tel:+917249639699",
  },
  {
    label: "Book a call",
    value: "15-minute intro call",
    href: "https://cal.com/preetghaghada/intro-call-15-min",
  },
  {
    label: "Email",
    value: "preet@preetghaghada.com",
    href: "mailto:preet@preetghaghada.com",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-24">
      <section className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Tell me what you need — a new site, more enquiries from the one you
          have, or the routine questions taken off your hands. Use the form,
          or whichever channel you prefer.
        </p>
      </section>

      <div className="grid gap-16 sm:grid-cols-[2fr_1fr]">
        <div className="max-w-xl">
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-8">
          {channels.map(({ label, value, href }) => (
            <div key={label} className="flex flex-col gap-1">
              <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {label}
              </h2>
              <a
                href={href}
                className="font-medium underline-offset-4 hover:underline"
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {value}
              </a>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
