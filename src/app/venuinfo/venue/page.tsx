import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default function VenuePage() {
  const venuesJson = getVenues();

  return (
    <main className="min-h-screen p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Select your venue</h1>
        <p className="text-gray-500 mt-2">Explore 3 fabulous venues in our venue catalog</p>
      </div>
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  );
}
