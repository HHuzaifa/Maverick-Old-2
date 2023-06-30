"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

export default function About() {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="AboutSection" className="w-full h-full justify-center items-center flex flex-col">
      <HeroSection />

      <div className="flex pt-28 smbil:flex-col tab:flex-row  smbil:justify-center smbil:items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1 }}
        >
          <div>
            <Image
              src={"/Full Stack Developer Github.png"}
              loading="lazy"
              width={1400}
              height={1300}
              alt="About Image"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1 }}
          className="text-white tab:ml-10 laptop:ml-16 smbil:text-justify tab:text-justify smbil:py-10"
        >
          <h1 className="pb-5 text-3xl font-bold font-headingFont">Welcome!</h1>
          <p className="font-paraFont text-base text-gray-200">
            As a Full Stack | Jamstack Web App Developer, I have 2.5 years of
            Experience in crafting dynamic and interactive websites using modern
            technologies. With expertise in React, Next.js, Astro, and Gatsby
            with a user-centric approach.
          </p>
          <p className="font-paraFont text-base py-8 text-gray-200">
            Alongside web development, I'm also venturing into the fascinating
            world of AI | Machine Learning Engineering with top-notch frameworks
            and libraries.
          </p>
          <p className="font-paraFont text-base text-gray-200">
            In addition to my technical skills, I am pursuing a Bachelor's
            degree in Business and Information Technology. This blend of
            technical and business knowledge equips me to effectively understand
            and meet the diverse needs of clients and stakeholders. I am always
            ready to take on new challenges and deliver exceptional results.
          </p>
        </motion.div>
      </div>
      <p className="text-white text-2xl font-headingFont font-extrabold smbil:text-justify smbil:pb-16 laptop:pt-10 laptop:pb-24 smbil:flex-col tab:flex-row  smbil:justify-center smbil:items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
        Let's work together to create extraordinary web experiences that make a
        difference.
      </p>
    </section>
  );
}
