import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const Theme = () => {
  return (
    <div className="p-0">
      <Button className="" variant="ghost">
        <Image src="/assets/icons/sun.svg" height={20} width={20} alt="light" />
      </Button>
    </div>
  );
};

export default Theme;
