import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-[1.6rem] border border-[rgba(18,54,37,0.12)] bg-[rgba(255,252,245,0.86)] shadow-[0_20px_70px_rgba(15,41,31,0.12)] backdrop-blur-[16px]",
        className,
      )}
      {...props}
    />
  );
}
