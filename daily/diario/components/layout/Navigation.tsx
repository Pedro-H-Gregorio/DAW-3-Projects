"use client";

import Link from "next/link";
import { ExternalLinkProps } from "../common/ExternalLink";
import ExternalLinks from "../common/ExternalLinks";
import { usePathname } from "next/navigation";

export type NavigationItem = {
    route: string;
    title: string;
    hidden?: boolean;
};

type NavigationProps = {
    items: NavigationItem[];
    links?: ExternalLinkProps[];
};


export default function Navigation({ items, links }: NavigationProps) {
    const pathname = usePathname();
    const isActived = (route: string) => pathname === route || (route !== "/" && pathname.startsWith(route));
    return (
        <nav id="nav">
            <ul className="links">
                {
                    items.map(({ route, title, hidden }, index) => (
                        hidden && !isActived(route) ? null :
                            <li key={index} className={`${isActived(route) ? "active" : ""} `}>
                                <Link href={route}>{title}</Link>
                            </li>
                    ))
                }
            </ul>
            {
                links ? <ExternalLinks links={links} size={27} /> : null
            }
        </nav >
    );
}
