import { VenueJson } from "../../interface";

export default async function getVenues(): Promise<VenueJson> {
  const response = await fetch(
    "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
    { cache: "no-store" }
  );
  return await response.json();
}
