import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link href={ROUTES.HOME} className="mt-6">
        <Button>Back to Dashboard</Button>
      </Link>
    </div>
  );
}
