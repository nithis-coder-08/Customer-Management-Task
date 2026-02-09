"use client";

import { useEffect } from "react";
import { ErrorMessage } from "@/components/ui/error-message";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <ErrorMessage
        title="Something went wrong"
        message={error.message || "An unexpected error occurred."}
        onRetry={reset}
      />
    </div>
  );
}
