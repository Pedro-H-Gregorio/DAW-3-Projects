"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const handleLogoClick = () => {
        if (pathname === "/") {
            const intro = document.getElementById("intro");
            intro?.classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <header id="header">
            <Link
                href="/"
                scroll={pathname !== "/"}
                className="logo"
                onClick={handleLogoClick}>
                Dialy
            </Link>
        </header>
    );
}
