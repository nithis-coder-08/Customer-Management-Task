import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-12 px-4 text-center",
        className
      )}
    >
      <p className="font-medium text-foreground">{title}</p>
      {description && (
        <p className="mt-1 text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}
