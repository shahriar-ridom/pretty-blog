"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";

const MobileMenu = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // This container is now the single flex item for mobile view
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={`absolute top-18 rounded-xl left-0 w-full bg-white shadow-lg border border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="p-4 space-y-2">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <div className="pt-4 pb-2 border-t border-gray-200">
            {isAuth ? (
              <div className="flex items-center flex-col gap-4">
                <span>Welcome back</span>
                <LogoutLink
                  className={buttonVariants({ variant: "default" }) + "w-full"}
                >
                  Logout
                </LogoutLink>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <LoginLink
                  className={
                    buttonVariants({ variant: "ghost" }) +
                    "justify-start w-full bg-white hover:bg-blue-50 shadow-none cursor-pointer font-semibold text-base hover:text-blue-600 text-black px-3 py-2"
                  }
                >
                  Login
                </LoginLink>
                <RegisterLink
                  className={
                    buttonVariants({ variant: "default" }) +
                    "bg-blue-600 hover:bg-blue-700 cursor-pointer text-base text-white w-full"
                  }
                >
                  Sign up
                </RegisterLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
