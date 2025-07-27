"use client";
import Image from "next/image";
import React from "react";

import { useTheme } from "@/context/ThemeProvider";

import { Button } from "../ui/button";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <div className="items-center justify-between p-0 max-md:flex">
      <p className="text-dark400_light700 base-medium my-8 md:hidden">
        Switch Theme
      </p>
      {mode === "light" ? (
        <Button
          className=""
          variant="ghost"
          onClick={() => {
            setMode("dark");
          }}
        >
          <Image
            src="/assets/icons/sun.svg"
            height={20}
            width={20}
            alt="light"
          />
        </Button>
      ) : (
        <Button
          className=""
          variant="ghost"
          onClick={() => {
            setMode("light");
          }}
        >
          <Image
            src="/assets/icons/moon.svg"
            height={20}
            width={20}
            alt="dark"
            className="white-theme"
          />
        </Button>
      )}
    </div>
  );
};

export default Theme;
