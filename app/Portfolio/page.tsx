import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";

export default function Portfolio() {
  return (
    <section
      id="PortfolioSection"
      className="w-full h-full py-28 flex flex-col justify-center items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]"
    >
      <h1 className="smbil:text-3xl text-white pb-28 font-headingFont mmbil:text-4xl laptop:text-6xl font-extrabold">
        My Previous Projects
      </h1>
      <div className="grid smbil:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-5">
        <PortfolioCard
          imageSrc="/portfolio/Redesigner.png"
          title="ReDesigner"
          ButtonComponent1={
            <Button href="https://redesginer.vercel.app/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/ReDesginer-Next.js-Replicate-AI">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/movix.png"
          title="Movix"
          ButtonComponent1={
            <Button href="https://movix-two-opal.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Movix-React">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/genius.png"
          title="Genius"
          ButtonComponent1={
            <Button href="https://genius-rho.vercel.app/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Generative-AI-SAAS-Platform">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/metaversus.png"
          title="Metaversus"
          ButtonComponent1={
            <Button href="https://metaversus-next-js.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Metaversus-Next.Js-TailwindCSS-FramerMotion">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/piaic.png"
          title="PIAIC"
          ButtonComponent1={
            <Button href="https://piaic-next-js-tailwind-css.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/PIAIC-Next.js-Tailwind-CSS">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/pricingUI.png"
          title="Pricing Landing Page"
          ButtonComponent1={
            <Button href="https://pricing-ui-next-js-chakra-ui.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Pricing-UI-Next.js-ChakraUI">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/spotify.png"
          title="Spotify"
          ButtonComponent1={
            <Button href="https://spotify-next-js-fawn.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Spotify-Next.Js-TailwindCSS">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/panaverse.png"
          title="Panaverse"
          ButtonComponent1={
            <Button href="https://panaverse-dao-next-js-tailwind-css.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Panaverse-DAO-Next.js-Tailwind-CSS">
              View Code
            </Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/apple.png"
          title="Apple"
          ButtonComponent1={
            <Button href="https://apple-next-js-tailwind-css.vercel.app/">
              View Project
            </Button>
          }
          ButtonComponent2={
            <Button href="https://github.com/HHuzaifa/Apple-Next.Js-TailwindCSS">
              View Code
            </Button>
          }
        />
      </div>
    </section>
  );
}
