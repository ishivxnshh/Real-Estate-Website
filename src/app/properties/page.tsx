import { Suspense } from "react";
import { PropertiesContent } from "@/components/PropertiesContent";

export default async function PropertiesPage({ searchParams }: { searchParams: { location?: string } }) {
  // searchParams is a Promise in Next.js 15+
  const resolvedParams = await searchParams;
  const location = resolvedParams?.location;

  return (
    <Suspense fallback={<div className="p-12 text-center text-on-surface-variant font-label-md">Loading properties...</div>}>
      <PropertiesContent city={location} />
    </Suspense>
  );
}
