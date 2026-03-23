import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-13 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-[#0d7a5c] text-[#f7f5ef] shadow-[0_16px_36px_rgba(13,122,92,0.22)] hover:bg-[#08523e]",
        secondary:
          "border border-[rgba(18,54,37,0.12)] bg-[rgba(255,250,241,0.72)] text-[#163328]",
        store:
          "min-w-[13.5rem] justify-start gap-3 border border-[rgba(12,64,48,0.14)] bg-[rgba(255,252,245,0.88)] text-[#163328] shadow-[0_12px_30px_rgba(16,41,31,0.08)]",
        storePrimary:
          "min-w-[13.5rem] justify-start gap-3 bg-[linear-gradient(135deg,#0d7a5c,#08523e)] text-[#f8f5ef] shadow-[0_12px_30px_rgba(16,41,31,0.14)]",
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
