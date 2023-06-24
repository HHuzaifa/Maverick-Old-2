import Image from "next/image"


export default function Footer() {
    return (
        <footer className="w-full py-1 bg-black">
            <div className="flex justify-between items-center mx-auto smbil:max-w-[290px] mmbil:max-w-[340px]  lmbil:max-w-[380px] tab:max-w-[670px] laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px]">
            <Image src={"/maverick-logo.svg"} width={60} height={60} alt="footer logo" />
            <p className="text-white font-linkFont text-xs">© 2023 Maverick. All rights reserved</p>
            </div>
        </footer>
    )
}