"use client"

import { ReactElement, useState } from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Navigation from "./Navigation";
import { TabProps } from "./Tab";


type TabsProps = {
    children: ReactElement<TabProps>[];
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
    const [active, setActive] = useState<number>(2);

    return (
        <>
            <Navigation
                items={
                    children.map((child: ReactElement<TabProps>) => (
                        { title: child.props.title }))
                }
                links={links}
                active={active}
                onSelect={setActive}
            />
            <div id="main">
                {children[active]}
            </div>
        </>
    );
}
