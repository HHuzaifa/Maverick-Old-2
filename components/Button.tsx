import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button: FC<ButtonProps> = ({ children, href }) => {
  return (
    <button className="bg-teal-400 hover:bg-fuchsia-900 text-white font-semibold text-sm py-2 px-4 rounded-full">
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;