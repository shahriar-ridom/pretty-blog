"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const category = formData.get("category") as string;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  await prisma.blogPost.create({
    data: {
      title,
      description,
      imageUrl,
      category,
      authorId: user?.id as string,
      authorName: user?.given_name as string + " " + user?.family_name as string,
      authorImageUrl: user?.picture as string,
    },
  })
  revalidatePath("/");
  redirect("/dashboard");
}

export async function deletePost(postId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  const post = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
  });

  if (post?.authorId !== user.id) {
    redirect("/api/auth/login");
  }

  await prisma.blogPost.delete({
    where: {
      id: postId,
    },
  });

  redirect("/dashboard");
}
