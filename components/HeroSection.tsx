import Image from "next/image"
import Button from "./Button"

export default function HeroSection () {
    return (
        <section className="w-full h-screen flex flex-col tab:flex-row-reverse smbil:justify-center smbil:items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px] ">



            <div className="max-w-lg">
                <Image src={"/Full Stack Developer and Machine Learning Engineer.png"} width={800} height={700} alt="Hero Image" />
            </div>





            <div>
                <h1 className="text-white">Hi there!</h1>
                <h2 className="text-white">I'm a Full Stack | Jamstack Web App Developer</h2>
                <div>
                <Button href="https://www.youtube.com/" >Contact Me</Button>
                <Button href="https://www.youtube.com/" >Download Resume</Button>
                </div>
            </div>





        </section>
    )
}