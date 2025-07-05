import { prisma } from "@/app/utils/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import markdownit from "markdown-it";
import View from "../../../components/general/view";

const md = markdownit();

const getData = async (id: string) => {
  return await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getData(id);
  if (!post) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center">Post Not Found</h1>
      </div>
    );
  }
  const parsedPost = md.render(post.description);
  const formattedDate = new Date(post?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // e.g., "Oct"
    day: "numeric",
  });
  return (
    <div className="container mx-auto py-4 md:py-8">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          {post.imageUrl && (
            <div className="mb-4">
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto object-cover rounded-md"
                style={{ maxHeight: "400px" }} // Example max height for the image
                width={800} // Specify a width for the image
                height={400} // Specify a height for the image
                priority
              />
            </div>
          )}
          <CardTitle className="text-xl md:text-4xl font-bold mb-2">
            {post.title}
          </CardTitle>
          <CardDescription className="text-xs md:tex-sm text-gray-500">
            Category:{" "}
            <span className="font-medium text-gray-700">{post.category}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="md:p-4">
            {parsedPost ? (
              <article
                dangerouslySetInnerHTML={{ __html: parsedPost }}
                className="text-base md:text-lg max-w-4xl prose wrap-break-word leading-relaxed mb-6"
              />
            ) : (
              <span className="text-gray-500">No content available</span>
            )}
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <User />
            <div>
              <p className="text-sm font-semibold">{post.authorName}</p>
              <p className="text-xs text-gray-500">
                Published on {formattedDate}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end text-sm text-gray-500">
          {/* Any additional footer content, like tags or share buttons */}
        </CardFooter>
      </Card>
      <View id={post.id} />
    </div>
  );
};

export default page;
