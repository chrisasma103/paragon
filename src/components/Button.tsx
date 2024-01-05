import { ReactNode } from "react";

const styles: { [key: string]: string } = {
    primary: "border-[.2rem] bg-secondary border-secondary border-primary-gradient bg-opacity-15 hover:bg-opacity-40 uppercase",
    secondary: "border-[.2rem] hover:bg-white hover:bg-opacity-10 uppercase",
    noBorder: "border-0 hover:bg-white hover:bg-opacity-10 uppercase"
}

export default function Button({ children, className = "", style = "primary", ...props }: { children: ReactNode, className?: string, style?: string }) {
    return <button className={`transition-all flex items-center text-2xl rounded-2xl px-16 py-5 ${styles[style] || ""} ${className}`} {...props}>{children}</button>
}