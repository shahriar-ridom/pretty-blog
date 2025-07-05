"use server";
import React from "react";
import PostCard from "@/components/general/postCard";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/app/utils/prisma";

const getData = async () => {
  return prisma.blogPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      views: true,
      createdAt: true,
      authorName: true,
      authorId: true,
      imageUrl: true,
    },
  });
};

const RecentPosts = async () => {
  const posts = await getData();
  return (
    <>
      <div className={"w-full flex items-center justify-center"}>
        <Badge variant="secondary" className={"my-7 text-lg"}>
          Recent Posts
        </Badge>
      </div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center"
        }
      >
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
export default RecentPosts;
