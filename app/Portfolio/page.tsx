import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";

export default function Portfolio() {
  return (
    <section id="PortfolioSection" className="w-full h-full py-28 flex flex-col justify-center items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
      <h1 className="smbil:text-3xl text-white pb-28 font-headingFont mmbil:text-4xl laptop:text-6xl font-extrabold">My Previous Projects</h1>
      <div className="grid smbil:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-5">
        <PortfolioCard
          imageSrc="/portfolio/apple.png"
          title="Apple"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/metaversus.png"
          title="Metaversus"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/piaic.png"
          title="PIAIC"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/pricingUI.png"
          title="Pricing Landing Page"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/spotify.png"
          title="Spotify"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/portfolio/panaverse.png"
          title="Panaverse"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/coming-soon.jpg"
          title="My Project"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/coming-soon.jpg"
          title="My Project"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
        <PortfolioCard
          imageSrc="/coming-soon.jpg"
          title="My Project"
          ButtonComponent1={
            <Button href="https://www.youtube.com/">View Project</Button>
          }
          ButtonComponent2={
            <Button href="https://www.youtube.com/">View Code</Button>
          }
        />
      </div>
    </section>
  );
}
