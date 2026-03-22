import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  const sectionClassName = className
    ? `section-wrap ${className}`
    : "section-wrap";

  return <section className={sectionClassName} {...props} />;
}
