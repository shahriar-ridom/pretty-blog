import { prisma } from "@/app/utils/prisma";
import { EyeIcon } from "lucide-react";
import { after } from "next/server";
import React from "react";

const View = async ({ id }: { id: string }) => {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
    select: {
      views: true,
    },
  });
  after(async () => {
    if (post) {
      await prisma.blogPost.update({
        where: { id: id },
        data: { views: (post.views || 0) + 1 },
      });
    }
  });
  return (
    <div className="fixed bottom-6 right-5 md:right-20 z-50">
      <div className="bg-primary ml-8 dark:bg-gray-800 px-2 py-1 rounded-3xl shadow-xl">
        <p className="flex items-center justify-between gap-1 text-white">
          <EyeIcon />
          {post?.views || 0}
        </p>
      </div>
      <div className="p-1 w-0.5 animate-ping duration-400 right-1 bottom-6 absolute z-100 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default View;
