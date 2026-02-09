import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchCustomerById, fetchCustomers } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";

interface CustomerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const customers = await fetchCustomers();
  return customers.map((customer) => ({
    id: customer.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: CustomerPageProps): Promise<Metadata> {
  const { id } = await params;
  const customer = await fetchCustomerById(id);
  if (!customer) {
    return { title: "Customer Not Found" };
  }
  return {
    title: `${customer.name} | Customer Details`,
    description: `Contact and company details for ${customer.name}`,
  };
}

export default async function CustomerDetailPage({ params }: CustomerPageProps) {
  const { id } = await params;
  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  const addressLine = [
    customer.address.suite,
    customer.address.street,
    customer.address.city,
    customer.address.zipcode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6">
        <Link href={ROUTES.HOME}>
          <Button variant="outline" size="sm">
            ← Back to Dashboard
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{customer.name}</CardTitle>
          <CardDescription>@{customer.username}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h3 className="mb-2 font-medium text-foreground">Contact</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>Email: {customer.email}</li>
              <li>Phone: {customer.phone}</li>
              <li>Website: {customer.website}</li>
            </ul>
          </section>
          <section>
            <h3 className="mb-2 font-medium text-foreground">Company</h3>
            <p className="text-muted-foreground text-sm">
              {customer.company.name}
            </p>
          </section>
          <section>
            <h3 className="mb-2 font-medium text-foreground">Address</h3>
            <p className="text-muted-foreground text-sm">{addressLine}</p>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
