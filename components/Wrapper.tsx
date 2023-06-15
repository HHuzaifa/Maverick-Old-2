import { FC, ReactNode } from "react"


const Wrapper:FC<{children: ReactNode}> = ({children}) => {
    return(
        <div className="max-w-full mx-3">
            {children}
        </div>
    )
}