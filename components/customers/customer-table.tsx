"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Customer } from "@/types/customer";
import { Loader } from "@/components/ui/loader";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CustomerTableProps {
  customers: Customer[];
  className?: string;
}

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "company", label: "Company" },
  { key: "city", label: "City" },
] as const;

export function CustomerTable({ customers, className }: CustomerTableProps) {
  const router = useRouter();
  const [navigatingId, setNavigatingId] = useState<number | null>(null);

  const handleRowClick = (customer: Customer) => {
    setNavigatingId(customer.id);
    router.push(ROUTES.CUSTOMER_DETAIL(customer.id));
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border",
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 font-medium text-foreground"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              const isNavigating = navigatingId === customer.id;
              return (
              <tr
                key={customer.id}
                role="button"
                tabIndex={0}
                onClick={() => handleRowClick(customer)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleRowClick(customer);
                  }
                }}
                className={cn(
                  "cursor-pointer transition-colors hover:bg-muted/50",
                  isNavigating && "bg-muted/50"
                )}
              >
                <td className="px-4 py-3">
                  {isNavigating ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader size="sm" />
                      <span className="font-medium">{customer.name}</span>
                    </span>
                  ) : (
                  <Link
                    href={ROUTES.CUSTOMER_DETAIL(customer.id)}
                    className="font-medium text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {customer.name}
                  </Link>
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {customer.email}
                </td>
                <td className="px-4 py-3">{customer.company.name}</td>
                <td className="px-4 py-3">{customer.address.city}</td>
              </tr>
            );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
