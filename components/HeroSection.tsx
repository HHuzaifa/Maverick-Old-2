import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className=" w-full h-full py-28 flex flex-col tab:flex-row-reverse smbil:justify-center smbil:items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px] ">
      <div className="">
        <Image
          src={"/Full-Stack-Developer-and-Machine-Learning-Engineer.png"}
          loading="lazy"
          width={800}
          height={700}
          alt="Hero Image"
        />
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-white text-2xl font-semibold pb-8 font-headingFont">
          Hi there!
        </h1>
        <h2 className="text-white text-4xl  font-extrabold font-headingFont   ">
          I'm a Full Stack | Jamstack Web App Developer
        </h2>
        <h2 className="text-white text-2xl font-extrabold py-2 font-headingFont">
          &
        </h2>
        <h2 className="text-white text-4xl pb-5 font-extrabold font-headingFont   ">
          a Data Science Wizard
        </h2>
        <div className="flex justify-around">
          <Button href="https://www.youtube.com/">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
