import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";
interface Props {
  index: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}
interface QuestionProps {
  project: Props;
}

const WorkCard = ({ project }: QuestionProps) => {
  return (
    <div className="light-border background-light900_dark300 flex w-full   flex-col items-center gap-8 rounded-md border shadow-md ">
      <div className="w-full">
        <Image
          src={project.image}
          height={200}
          width={200}
          alt={project.title}
          className="w-full "
        />
      </div>

      <div className="flex flex-col items-center  gap-2 p-3 ">
        <h2 className="h3-semibold">{project.title}</h2>
        <p className="paragraph-regular mb-3">{project.description}</p>
        <div>
          {project.tags.map((tag) => (
            <Badge className="m-1 px-2 py-1" variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="my-3 flex items-center gap-4">
          <Link href={project.link}>
            <Image
              src="/assets/icons/link.svg"
              width={20}
              height={20}
              alt="live-link"
              className="dark:invert"
            />
          </Link>
          <Link href={project.github}>
            <Image
              src="/assets/icons/github.svg"
              width={20}
              height={20}
              alt="github-link"
              className="dark:invert"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
