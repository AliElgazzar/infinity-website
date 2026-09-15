import { cn } from "@/lib/utils";

type BlueprintGridProps = {
  className?: string;
  dense?: boolean;
  opacity?: number;
};

export function BlueprintGrid({
  className,
  dense = false,
  opacity = 0.45,
}: BlueprintGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        dense ? "blueprint-grid-dense" : "blueprint-grid",
        className,
      )}
      style={{ opacity }}
    />
  );
}
