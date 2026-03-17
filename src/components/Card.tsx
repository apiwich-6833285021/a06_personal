"use client";

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Link from "next/link";
import Rating from "@mui/material/Rating";

interface CardProps {
  venueName: string;
  imgSrc: string;
  vid?: string;
  rating?: number;
  onRatingChange?: (newRating: number) => void;
}

export default function Card({ venueName, imgSrc, vid, rating = 0, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <div className="w-[250px]">
        {vid ? (
          <Link href={`/venuinfo/venue/${vid}`}>
            <div className="relative w-full h-[160px]">
              <Image
                src={imgSrc}
                alt={venueName}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="mt-2 px-1">
              <p className="text-lg font-semibold text-gray-800">{venueName}</p>
            </div>
          </Link>
        ) : (
          <>
            <div className="relative w-full h-[160px]">
              <Image
                src={imgSrc}
                alt={venueName}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="mt-2 px-1">
              <p className="text-lg font-semibold text-gray-800">{venueName}</p>
            </div>
          </>
        )}
        <div className="mt-2 px-1">
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => {
              if (onRatingChange && newValue !== null) {
                onRatingChange(newValue);
              }
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
