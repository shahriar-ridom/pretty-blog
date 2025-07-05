"use client";
import createPost from "@/app/action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "../../../components/general/submitButton";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const page = () => {
  const [postDescription, setPostDescription] = useState("");
  return (
    <Card className="max-w-3xl drop-shadow-sm mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>
          This is the page where you can create a new post. Fill in the details
          below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createPost} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>{" "}
            {/* Added htmlFor for accessibility */}
            <Input
              required
              autoFocus
              name="title"
              type="text"
              id="title" // Added id for accessibility
              className="border-gray-400"
              placeholder="Enter post title"
            />
          </div>
          <div data-color-mode="light" className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <MDEditor
              preview="edit"
              height={400}
              value={postDescription}
              onChange={(value) => setPostDescription(value as string)}
              style={{
                borderRadius: "14px",
                border: "1px solid #d1d5db", // Tailwind gray-400
                overflow: "hidden",
              }}
              textareaProps={{
                placeholder: "Briefly describe your post here...",
                id: "description", // Added id for accessibility
                name: "description",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="imageUrl">Image Url</Label> {/* Added htmlFor */}
            <Input
              required
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              name="imageUrl"
              type="url"
              id="imageUrl" // Added id
              className="border-gray-400"
              placeholder="Enter post image URL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Category</Label> {/* Added htmlFor */}
            <Input
              required
              name="category"
              type="text"
              id="category" // Added id
              className="border-gray-400"
              placeholder="Enter post category"
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
};

export default page;
