import React from "react";

export default function Button({ children, className }: {children: React.ReactNode, className: string}) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    return (
        <button
            className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
}