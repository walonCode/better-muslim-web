"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  getFieldError,
  type WaitlistPlatform,
  waitlistFormSchema,
} from "@/lib/waitlist";

function GooglePlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.5 2.5L13.8 12 3.5 21.5" fill="#34A853" />
      <path
        d="M13.8 12 17.2 8.9 21 11.05c.8.45.8 1.45 0 1.9L17.2 15.1 13.8 12Z"
        fill="#FBBC04"
      />
      <path d="M3.5 2.5 17.2 8.9 13.8 12 3.5 2.5Z" fill="#4285F4" />
      <path d="M3.5 21.5 13.8 12 17.2 15.1 3.5 21.5Z" fill="#EA4335" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.84 12.07c.03 2.63 2.3 3.51 2.33 3.52-.02.06-.36 1.24-1.18 2.45-.71 1.05-1.45 2.09-2.61 2.11-1.14.02-1.5-.68-2.79-.68s-1.69.66-2.77.7c-1.12.04-1.98-1.12-2.7-2.16-1.47-2.13-2.6-6.03-1.09-8.65.75-1.3 2.09-2.12 3.55-2.14 1.11-.02 2.16.75 2.79.75.62 0 1.8-.93 3.03-.79.52.02 1.98.21 2.92 1.58-.07.04-1.74 1.01-1.72 3.31ZM15.65 4.55c.59-.71 1-1.7.89-2.68-.85.03-1.88.57-2.49 1.28-.55.63-1.03 1.64-.9 2.6.95.07 1.91-.48 2.5-1.2Z" />
    </svg>
  );
}

const storeButtons = [
  {
    label: "Google Play",
    variant: "storePrimary" as const,
    icon: GooglePlayIcon,
    platform: "android" as const,
  },
  {
    label: "App Store",
    variant: "store" as const,
    icon: AppStoreIcon,
    platform: "ios" as const,
  },
];

const platformOptions: Array<{ label: string; value: WaitlistPlatform }> = [
  { label: "Android", value: "android" },
  { label: "iPhone", value: "ios" },
  { label: "Both", value: "both" },
];

export function StoreCta({ platforms }: { platforms?: WaitlistPlatform[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<WaitlistPlatform>("android");
  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string[] | undefined>
  >({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const resetForm = () => {
    setEmail("");
    setPlatform("android");
    setFieldErrors({});
    setSubmitError(null);
    setSuccessMessage(null);
    setIsSubmitting(false);
  };

  const openWaitlist = (nextPlatform: WaitlistPlatform) => {
    resetForm();
    setPlatform(nextPlatform);
    setIsOpen(true);
  };

  const closeWaitlist = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFieldErrors({});
    setSubmitError(null);

    const parsed = waitlistFormSchema.safeParse({ email, platform });

    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...parsed.data,
          source: "store_modal",
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
        fieldErrors?: Record<string, string[] | undefined>;
        message?: string;
      } | null;

      if (!response.ok) {
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }

        setSubmitError(data?.error ?? "Unable to join the waitlist right now.");
        return;
      }

      setSuccessMessage(
        data?.message ?? "You have been added to the Better Muslim waitlist.",
      );
      setEmail("");
      setFieldErrors({});
    } catch {
      setSubmitError("Unable to join the waitlist right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailError = getFieldError(fieldErrors, "email");
  const platformError = getFieldError(fieldErrors, "platform");
  const visibleButtons = platforms?.length
    ? storeButtons.filter((button) => platforms.includes(button.platform))
    : storeButtons;

  return (
    <>
      <div className="flex flex-wrap gap-4 max-md:flex-col">
        {visibleButtons.map((button) => (
          <Button
            key={button.label}
            type="button"
            variant={button.variant}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/45"
            onClick={() => openWaitlist(button.platform)}
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-overlay)] text-current"
              aria-hidden="true"
            >
              <button.icon />
            </span>
            <span>
              <strong>{button.label}</strong>
            </span>
          </Button>
        ))}
      </div>

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[100] grid place-items-center p-4">
              <button
                type="button"
                aria-label="Close waitlist modal"
                className="absolute inset-0 bg-[rgba(13,24,20,0.45)] backdrop-blur-sm"
                onClick={closeWaitlist}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="waitlist-title"
                aria-describedby="waitlist-description"
                className="relative w-full max-w-md rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--surface-strong),var(--surface-soft))] p-6 shadow-[0_28px_90px_rgba(var(--shadow-strong),0.24)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)]" />
                <button
                  type="button"
                  onClick={closeWaitlist}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ×
                  </span>
                </button>

                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand-soft),rgba(184,148,62,0.18))] text-[var(--brand-strong)]">
                  <span className="text-xl font-bold">BM</span>
                </div>
                <p className="mt-5 text-center text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                  Waitlist
                </p>
                <h2
                  id="waitlist-title"
                  className='mt-2 text-center font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[2rem] leading-none font-bold text-[var(--text-primary)]'
                >
                  Get notified when it launches
                </h2>
                <p
                  id="waitlist-description"
                  className="mt-3 text-center text-[1rem] leading-[1.75] text-[var(--text-secondary)]"
                >
                  Join the Better Muslim waitlist and we&apos;ll email you when
                  the app is live on your platform.
                </p>

                {successMessage ? (
                  <div className="mt-6 rounded-[1.5rem] border border-[var(--success-border)] bg-[var(--success-bg)] p-5 text-center">
                    <p className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-strong)]">
                      You&apos;re in
                    </p>
                    <p className="mt-2 text-[1rem] leading-[1.75] text-[var(--success-text)]">
                      {successMessage}
                    </p>
                    <Button
                      type="button"
                      variant="default"
                      className="mt-5 w-full justify-center"
                      onClick={closeWaitlist}
                    >
                      Close
                    </Button>
                  </div>
                ) : (
                  <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                    <label className="grid gap-2">
                      <span className="text-[0.84rem] font-semibold text-[var(--text-primary)]">
                        Email
                      </span>
                      <input
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="min-h-12 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-[var(--text-primary)] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-[var(--text-soft)] focus:border-[var(--brand)] focus:shadow-[0_0_0_4px_rgba(var(--shadow-brand),0.12)]"
                        placeholder="you@example.com"
                      />
                      {emailError ? (
                        <p className="text-sm text-[var(--danger)]">
                          {emailError}
                        </p>
                      ) : null}
                    </label>

                    <label className="grid gap-2">
                      <span className="text-[0.84rem] font-semibold text-[var(--text-primary)]">
                        Notify me for
                      </span>
                      <select
                        value={platform}
                        onChange={(event) =>
                          setPlatform(event.target.value as WaitlistPlatform)
                        }
                        className="min-h-12 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-[var(--text-primary)] outline-none transition-[border-color,box-shadow,background-color] focus:border-[var(--brand)] focus:shadow-[0_0_0_4px_rgba(var(--shadow-brand),0.12)]"
                      >
                        {platformOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {platformError ? (
                        <p className="text-sm text-[var(--danger)]">
                          {platformError}
                        </p>
                      ) : null}
                    </label>

                    <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">
                      We&apos;ll only use your email to notify you about the app
                      launch and closely related release updates.
                    </p>

                    {submitError ? (
                      <div className="rounded-2xl border border-[var(--danger-border)] bg-[var(--danger-bg)] px-4 py-3 text-sm text-[var(--danger)]">
                        {submitError}
                      </div>
                    ) : null}

                    <Button
                      type="submit"
                      variant="default"
                      className="mt-1 w-full justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join waitlist"}
                    </Button>
                  </form>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
