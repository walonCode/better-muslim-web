"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

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
  },
  {
    label: "App Store",
    variant: "store" as const,
    icon: AppStoreIcon,
  },
];

export function StoreCta() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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

  return (
    <>
      <div className="flex flex-wrap gap-4 max-md:flex-col">
        {storeButtons.map((button) => (
          <Button
            key={button.label}
            type="button"
            variant={button.variant}
            onClick={() => setIsOpen(true)}
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.16)] text-current"
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
                aria-label="Close coming soon modal"
                className="absolute inset-0 bg-[rgba(13,24,20,0.45)] backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="store-coming-soon-title"
                aria-describedby="store-coming-soon-description"
                className="relative w-full max-w-md rounded-[2rem] border border-[rgba(18,54,37,0.12)] bg-[linear-gradient(180deg,rgba(255,252,245,0.98),rgba(248,243,233,0.98))] p-6 text-center shadow-[0_28px_90px_rgba(15,41,31,0.24)]"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(13,122,92,0.12),rgba(184,148,62,0.18))] text-[#08523e]">
                  <span className="text-xl font-bold">BM</span>
                </div>
                <p className="mt-5 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[#08523e]">
                  Store Release
                </p>
                <h2
                  id="store-coming-soon-title"
                  className='mt-2 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[2rem] leading-none font-bold text-[#163328]'
                >
                  Coming soon
                </h2>
                <p
                  id="store-coming-soon-description"
                  className="mt-3 text-[1rem] leading-[1.75] text-[#617064]"
                >
                  Better Muslim is not in the stores yet. We&apos;ll publish the
                  download links here as soon as the release is ready.
                </p>
                <Button
                  type="button"
                  variant="default"
                  className="mt-6 w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
