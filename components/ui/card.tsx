import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_70px_rgba(var(--shadow-strong),0.12)] backdrop-blur-[16px]",
        className,
      )}
      {...props}
    />
  );
}
