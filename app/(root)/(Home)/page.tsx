import Image from "next/image";
import Link from "next/link";

import MobileNav from "@/components/shared/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { socialLinks } from "@/constants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MobileNav />
      {/* Hero section */}
      <section className="background-light900_dark200 flex items-center justify-between px-24 py-6  ">
        <div className="flex w-2/3 flex-col">
          <div className="flex items-start gap-4">
            <h1 className="text-dark400_light700 my-6 text-5xl font-bold">
              Hi,I&apos;m Ishan
            </h1>
            <Image
              src="/assets/icons/waving-hand-emoji.svg"
              height={80}
              width={80}
              alt="hi"
              className=""
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
        <div className="w-1/4 rounded-full shadow-sm">
          <Image
            src="/assets/images/hero-image.jpeg"
            height={160}
            width={160}
            alt="hero-image"
            className="w-full  rounded-sm object-cover"
          />
        </div>
      </section>
    </div>
  );
}
