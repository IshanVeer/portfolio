import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const Theme = () => {
  return (
    <div className="items-center justify-between p-0 max-md:flex">
      <p className="text-dark400_light700 base-medium my-8 md:hidden">
        Switch Theme
      </p>
      <Button className="" variant="ghost">
        <Image src="/assets/icons/sun.svg" height={20} width={20} alt="light" />
      </Button>
    </div>
  );
};

export default Theme;
