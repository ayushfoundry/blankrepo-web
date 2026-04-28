"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter your email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.from("waitlist").insert({
      email: trimmedEmail,
      source: "landing_page",
      status: "pending",
    });

    if (error) {
      if (error.message.toLowerCase().includes("duplicate")) {
        setStatus("success");
        setMessage("You’re already on the waitlist.");
        return;
      }

      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("You’re on the waitlist. We’ll be in touch.");
    setEmail("");
  }

  return (
    <div className="w-full rounded-[24px] border border-white/10 bg-black/30 p-6 md:p-7">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/38">
        Join the waitlist
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-white/58">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white placeholder:text-white/25 outline-none transition focus:border-white/25 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full cursor-pointer rounded-2xl bg-white px-5 py-4 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "Request early access"}
        </button>
      </form>

      <p className="mt-4 text-xs leading-6 text-white/40">
        No payment. No commitment. Just a heads-up when BlankRepo is ready to try.
      </p>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-white/70" : "text-red-300/80"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}