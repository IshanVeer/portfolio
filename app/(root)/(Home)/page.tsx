import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import ExperienceCard from "@/components/card/ExperienceCard";
import WorkCard from "@/components/card/WorkCard";
import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import {
  socialLinks,
  techSkills,
  workExperience,
  workProjects,
} from "@/constants";

const ModelViewer = dynamic(() => import("@/components/shared/ModelViewer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <MobileNav />
      {/* Hero section */}
      <section className="background-light900_dark100 px-24 py-12 max-md:px-12 max-md:py-6  ">
        <div className="flex flex-col items-start md:w-2/3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-dark400_light700 my-6 text-5xl font-bold max-md:text-2xl">
                Hi,I&apos;m Ishan
              </h1>
              <h3 className="text-dark400_light700 my-6 text-2xl font-bold max-md:text-xl">
                I build User interfaces and web applications
              </h3>
            </div>

            <Image
              src="/assets/icons/waving-hand-emoji.svg"
              height={80}
              width={80}
              alt="hi"
              className="max-md:my-4 max-md:size-14"
            />
          </div>
          <div>
            <ModelViewer
              src="/assets/models/my-scene/scene.gltf"
              alt="3D model"
              camera-controls
              rotation-per-second="10deg"
              min-camera-orbit="auto 90deg auto"
              max-camera-orbit="auto 90deg auto"
              camera-orbit="0deg 90deg 2m"
              disable-zoom
              className="mx-auto block aspect-[2/1] h-auto w-[900px] max-md:w-[600px]"
            />
          </div>

          <p className="text-dark400_light700 paragraph-regular ">
            I&apos;m a Front-End Developer with a couple of years of experience,
            specializing in React.js, Next.js, Express.js, Tailwind CSS, and
            Firebase integration. I&apos;ve built and enhanced dozens of
            successful applications across social networking, entertainment, and
            e-commerce. I excel at handling multiple tasks efficiently and
            consistently meet deadlines with precision.
          </p>
          <div className="text-dark400_light700 paragraph-regular my-10 flex items-center gap-2">
            <Image
              src="/assets/icons/location.svg"
              height={20}
              width={20}
              alt="location"
              className="dark:invert"
            />
            <p>Mumbai, India</p>
          </div>
          <ul className=" flex items-center gap-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.route}>
                  <Image
                    src={link.image}
                    height={25}
                    width={25}
                    alt={link.label}
                    className="dark:invert"
                  />{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Skills Section */}
      <section className="background-light800_dark200 px-24 py-12 text-center max-md:px-12 max-md:py-6">
        <Badge
          variant="outline"
          className="background-light700_dark400 base-medium mt-6"
        >
          Skills
        </Badge>
        <p className="base-medium text-dark300_light700 my-6">
          The skills, tools and technologies I am really good at:
        </p>
        <ul className="mt-14 grid grid-cols-5 gap-y-16 max-md:grid-cols-3 max-md:gap-x-12">
          {techSkills.map((skill) => (
            <li key={skill.label} className="flex flex-col items-center gap-4">
              <Image
                src={skill.image}
                height={40}
                width={40}
                alt={skill.label}
              />
              <p>{skill.label}</p>
            </li>
          ))}
        </ul>
      </section>
      {/* Experience Section */}
      <section
        id="about"
        className="background-light900_dark100 px-24 py-12 text-center max-md:px-12 max-md:py-6"
      >
        <Badge
          variant="outline"
          className="background-light700_dark400 base-medium mt-6"
        >
          Experience
        </Badge>
        <p className="base-medium text-dark300_light700 my-6">
          Here is a quick summary of my most recent experiences:{" "}
        </p>
        <div className="flex flex-col gap-5">
          {workExperience.map((experience) => (
            <ExperienceCard key={experience.index} experience={experience} />
          ))}
        </div>
      </section>
      {/* Work Section */}
      <section
        id="work"
        className="background-light800_dark200 px-24 py-16 text-center max-md:px-12 max-md:py-6"
      >
        <Badge
          variant="outline"
          className="background-light700_dark400 base-medium mt-6"
        >
          Work
        </Badge>
        <p className="base-medium text-dark300_light700 my-6">
          Some of the noteworthy projects I have built:{" "}
        </p>
        <div className="grid grid-cols-3 gap-5 max-md:flex max-md:flex-col">
          {workProjects.map((project) => (
            <WorkCard key={project.index} project={project} />
          ))}
        </div>
      </section>
      {/* contact section */}
      <section
        id="contact"
        className="background-light900_dark100 px-24 py-12 text-center max-md:px-12 max-md:py-6"
      >
        <Badge
          variant="outline"
          className="background-light700_dark400 base-medium mt-6"
        >
          Get In Touch
        </Badge>

        <p className="base-medium text-dark300_light700 mx-auto my-6 w-1/2 max-md:w-full">
          What&apos;s next? Feel free to reach out to me if you&apos;re looking
          for a developer, have a query, or simply want to connect.
        </p>
        {/* email */}
        <div className="my-4 flex justify-center gap-4">
          <Image
            src="/assets/icons/mail.svg"
            width={20}
            height={20}
            alt="mail"
          />
          <h3 className="h2-bold">ishanveerwork@gmail.com</h3>
        </div>
        {/* call */}
        <div className="flex justify-center gap-4">
          <Image
            src="/assets/icons/phone.svg"
            width={20}
            height={20}
            alt="phone"
          />
          <h3 className="h2-bold">+91 9152491730</h3>
        </div>
        <p className="paragraph-regular text-dark500_light700 mb-3 mt-12">
          You may also find me on these platforms!
        </p>
        <ul className=" flex items-center justify-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.route}>
                <Image
                  src={link.image}
                  height={20}
                  width={20}
                  alt={link.label}
                  className="dark:invert"
                />{" "}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
