import { Badge } from "@/components/ui/badge";
import UserDetail from "../../../components/general/userDetail";
import { prisma } from "../../utils/prisma";
import PostCard from "@/components/general/postCard";
import { Suspense } from "react";
import Loading from "./loading";
// No need to import Suspense or the skeleton component here

const getData = async (userId: string) => {
  return await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const posts = await getData(id);
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <Badge variant="secondary" className="md:text-2xl text-lg font-bold">
          {posts.length > 0
            ? `${posts.map((post) => post.authorName)[0]}'s Blog Posts`
            : "No Blog Posts Found."}
        </Badge>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
