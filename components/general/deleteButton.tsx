"use client";
import React from "react";
import { Button } from "../ui/button";
import { deletePost } from "@/app/action";
import { Trash } from "lucide-react";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <Button variant={"destructive"} onClick={() => deletePost(id)}>
      <Trash />
    </Button>
  );
};

export default DeleteButton;
