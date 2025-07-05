"use server";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calendar, Eye, User } from "lucide-react";
import Image from "next/image";
import { prisma } from "@/app/utils/prisma";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const getFeaturedPost = async () => {
  try {
    return await prisma.blogPost.findFirst({
      orderBy: {
        views: "desc", // Assuming the most viewed post is featured
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
  } catch (error) {
    console.error("Error fetching featured post:", error);
    return null;
  }
};

export default async function FeaturedPostSection() {
  const post = await getFeaturedPost();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const formattedDate = new Date(post?.createdAt ?? "").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short", // e.g., "Oct"
      day: "numeric",
    }
  );
  return (
    <section className="w-full max-w-8xl mx-auto">
      <div className={"flex items-center justify-center"}>
        <Badge variant="secondary" className={"my-5 text-lg"}>
          Featured Post
        </Badge>
      </div>
      <Card className="overflow-hidden shadow transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
            {/* Left side - Content */}
            <div className="px-5 pb-4 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className={"flex items-center justify-between"}>
                  <Badge variant="secondary" className="w-fit">
                    {post?.category}
                  </Badge>
                  <Badge variant="default" className="w-fit rounded-full">
                    <Eye className="w-6 h-6" />
                    {post?.views}
                  </Badge>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {post?.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-lg">
                  {post?.description}...
                </p>
              </div>

              <div className="flex items-center justify-start gap-8 text-[0.7rem] md:text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
                <Link
                  href={
                    user?.id === post?.authorId
                      ? `/dashboard`
                      : `/author/${post?.authorId}`
                  }
                  className="flex items-center hover:text-primary transition-colors duration-300 space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span> {post?.authorName}</span>
                </Link>
              </div>

              <div className="pt-4">
                <Link
                  href={`/post/${post?.id}`}
                  className={buttonVariants({ variant: "default" })}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative rounded-xl overflow-hidden group mx-4 bg-gradient-to-br from-blue-50 to-indigo-100">
              <Image
                width={"1470"}
                height={"980"}
                src={post?.imageUrl ?? "https://via.placeholder.com/1470x980"}
                alt={post?.title ?? "Featured Post Image"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
