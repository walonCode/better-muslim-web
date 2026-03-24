import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-13 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--brand)] text-[var(--text-inverse)] shadow-[0_16px_36px_rgba(var(--shadow-brand),0.22)] hover:bg-[var(--brand-strong)]",
        secondary:
          "border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-primary)]",
        store:
          "min-w-[13.5rem] justify-start gap-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-[0_12px_30px_rgba(var(--shadow-strong),0.08)]",
        storePrimary:
          "min-w-[13.5rem] justify-start gap-3 bg-[linear-gradient(135deg,var(--brand),var(--brand-strong))] text-[var(--text-inverse)] shadow-[0_12px_30px_rgba(var(--shadow-strong),0.14)]",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonAnchorProps = {
  href: string;
} & ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonVariants>;

type ButtonElementProps = {
  href?: undefined;
} & ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonAnchorProps | ButtonElementProps;

export function Button({
  className,
  variant,
  fullWidth,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(buttonVariants({ variant, fullWidth }), className);

  if ("href" in props && typeof props.href === "string") {
    return <a className={buttonClassName} {...props} />;
  }

  return <button className={buttonClassName} {...props} />;
}
