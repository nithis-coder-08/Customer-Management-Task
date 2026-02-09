"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Customer } from "@/types/customer";
import { Loader } from "@/components/ui/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CustomerCardProps {
  customer: Customer;
  className?: string;
}

export function CustomerCard({ customer, className }: CustomerCardProps) {
  const router = useRouter();
  const [navigating, setNavigating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setNavigating(true);
    router.push(ROUTES.CUSTOMER_DETAIL(customer.id));
  };

  return (
    <Link
      href={ROUTES.CUSTOMER_DETAIL(customer.id)}
      onClick={handleClick}
      className={cn("block transition-opacity hover:opacity-90", className)}
    >
      <Card
        className={cn(
          "relative h-full transition-shadow hover:shadow-md",
          navigating && "opacity-90"
        )}
      >
        {navigating && (
          <span className="absolute right-3 top-3">
            <Loader size="sm" />
          </span>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-primary">{customer.name}</CardTitle>
          <CardDescription>{customer.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p>
            <span className="text-muted-foreground">Company:</span>{" "}
            {customer.company.name}
          </p>
          <p>
            <span className="text-muted-foreground">City:</span>{" "}
            {customer.address.city}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
