import React from "react";
import { Card } from "../ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

const UserDetail = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { given_name, family_name, email, picture } = user || {};
  return (
    <div className="flex items-center justify-center">
      <Card className="mt-8 w-[44rem] drop-shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:gap-10 justify-center md:justify-around p-8">
          <div className="left">
            <div className="overflow-hidden rounded-full">
              <Image
                src={picture || ""}
                alt={`${given_name} ${family_name}`}
                width={200}
                height={200}
                className="object-cover hover:scale-105 w-28 h-28 md:w-48 md:h-48 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="right flex flex-col items-center md:items-start mt-4 md:mt-0">
            <span className="md:text-2xl font-bold text-gray-800">
              {given_name} {family_name}
            </span>
            <p className="text-gray-600 text-xs mt-2">{email}</p>
          </div>
        </div>
        <div className="px-8 flex md:flex-row flex-col justify-center  gap-5 md:gap-0 items-center">
          <Link
            href="/dashboard/create"
            className={buttonVariants({ variant: "default" }) + "flex"}
          >
            <Plus className="font-bold" />
            <span className="ml-2 font-bold">New Post</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default UserDetail;
