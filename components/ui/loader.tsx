import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-6 border-2",
  md: "size-10 border-2",
  lg: "size-14 border-[3px]",
};

export function Loader({ className, size = "md" }: LoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoaderScreen({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4">
      <Loader size="lg" />
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}
