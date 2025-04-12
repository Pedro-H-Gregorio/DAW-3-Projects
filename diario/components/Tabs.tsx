"use client"

import { ReactElement, useState } from "react";
import Navigation from "./Navigation";
import { TabProps } from "./Tab";

type TabsProps = {
    children: ReactElement<TabProps>[]
};

export default function Tabs({ children }: TabsProps) {
    const [active, setActive] = useState<number>(2);

    return (
        <>
            <Navigation
                items={children.map((child: ReactElement<TabProps>) => (
                    { title: child.props.title }))}
                active={active}
                onSelect={setActive}
            />
            <div id="main">
                {children[active]}
            </div>
        </>
    );
}
