import { Badge } from "@/components/ui/badge";
import PostCardSkeleton from "../../../components/general/PostCardSkeleton"; // Adjust the import path if needed

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <Badge variant="secondary" className="md:text-2xl text-lg font-bold">
          Your Blog Posts
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Create a placeholder array to render multiple skeletons */}
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
