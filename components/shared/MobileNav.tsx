import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import Theme from "./Theme";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <nav className="mx-12 my-6 flex justify-between md:hidden">
      <Link href="/">
        <h1 className="h2-bold">Ishan Veer</h1>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/hamburger.svg"
            height={40}
            width={40}
            alt="menu"
            className="invert-colors"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/">
            <h1 className="h2-bold border-b-2 py-4">Ishan Veer</h1>
          </Link>
          <ul className="base-medium text-dark400_light700 flex flex-col justify-between gap-8 border-b-2 py-8">
            {navLinks.map((link) => (
              <li
                className=" transition duration-75 hover:text-gray-600"
                key={link.label}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Theme />
          <a href="/assets/files/Ishan Veer Resume.pdf" download="Ishan-resume">
            <Button className="paragraph-regular w-full rounded-lg ">
              Download CV
            </Button>
          </a>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
