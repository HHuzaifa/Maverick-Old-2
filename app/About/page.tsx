import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function About () {
    return (
        <section className="w-full h-screen flex flex-col">
            <HeroSection />



            <div>



                <div>
                    <Image src={"/Full Stack Developer Github.png"} width={800} height={700} alt="About Image" />
                </div>



                <div>
                    
                </div>


            </div>



        </section>
    )
}