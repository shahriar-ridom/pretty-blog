import FeaturedSkeleton from "@/components/general/FeaturedSkeleton";
import PostCardSkeleton from "@/components/general/PostCardSkeleton"; // Adjust the import path if needed
import { Badge } from "@/components/ui/badge";

const Loading = () => {
  return (
    <>
      <div className={"flex items-center justify-center"}>
        <Badge variant="secondary" className={"my-5 text-lg"}>
          Featured Post
        </Badge>
      </div>
      <FeaturedSkeleton />
      <div className={"w-full flex items-center justify-center"}>
        <Badge variant="secondary" className={"my-7 text-lg"}>
          Recent Posts
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Create a placeholder array to render multiple skeletons */}
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
};

export default Loading;
