import { VenueItem, VenueJson } from "../../interface";
import Card from "./Card";

interface VenueCatalogProps {
  venuesJson: Promise<VenueJson>;
}

export default async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  const venueJsonReady: VenueJson = await venuesJson;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {venueJsonReady.data.map((venue: VenueItem) => (
        <Card
          key={venue.id}
          venueName={venue.name}
          imgSrc={venue.picture}
          vid={venue.id}
        />
      ))}
    </div>
  );
}
