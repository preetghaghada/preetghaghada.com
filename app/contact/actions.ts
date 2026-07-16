"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "sent" | "error";
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: visitors never see this field, form-spam bots fill it in.
  if (formData.get("company")) {
    return { status: "sent" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      error: "Fill in your name, email and message — all three are needed.",
    };
  }
  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      error: "That email address doesn't look right — check it and try again.",
    };
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return {
      status: "error",
      error:
        "That's too long for the form — email preet@preetghaghada.com instead.",
    };
  }

  // Missing key or network failure must degrade to the friendly error,
  // never a 500 — new Resend() throws when the key is absent.
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not set");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Preet Ghaghada <contact@preetghaghada.com>",
      to: "preet@preetghaghada.com",
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (error) throw new Error(error.message);
  } catch {
    return {
      status: "error",
      error:
        "Sending failed on my end. Email or WhatsApp me directly instead — details are on this page.",
    };
  }

  return { status: "sent" };
}
