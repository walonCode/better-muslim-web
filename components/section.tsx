import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  const sectionClassName = className
    ? `mx-auto w-[min(1180px,calc(100%-2rem))] md:w-[min(1180px,calc(100%-4rem))] ${className}`
    : "mx-auto w-[min(1180px,calc(100%-2rem))] md:w-[min(1180px,calc(100%-4rem))]";

  return <section className={sectionClassName} {...props} />;
}
