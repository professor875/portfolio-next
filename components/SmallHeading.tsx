import React from "react";


export default function MediumHeading( {children, id}: { children: React.ReactNode, id?: string }) {
    return(
        <h1 id={id} className="scroll-mt-20 md:scroll-mt-[160px] font-bold md:text-[24px] text-[18px] text-white md:leading-[30px] leading-[25px] [text-shadow:4px_4px_4px_black]">{children}</h1>
    )
}