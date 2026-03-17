import { VenueJson, VenueItem } from "../../interface";

export default async function getVenue(vid: string): Promise<{ success: boolean; data: VenueItem }> {
  const response = await fetch(
    `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${vid}`,
    { cache: "no-store" }
  );
  return await response.json();
}