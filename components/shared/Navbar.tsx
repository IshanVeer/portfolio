import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants";

import Theme from "./Theme";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="mx-24 my-6 flex items-center justify-between">
      <Link href="/">
        <h1 className="h1-bold">Ishan</h1>
      </Link>
      {/* links and theme */}
      <div className="flex items-center justify-between gap-10">
        {/* links */}
        <ul className="base-medium flex items-center justify-between gap-6">
          {navLinks.map((link) => (
            <li
              className="transition duration-75 hover:text-gray-600"
              key={link.label}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* theme */}
        <div className="flex items-center gap-4">
          <Theme />
          {/* CV button */}
          <a href="/assets/files/Ishan Veer Resume.pdf" download="Ishan-resume">
            <Button className="paragraph-regular rounded-lg">
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
