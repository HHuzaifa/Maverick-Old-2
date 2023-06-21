import Image from 'next/image'
import React from 'react'

type Props = {
  imageSrc: string
  title: string
  ButtonComponent1: React.ReactNode
  ButtonComponent2: React.ReactNode
}

const PortfolioCard: React.FC<Props> = ({
  imageSrc,
  title,
  ButtonComponent1,
  ButtonComponent2,
}) => {
  return (
    <div className="group rounded-xl overflow-hidden relative border-4 border-white smbil:px-32 smbil:py-40 mmbil:px-36 mmbil:py-44 lmbil:px-40 laptop:px-36 laptop:py-40 laptop-lg:px-48 laptop-lg:py-52">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
        <h2 className="text-white mb-32 truncate">{title}</h2>
        <div className="flex space-x-4 mb-5">
          {ButtonComponent1}
          {ButtonComponent2}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard