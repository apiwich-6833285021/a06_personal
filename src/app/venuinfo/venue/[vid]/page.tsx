import getVenue from "@/libs/getVenue";
import Image from "next/image";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueDetail = await getVenue(vid);
  const venue = venueDetail.data;

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {venue.name}
      </h1>
      <div className="max-w-3xl mx-auto flex gap-8 items-start bg-white rounded-xl shadow-lg p-6">
        <div className="relative w-[300px] h-[200px] flex-shrink-0">
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          <p><span className="font-semibold">Name:</span> {venue.name}</p>
          <p><span className="font-semibold">Address:</span> {venue.address}</p>
          <p><span className="font-semibold">District:</span> {venue.district}</p>
          <p><span className="font-semibold">Postal Code:</span> {venue.postalcode}</p>
          <p><span className="font-semibold">Tel:</span> {venue.tel}</p>
          <p><span className="font-semibold">Daily Rate:</span> {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  );
}
