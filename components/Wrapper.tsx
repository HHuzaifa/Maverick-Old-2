import { FC, ReactNode } from "react"


const Wrapper:FC<{children: ReactNode}> = ({children}) => {
    return(
        <div className="smbil:max-w-[290px] mmbil:max-w-[340px] lmbil:max-w-[380px] tab:max-w-[670px] mx-auto">
            {children}
        </div>
    )
}

export default Wrapper