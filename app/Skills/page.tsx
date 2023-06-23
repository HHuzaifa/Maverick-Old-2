import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="SkillsSection"
      className="w-full h-full py-28 flex flex-col items-center justify-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]"
    >
      <div className="flex flex-col text-center pb-28 text-white">
        <h1 className="smbil:text-3xl font-headingFont mmbil:text-4xl laptop:text-6xl font-extrabold">
          My Tech Arsenal
        </h1>
        <h2 className="smbil:text-lg laptop:text-2xl pt-3 font-headingFont">
          AI, Web Apps, and Beyond
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="font-paraFont text-base text-gray-200 text-justify pb-14">
          With proficiency in a diverse range of programming languages, web
          frameworks, databases, and headless CMSs, I am equipped to conquer
          technological frontiers. Leveraging version control, I ensure seamless
          collaboration and efficient code management. My expertise extends to
          data cleaning, wrangling, and visualization, enabling insights that
          drive innovation. Additionally, I possess a deep understanding of
          ecommerce backend systems, amplifying your online business
          capabilities. Together, let's embark on a journey of technological
          exploration and surpass boundaries in the ever-evolving digital
          landscape.
        </p>

        <div className="border-4 border-[#CCCCCC] p-8 tab:p-10 laptop:px-20 laptop:py-16 bg-gradient-to-br from-[#130428] via-[#38126D] to-[#261045] rounded-xl">
          <div className="grid smbil:grid-cols-5 tab:grid-cols-8 smbil:gap-5 tab:gap-7 laptop:gap-10 max-w-7xl">
            <Image
              src={"/skills/nextJs.png"}
              width={200}
              height={200}
              alt="nextJs icon"
            />
            <Image
              src={"/skills/react.png"}
              width={200}
              height={200}
              alt="react icon"
            />
            <Image
              src={"/skills/astro.png"}
              width={200}
              height={200}
              alt="astro icon"
            />
            <Image
              src={"/skills/gatsby.png"}
              width={200}
              height={200}
              alt="gatsby icon"
            />
            <Image
              src={"/skills/shopify.png"}
              width={200}
              height={200}
              alt="shopify icon"
            />
            <Image
              src={"/skills/typescript.png"}
              width={200}
              height={200}
              alt="typescript icon"
            />
            <Image
              src={"/skills/javascript.png"}
              width={200}
              height={200}
              alt="javascript icon"
            />
            <Image
              src={"/skills/python.png"}
              width={200}
              height={200}
              alt="python icon"
            />
            <Image
              src={"/skills/graphql.png"}
              width={200}
              height={200}
              alt="graphql icon"
            />
            <Image
              src={"/skills/tensorflow.png"}
              width={200}
              height={200}
              alt="tensorflow icon"
            />
            <Image
              src={"/skills/pandas.png"}
              width={200}
              height={200}
              alt="pandas icon"
            />
            <Image
              src={"/skills/numpy.png"}
              width={200}
              height={200}
              alt="numpy icon"
            />
            <Image
              src={"/skills/gitt.png"}
              width={200}
              height={200}
              alt="gitt icon"
            />
            <Image
              src={"/skills/github.png"}
              width={200}
              height={200}
              alt="github icon"
            />
            <Image
              src={"/skills/mongodb.png"}
              width={200}
              height={200}
              alt="mongodb icon"
            />
            <Image
              src={"/skills/postgresql.png"}
              width={200}
              height={200}
              alt="postgresql icon"
            />
            <Image
              src={"/skills/prissma.png"}
              width={200}
              height={200}
              alt="prissma icon"
            />
            <Image
              src={"/skills/supabase.png"}
              width={200}
              height={200}
              alt="supabase icon"
            />
            <Image
              src={"/skills/strapii.png"}
              width={200}
              height={200}
              alt="strapi icon"
            />
            <Image
              src={"/skills/sanity.png"}
              width={200}
              height={200}
              alt="sanity icon"
            />
            <Image
              src={"/skills/contentful.png"}
              width={200}
              height={200}
              alt="contentful icon"
            />
            <Image
              src={"/skills/matplotlibb.png"}
              width={200}
              height={200}
              alt="matplotlibb icon"
            />
            <Image
              src={"/skills/seaborn.png"}
              width={200}
              height={200}
              alt="seaborn icon"
            />
            <Image
              src={"/skills/figma.png"}
              width={200}
              height={200}
              alt="figma icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
