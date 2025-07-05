import { Badge } from "@/components/ui/badge";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserDetail from "../../components/general/userDetail";
import { prisma } from "../utils/prisma";
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

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const posts = await getData(user?.id || "");
  return (
    <div>
      <UserDetail />
      <div className="flex items-center justify-center my-8">
        <Badge variant="secondary" className="md:text-2xl text-lg font-bold">
          {posts.length > 0
            ? "Your Blog Posts"
            : "No Blog Posts Found. Try Creating One!"}
        </Badge>
      </div>
      <Suspense fallback={<Loading />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
};

const BlogPosts = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user?.id) {
    return <div>User not found or not authenticated.</div>;
  }
  const posts = await getData(user.id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Page;
