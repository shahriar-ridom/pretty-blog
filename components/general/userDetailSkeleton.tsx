import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const userDetailSkeleton = () => {
  return (
    <div className="flex items-center justify-center">
      <Card className="mt-8 w-[44rem] drop-shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:gap-10 justify-center md:justify-around p-8">
          <div className="left">
            <div className="overflow-hidden rounded-full">
              <Skeleton className="w-28 h-28 md:w-48 md:h-48" />
            </div>
          </div>
          <div className="right flex flex-col items-center md:items-start mt-4 md:mt-0">
            <Skeleton className="md:text-2xl font-bold text-gray-800 w-48 h-6" />
            <Skeleton className="text-gray-600 text-xs mt-2 w-32 h-4" />
          </div>
        </div>
        <div className="px-8 flex md:flex-row flex-col justify-center md:justify-between gap-5 md:gap-0 items-center">
          <Skeleton className="w-32 h-8" />
          <Skeleton className="w-32 h-8" />
        </div>
      </Card>
    </div>
  );
};

export default userDetailSkeleton;
