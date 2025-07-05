"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import Navigation from "@/components/general/Navigation";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <nav className="bg-white shadow rounded-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"} className="text-2xl font-bold text-gray-800">
              Pretty<span className="text-primary">Blog</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Navigation />
          {/* Desktop Auth Buttons */}
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center gap-4">
                <span>Hello, {user.given_name}</span>
                <LogoutLink className={buttonVariants({ variant: "default" })}>
                  Logout
                </LogoutLink>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-4">
                <LoginLink className={buttonVariants({ variant: "outline" })}>
                  Login
                </LoginLink>
                <RegisterLink className={buttonVariants()}>
                  Sign up
                </RegisterLink>
              </div>
            )}
          </div>

          {/* --- Render the Client Component for Mobile --- */}
          <MobileMenu isAuth={!!user} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
