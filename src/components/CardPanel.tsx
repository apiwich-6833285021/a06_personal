"use client";

import { useReducer } from "react";
import Card from "./Card";

interface Venue {
  name: string;
  picture: string;
  id: string;
}

const DEFAULT_VENUES: Venue[] = [
  { name: "The Bloom Pavilion", picture: "/img/bloom.jpg", id: "bloom" },
  { name: "Spark Space", picture: "/img/spark.jpg", id: "spark" },
  { name: "The Grand Table", picture: "/img/grandtable.jpg", id: "grandtable" },
];

type RatingMap = Map<string, number>;

type Action =
  | { type: "UPDATE_RATING"; venue: string; rating: number }
  | { type: "REMOVE_VENUE"; venue: string };

function ratingReducer(state: RatingMap, action: Action): RatingMap {
  const newMap = new Map(state);
  if (action.type === "UPDATE_RATING") {
    newMap.set(action.venue, action.rating);
  } else if (action.type === "REMOVE_VENUE") {
    newMap.delete(action.venue);
  }
  return newMap;
}

interface CardPanelProps {
  venues?: Venue[];
}

export default function CardPanel({ venues = DEFAULT_VENUES }: CardPanelProps) {
  const [ratingMap, dispatch] = useReducer(
    ratingReducer,
    venues,
    (v) => new Map(v.map((venue) => [venue.name, 0]))
  );

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-6 justify-center">
        {venues.map((venue) => (
          <Card
            key={venue.id}
            venueName={venue.name}
            imgSrc={venue.picture}
            vid={venue.id}
            rating={ratingMap.get(venue.name) ?? 0}
            onRatingChange={(newRating) =>
              dispatch({ type: "UPDATE_RATING", venue: venue.name, rating: newRating })
            }
          />
        ))}
      </div>

      <div className="mt-8 w-full max-w-lg mx-auto px-4">
        {Array.from(ratingMap.entries())
          .filter(([, rating]) => rating > 0)
          .map(([venueName, rating]) => (
            <div
              key={venueName}
              data-testid={venueName}
              className="flex justify-between items-center p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100 rounded"
              onClick={() => dispatch({ type: "REMOVE_VENUE", venue: venueName })}
            >
              <span className="text-gray-800">{venueName}</span>
              <span className="text-gray-600">Rating : {rating}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
