import type { Metadata } from "next";
import { fetchCustomers } from "@/lib/api";
import { CustomerList } from "@/components/customers/customer-list";

export const metadata: Metadata = {
  title: "Customer Dashboard",
  description: "View and manage your customers",
};

export default async function DashboardPage() {
  const customers = await fetchCustomers();

  return (
    <main className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Customer Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Search and browse your customers
        </p>
      </header>
      <CustomerList customers={customers} />
    </main>
  );
}
