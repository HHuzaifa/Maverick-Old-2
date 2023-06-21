import Image from "next/image";
import { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  button: JSX.Element;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, button }) => {
  return (
    <div className="flex flex-col justify-center items-center border-4 border-[#CCCCCC] bg-gradient-to-tl from-[#130428] via-[#38126D] to-[#261045] rounded-xl">
      <div className="smbil:px-8 smbil:py-10 mmbil:px-10 mmbil:py-10 lmbil:px-12 lmbil:py-10 laptop:px-24 laptop:py-10 laptop-lg:px-24 laptop-lg:py-16 flex flex-col justify-center items-center">
        <div className="relative w-32 h-28">
          <Image src={icon} fill={true} alt="service icon" />
        </div>
        <h3 className="text-white pt-5 pb-2 text-center overflow-hidden whitespace-nowrap overflow-ellipsis">{title}</h3>
        {button}
      </div>
    </div>
  );
};

export default ServiceCard;
