import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Corrected import path
import { Skeleton } from "@/components/ui/skeleton"; // Corrected import path

// This component displays a skeleton loading UI for a card using Shadcn UI components.
// It mimics the layout of the provided image, showing placeholder
// elements for text, an image, and buttons, indicating content is loading.
const FeaturedSkeleton = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-4xl flex flex-col md:flex-row overflow-hidden animate-pulse">
        {/* Left section: Text content placeholders */}
        <CardContent className="md:w-1/2 p-6 space-y-4 flex flex-col justify-between">
          <div>
            {/* Category/Tag placeholder */}
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-12 rounded" />
            </div>

            {/* Title placeholder */}
            <Skeleton className="h-8 w-3/4 rounded mb-4" />

            {/* Description placeholders */}
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-4/5 rounded" />
            </div>
          </div>

          {/* Date and Author placeholders */}
          <div className="flex items-center space-x-4 pt-2">
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-4 w-28 rounded" />
          </div>

          {/* Button placeholder */}
          {/* Using a Shadcn Button but styling it as a skeleton */}
          <Skeleton className="h-10 w-40 rounded-lg mt-4" />
        </CardContent>

        {/* Right section: Image placeholder */}
        <div className="md:w-1/2 bg-gray-200 mx-4 h-64 md:h-auto flex-shrink-0 rounded-r-xl flex items-center justify-center">
          {/* This div acts as the image placeholder */}
          <Skeleton className="h-full w-full rounded-r-xl" />
        </div>
      </Card>
    </div>
  );
};

export default FeaturedSkeleton;
