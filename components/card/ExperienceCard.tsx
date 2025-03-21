import React from "react";

interface Props {
  index: number;
  company: string;
  logo: string;
  title: string;
  duration: string;
  description: string;
}
interface ExperienceProps {
  experience: Props;
}

const ExperienceCard = ({ experience }: ExperienceProps) => {
  return (
    <div className="light-border flex w-full items-center justify-between gap-4 rounded-md border px-4 py-6 shadow-md max-md:flex-col">
      <div className="flex w-full flex-col items-center">
        <h2 className="h2-bold">{experience.company}</h2>
      </div>
      <div className="flex w-full flex-col">
        <h2 className="h3-bold mb-3">{experience.title}</h2>
        <p className="paragraph-regular"> {experience.description}</p>
      </div>
      <div className="w-full">{experience.duration}</div>
    </div>
  );
};

export default ExperienceCard;
