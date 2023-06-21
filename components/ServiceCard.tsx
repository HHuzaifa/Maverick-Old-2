import Image from "next/image";
import { FC, ReactNode } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  button: JSX.Element;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, button }) => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gradient-to-tl from-[#130428] via-[#38126D] to-[#261045] rounded-xl">
      <div className="smbil:p-14 mmbil:p-16 lmbil:p-20 laptop-lg:p-24">
        <div className="relative w-12 h-12">
          <Image src={icon} fill={true} alt="service icon" />
        </div>
        <h3 className="text-white">{title}</h3>
        {button}
      </div>
    </div>
  );
};

export default ServiceCard;
