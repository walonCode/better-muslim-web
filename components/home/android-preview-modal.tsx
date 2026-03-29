"use client";

import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

export function AndroidPreviewModal({
  isMounted,
  isOpen,
  onClose,
  androidPreviewUrl,
}: {
  isMounted: boolean;
  isOpen: boolean;
  onClose: () => void;
  androidPreviewUrl: string;
}) {
  if (!isMounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[120] grid place-items-center overflow-y-auto p-4">
      <button
        type="button"
        aria-label="Close Android preview modal"
        className="absolute inset-0 bg-[rgba(13,24,20,0.45)] backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="android-preview-title"
        aria-describedby="android-preview-description"
        className="relative my-8 w-full max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,var(--surface-strong),var(--surface-soft))] p-6 shadow-[0_28px_90px_rgba(var(--shadow-strong),0.24)]"
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--brand),transparent)]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-soft)]"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ×
          </span>
        </button>

        <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--hero-preview-top),var(--hero-preview-bottom)),var(--surface)] p-5">
            <p className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
              Android preview
            </p>
            <h2
              id="android-preview-title"
              className='mt-3 font-["Iowan_Old_Style","Palatino_Linotype","Book_Antiqua",serif] text-[2.2rem] leading-none font-bold text-[var(--text-primary)]'
            >
              Try Better Muslim early.
            </h2>
            <p
              id="android-preview-description"
              className="mt-4 text-[1rem] leading-[1.75] text-[var(--text-secondary)]"
            >
              Open the Expo build on your Android phone, download the APK, and
              install it directly. No sign in or sign up is required.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 max-md:flex-col">
              <Button
                href={androidPreviewUrl}
                variant="storePrimary"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <strong>Download Android Preview</strong>
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_14px_40px_rgba(var(--shadow-strong),0.08)]">
            <div className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-strong)]">
              Install guide
            </div>
            <ol className="mt-4 grid gap-4 text-[0.98rem] leading-[1.75] text-[var(--text-secondary)]">
              <li>Open the preview build link on your Android phone.</li>
              <li>
                Tap download on the Expo build page. No account is required.
              </li>
              <li>Download the APK and wait for the file to finish.</li>
              <li>
                If Android blocks the install, allow installs from your browser
                or file manager for this step.
              </li>
              <li>
                Open the downloaded APK, install Better Muslim, and launch the
                app normally.
              </li>
            </ol>
            <p className="mt-4 rounded-[1.1rem] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm leading-[1.7] text-[var(--text-secondary)]">
              If you already installed an older preview, uninstall it first if
              Android reports a signing conflict.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
