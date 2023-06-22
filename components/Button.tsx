import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button: FC<ButtonProps> = ({ children, href }) => {
  return (
    <button className="font-linkFont  bg-gradient-to-tr from-[#0324D0] to-[#0361D9] hover:bg-gradient-to-bl hover:from-[#1D7DFC] hover:to-[#368bfb] transition text-white font-semibold text-base py-2 px-4 4k:py-6 4k:px-8 4k:text-3xl rounded-lg">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;