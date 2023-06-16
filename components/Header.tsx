"use client";
import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Button from "./Button";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (open && !event.target.closest(".mobile-nav")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className="inset-0 sticky z-40 bg-black">
      {/* Mobile Nav Menu */}

      <div className="lg:hidden h-14 bg-black inset-0 fixed z-50">
        <Wrapper>
          <div className="flex justify-between items-center sticky inset-0 h-16">
            <div className="flex justify-between items-center">
              <div className="relative h-20 w-20">
                <Image
                  src={"/maverick-logo.svg"}
                  fill={true}
                  alt="Maverick Logo"
                />
              </div>
            </div>

            <div onClick={() => setOpen(!open)}>
              {open ? (
                <Cross2Icon className="text-white" fontSize={50} />
              ) : (
                <HamburgerMenuIcon className="text-white" />
              )}
            </div>
          </div>
        </Wrapper>

        {open && (
          <ul className="absolute top-14 transition-opacity duration-300 w-full mobile-nav  flex flex-col items-center shadow-lg gap-y-5 py-7 bg-black bg-opacity-80 backdrop-blur">
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>About</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Portfolio</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Services</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Skills</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Resume</Link>
            </li>
            <li className="text-base text-white font-normal ">
              Button
            </li>
          </ul>


        )}
      </div>

      {/* Desktop Nav Menu */}



      <div className="smbil:hidden mmbil:hidden lmbil:hidden tab:hidden laptop:flex laptop:items-center laptop:justify-between laptop:max-w-[980px] laptop:mx-auto ">



        <div className="relative h-28 w-28">
          <Image src={"maverick-logo.svg"} fill={true} alt="Maverick Logo" />
        </div>


        <ul className="laptop:flex ">
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>About</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Portfolio</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Services</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Skills</Link>
            </li>
            <li className="text-base text-white font-normal ">
              <Link href={"https://www.youtube.com/"}>Resume</Link>
            </li>
        </ul>


        <div className="text-white">
          Button
        </div>




      </div>



    </header>
  );
}
















// <div className="hidden bg-black laptop::sticky laptop:inset-0 laptop:flex justify-between items-center h-16 mx-auto">
//         <Wrapper>
//         <div className="relative w-32 h-32">
//           <Image src={"/maverick-logo.svg"} fill={true} alt="Maverick Logo" />
//         </div>

//         <ul className="laptop:flex laptop:gap-x-8">
//             <li className="text-base text-white font-normal ">
//                 <Link href={"https://www.youtube.com/"} >
//                   About
//                 </Link>
//             </li>
//             <li className="text-base text-white font-normal ">
//                 <Link href={"https://www.youtube.com/"} >
//                   About
//                 </Link>
//             </li>
//             <li className="text-base text-white font-normal ">
//                 <Link href={"https://www.youtube.com/"} >
//                   Portfolio
//                 </Link>
//             </li>
//             <li className="text-base text-white font-normal ">
//                 <Link href={"https://www.youtube.com/"} >

//                 </Link>
//             </li>
//             <li className="text-base text-white font-normal ">
//                 <Link href={"https://www.youtube.com/"} >
//                   Resume
//                 </Link>
//             </li>

//         </ul>

//         <div>
//           <Button href="www.youtube.com">Click Me</Button>
//         </div>
//         </Wrapper>
//     </div>
