import { Suspense } from "react";
import { PropertiesContent } from "@/components/PropertiesContent";

export default async function CityPropertiesPage({ params }: { params: { city: string } }) {
  // In Next.js 15+, params is a promise
  const { city } = await params;
  
  // Decode the URL encoded city name (e.g. "new%20york" -> "new york")
  const decodedCity = decodeURIComponent(city);

  return (
    <Suspense fallback={<div className="p-12 text-center text-on-surface-variant font-label-md">Loading properties...</div>}>
      <PropertiesContent city={decodedCity} />
    </Suspense>
  );
}
