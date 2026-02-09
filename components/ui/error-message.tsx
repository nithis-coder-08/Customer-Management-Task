import { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({
  title = "Something went wrong",
  message,
  onRetry,
  className,
}: ErrorMessageProps) {
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    onRetry?.();
  };

  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-center",
        className
      )}
    >
      <h3 className="font-semibold text-destructive">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={handleRetry}
          disabled={retrying}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/20 disabled:opacity-70"
        >
          {retrying ? (
            <>
              <Loader size="sm" />
              Retrying...
            </>
          ) : (
            "Try again"
          )}
        </button>
      )}
    </div>
  );
}
