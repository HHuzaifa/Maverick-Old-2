import ContactForm from "@/components/ContactForm";

export default function ContactMe() {
    return (
        <section className="w-screen h-screen flex flex-col items-center text-justify justify-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">


            <h1 className="text-white">Contact Form</h1>
            <p className="text-white">Let's embark on a collaborative journey where we explore, analyze, and shape your vision together.</p>

            <ContactForm />


        </section>
    )
}