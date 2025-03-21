import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex w-full flex-col gap-8   items-center shadow-md rounded-md border light-border background-light900_dark300 ">
      <div className="w-full">
        <Image
          src={project.image}
          height={200}
          width={200}
          alt={project.title}
          className="w-full "
        />
      </div>

      <div className="flex gap-2 p-3  items-center flex-col ">
        <h2 className="h3-semibold">{project.title}</h2>
        <p className="paragraph-regular mb-3">{project.description}</p>
        <div>
          {project.tags.map((tag) => (
            <Badge className="py-1 px-2 m-1" variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex my-3 items-center gap-4">
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
