"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-base leading-7 outline-none transition-colors focus:border-zinc-500 dark:border-zinc-700 dark:focus:border-zinc-400";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState
  );

  if (state.status === "sent") {
    return (
      <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="font-medium">Message sent.</p>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          It goes straight to my inbox — my reply comes from
          preet@preetghaghada.com.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClasses}
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm leading-6 text-red-600 dark:text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
