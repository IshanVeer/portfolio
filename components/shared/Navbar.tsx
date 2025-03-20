import Link from "next/link";
import React from "react";

import { navLinks } from "@/constants";

import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link href="/">
        <h1>Ishan</h1>
      </Link>
      {/* links and theme */}
      <div className="flex">
        {/* links */}
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* theme */}
        {/* CV button */}
        <a href="/assets/files/Ishan Veer Resume.pdf" download="Ishan-resume">
          <Button>Download CV</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
