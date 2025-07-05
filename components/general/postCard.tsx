import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, Clock, Eye, User } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { deletePost } from "@/app/action";
import { headers } from "next/headers";
import DeleteButton from "./deleteButton";

const PostCard = async (post: {
  id: string;
  title: string;
  description: string;
  createdAt: Date; // Changed from 'object' to 'Date' for better type accuracy
  authorName: string;
  authorId: string; // Author id is needed to check if the user is the author or not to redirect him to either dashboard or author page
  category: string | null; // Category can be null if not provided
  imageUrl: string;
  views: number;
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const {
    id,
    title,
    description,
    createdAt, // This is a Date object
    authorName,
    authorId,
    category,
    imageUrl,
    views,
  } = post;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // e.g., "Oct"
    day: "numeric",
  });
  const headersList = headers();
  const pathname = (await headersList).get("x-current-path") || "/";
  return (
    <Card
      className={
        "hover:shadow-lg shadow transition hover:scale-105 cursor-pointer duration-300"
      }
    >
      <CardContent>
        <CardTitle>
          <Link href={`/post/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription className={"py-4"}>
          <div className={"rounded-lg w-full h-44 overflow-hidden"}>
            <Link href={`/post/${id}`}>
              <Image
                src={imageUrl}
                alt={"image"}
                width={"400"}
                height={"300"}
                className={
                  "hover:scale-105 object-cover w-full h-full transition-transform duration-300"
                }
              />
            </Link>
          </div>
          <Link href={`/post/${id}`} className={"pt-4"}>
            <p className={"text-gray-600 line-clamp-2"}>{description}...</p>
          </Link>
        </CardDescription>
        <div
          className={
            "text-gray-500 flex items-center justify-between text-[0.7rem]"
          }
        >
          <div className={"flex items-center gap-3 justify-center"}>
            <Clock className={"w-4 h-4"} />
            <span>{formattedDate}</span> {/* Use the formatted string here */}
          </div>
          <Link
            href={user?.id === authorId ? `/dashboard` : `/author/${authorId}`}
            className={
              "flex items-center gap-3 justify-center hover:text-primary transition-colors duration-300"
            }
          >
            <User className={"w-4 h-4"} />
            <span>{authorName}</span>
          </Link>
        </div>
        <div className={"py-4 flex items-center justify-between"}>
          <Badge variant={"secondary"}>{category}</Badge>
          <Badge className={"rounded-full"}>
            <Eye />
            {views}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={`/post/${id}`}
            className={buttonVariants({ variant: "default" }) + "w-full"}
          >
            Read More <ArrowRight className="ml-2 w-4 h-4" />{" "}
            {/* Added ml-2 for spacing */}
          </Link>
          {user?.id === authorId && pathname === "/dashboard" && (
            <DeleteButton id={id} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default PostCard;
