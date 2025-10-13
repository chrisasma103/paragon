"use client"
import { useRef } from "react"

// Add onClick to the component's props
export default function Card({ className = "", children, onClick, ...props }) {
    const ref = useRef(null)

    return (
        // Add the onClick handler and Tailwind classes for cursor and a hover effect
        <div 
            ref={ref} 
            onClick={onClick} 
            className={`bg-gradient-to-bl card overflow-hidden relative md:p-11 p-7 ${className} ${onClick ? 'cursor-pointer transition-transform duration-200 hover:scale-[1.02]' : ''}`} 
            {...props}
        >
            {children}
            <div className="gradient-layer h-full w-full absolute top-0 left-0 -z-10" style={{ transition: "opacity 1s" }}></div>
        </div>
    )
}