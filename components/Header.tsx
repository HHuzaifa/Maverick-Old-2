"use client";
import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".mobile-nav")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className="inset-0 fixed h-16 z-40 bg-black">
      {/* Mobile Nav Menu */}
      <div className="lg:hidden h-14 bg-black inset-0 fixed z-50">
        <Wrapper>
          <div className="flex justify-between items-center sticky inset-0 h-16">
            <div className="flex justify-between items-center">
              <ScrollLink
                to="AboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="scroll-smooth"
              >
                <div className="relative h-20 w-20">
                  <Image
                    src={"/maverick-logo.svg"}
                    fill={true}
                    alt="Maverick Logo"
                  />
                </div>
              </ScrollLink>
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
          <ul className="absolute top-14 duration-[5000ms] w-full mobile-nav flex flex-col items-center shadow-lg gap-y-8 py-7 bg-black transition ease-in-out bg-opacity-70 border-b-white border-b backdrop-blur-md">
            <button>
              <li className="text-base font-semibold font-linkFont text-white ">
                <ScrollLink
                  to="AboutSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="scroll-smooth"
                >
                  About
                </ScrollLink>
              </li>
            </button>
            <button>
              <li className="text-base font-semibold font-linkFont text-white ">
                <ScrollLink
                  to="SkillsSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="scroll-smooth"
                >
                  Skills
                </ScrollLink>
              </li>
            </button>
            <button>
              <li className="text-base font-semibold font-linkFont text-white ">
                <ScrollLink
                  to="ServicesSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="scroll-smooth"
                >
                  Services
                </ScrollLink>
              </li>
            </button>
            <button>
              <li className="text-base font-semibold font-linkFont text-white ">
                <ScrollLink
                  to="PortfolioSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="scroll-smooth"
                >
                  Portfolio
                </ScrollLink>
              </li>
            </button>

            <li>
              <Button href="https://www.linkedin.com/in/huzaifa-hk/">
                Contact Me
              </Button>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Nav Menu */}
      <div className="smbil:hidden h-16 mmbil:hidden lmbil:hidden tab:hidden laptop:flex laptop:items-center laptop:justify-between laptop:max-w-[980px] laptop-lg:max-w-[1180px] 4k:max-w-[2000px] 4k:h-36 laptop:mx-auto ">
        <ScrollLink
          to="AboutSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="scroll-smooth"
        >
          <div className="relative h-28 w-28 4k:w-64 4k:h-64">
            <Image src={"maverick-logo.svg"} fill={true} alt="Maverick Logo" />
          </div>
        </ScrollLink>

        <ul className="laptop:flex gap-x-8 ">
          <button>
            <li className="text-base font-linkFont font-semibold 4k:text-3xl text-white ">
              <ScrollLink
                to="AboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="scroll-smooth"
              >
                About
              </ScrollLink>
            </li>
          </button>
          <button>
            <li className="text-base font-linkFont font-semibold 4k:text-3xl text-white ">
              <ScrollLink
                to="SkillsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="scroll-smooth"
              >
                Skills
              </ScrollLink>
            </li>
          </button>
          <button>
            <li className="text-base font-linkFont font-semibold 4k:text-3xl text-white ">
              <ScrollLink
                to="ServicesSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="scroll-smooth"
              >
                Services
              </ScrollLink>
            </li>
          </button>
          <button>
            <li className="text-base font-linkFont font-semibold 4k:text-3xl text-white  ">
              <ScrollLink
                to="PortfolioSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="scroll-smooth"
              >
                Portfolio
              </ScrollLink>
            </li>
          </button>
        </ul>

        <Button href="https://www.linkedin.com/in/huzaifa-hk/">
          Contact Me
        </Button>
      </div>
    </header>
  );
}
