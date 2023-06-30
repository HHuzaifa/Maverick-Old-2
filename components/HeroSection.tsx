"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function HeroSection() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="w-full h-full py-28 flex flex-col tab:flex-row-reverse smbil:justify-center smbil:items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px] lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
      <div className="transform translate-x-[-100%] smbil:translate-x-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/Full-Stack-Developer-and-Machine-Learning-Engineer.png"}
            loading="lazy"
            width={800}
            height={700}
            alt="Hero Image"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-2xl font-semibold pb-8 font-headingFont"
        >
          Hi there!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-4xl font-extrabold font-headingFont"
        >
          I'm a Full Stack | Jamstack Web App Developer
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white text-2xl font-extrabold py-2 font-headingFont"
        >
          &
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-white text-4xl pb-5 font-extrabold font-headingFont"
        >
          a Data Science Wizard
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex justify-around"
        >
          <Button href="https://www.linkedin.com/in/huzaifa-hk/">Contact Me</Button>
        </motion.div>
      </div>
    </section>
  );
}
