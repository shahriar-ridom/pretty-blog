import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PostCardSkeleton = () => {
  return (
    <Card className={"shadow transition duration-300"}>
      <CardContent className="space-y-4 p-4">
        {" "}
        {/* Consistent padding */}
        <CardTitle>
          <Skeleton className="h-6 w-3/4 rounded-md" />
        </CardTitle>
        <CardDescription className={"py-4 space-y-4"}>
          <div className={"rounded-lg w-full h-44 overflow-hidden"}>
            <Skeleton className="w-full h-full rounded-md" />
          </div>
          <div className={"pt-4 space-y-2"}>
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-[90%] rounded-md" />
          </div>
        </CardDescription>
        <div className="text-gray-500 flex items-center justify-between text-[0.7rem]">
          <div className={"flex items-center gap-3 justify-center"}>
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>
          <div className={"flex items-center gap-3 justify-center"}>
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>
        </div>
        <div className={"py-4 flex items-center justify-between"}>
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
};

export default PostCardSkeleton;
