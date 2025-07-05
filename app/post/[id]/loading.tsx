import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component

const loading = () => {
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          {/* Skeleton for the image */}
          <Skeleton className="w-full h-[400px] rounded-md mb-4" />

          {/* Skeleton for the title */}
          <Skeleton className="h-10 w-3/4 mb-2" />

          {/* Skeleton for the category */}
          <CardDescription className="text-sm text-gray-500">
            <Skeleton className="h-4 w-1/4" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Skeletons for the description paragraphs */}
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-11/12 mb-2" />
          <Skeleton className="h-5 w-5/6 mb-6" />

          {/* Skeletons for author avatar and name/date */}
          <div className="flex items-center space-x-4 mt-6">
            <div>
              <Skeleton className="h-10 w-10 rounded-full" />{" "}
              {/* Skeleton for avatar */}
            </div>
            <div>
              <Skeleton className="h-4 w-32 mb-1" />{" "}
              {/* Skeleton for author name */}
              <Skeleton className="h-3 w-40" />{" "}
              {/* Skeleton for published date */}
            </div>
          </div>
        </CardContent>
        {/* CardFooter can also have skeletons if needed */}
      </Card>
    </div>
  );
};

export default loading;
