"use client";

import { ReactNode, useEffect } from "react";

type WrapperProps = {
    children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="wrapper">
            {children}
            <div className="bg fixed"></div>
        </div>
    );
}
