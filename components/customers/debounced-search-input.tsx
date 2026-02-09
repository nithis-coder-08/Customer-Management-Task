"use client";

import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { DEBOUNCE_MS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface DebouncedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
}

export function DebouncedSearchInput({
  value,
  onChange,
  placeholder = "Search by name or email...",
  debounceMs = DEBOUNCE_MS,
  className,
}: DebouncedSearchInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onChange(localValue);
    }, debounceMs);
    return () => window.clearTimeout(timer);
  }, [localValue, debounceMs, onChange]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
    },
    []
  );

  return (
    <Input
      type="search"
      role="searchbox"
      aria-label="Search customers"
      value={localValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn("max-w-sm", className)}
    />
  );
}
