import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
      
      
      
      <h1 className="text-white">Services I Provide</h1>
      <div className="grid smbil:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-8">
        <ServiceCard
            icon={"/skills/astro.png"}
            title="Custom Website"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
        <ServiceCard
            icon={"/skills/astro.png"}
            title="E-commerce Web App"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
        <ServiceCard
            icon={"/skills/astro.png"}
            title="Frontend Development"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
        
        <ServiceCard
            icon={"/skills/astro.png"}
            title="Data Scraping & Analysis"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
        <ServiceCard
            icon={"/skills/astro.png"}
            title="Data Visualization"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
        <ServiceCard
            icon={"/skills/astro.png"}
            title="ML Model Development"
            button={
            <Button href="https://www.youtube.com/">Contact Me</Button>
            }
        />
      </div>



    </section>
  );
}
