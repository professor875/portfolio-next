import React from "react";


export default function Paragraph( {children}: { children: React.ReactNode }) {
    return(
        <p className="[text-shadow:4px_4px_4px_black] p-4 bg-black/70 text-md">{children}</p>
    )
}