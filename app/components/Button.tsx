import { ButtonProps } from "../types/input";

export default function Button ({ children, onClick, className="" } : ButtonProps) {
    return (
        <button onClick={onClick} className={`px-8 py-4 font-headline tracking-widest uppercase cursor-pointer transition-all duration-150 ${className}`}>
            {children}
        </button>
    )
}