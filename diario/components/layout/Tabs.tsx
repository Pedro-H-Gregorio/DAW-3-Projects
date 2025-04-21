"use client";

import { Children, ReactElement, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Navigation from "./Navigation";
import { TabProps } from "./Tab";


type TabsProps = {
    children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

const links = [
    {
        name: "Twitter",
        url: "#",
        icon: FaTwitter
    },
    {
        name: "Facebook",
        url: "#",
        icon: FaFacebookF
    },
    {
        name: "Instagram",
        url: "#",
        icon: FaInstagram
    },
    {
        name: "Github",
        url: "#",
        icon: FaGithub
    },
];

export default function Tabs({ children }: TabsProps) {
    const [active, setActive] = useState<number>(0);

    return (
        <>
            <Navigation
                items={
                    Children.map(children, child => ({ title: child.props.title }))
                }
                links={links}
                active={active}
                onSelect={setActive}
            />
            <div id="main">
                {Array.isArray(children) ? children[active] : children}
            </div>
        </>
    );
}
