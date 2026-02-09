"use client";

import { useMemo, useState } from "react";
import type { Customer } from "@/types/customer";
import { DebouncedSearchInput } from "./debounced-search-input";
import { CustomerTable } from "./customer-table";
import { CustomerCard } from "./customer-card";
import { EmptyState } from "./empty-state";

interface CustomerListProps {
  customers: Customer[];
}

function filterCustomers(customers: Customer[], query: string): Customer[] {
  const q = query.trim().toLowerCase();
  if (!q) return customers;
  return customers.filter(
    (c) =>
      c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
  );
}

export function CustomerList({ customers }: CustomerListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(
    () => filterCustomers(customers, searchQuery),
    [customers, searchQuery]
  );

  return (
    <div className="space-y-6">
      <DebouncedSearchInput value={searchQuery} onChange={setSearchQuery} />

      {filtered.length === 0 ? (
        <EmptyState
          title="No customers found"
          description={
            searchQuery
              ? "Try a different search term."
              : "There are no customers to display."
          }
        />
      ) : (
        <>
          <div className="hidden md:block">
            <CustomerTable customers={filtered} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:hidden lg:grid-cols-3">
            {filtered.map((customer) => (
              <CustomerCard key={customer.id} customer={customer} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
