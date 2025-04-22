import { StaticImageData } from "next/image";
import Actions from "../common/Actions";
import Action from "../common/Action";
import ResponsiveImage from "../common/ResponsiveImage";
import LinkAction from "../common/LinkAction";
import Link from "next/link";

import defaultImage from "@/public/images/default-image.jpg";

type PostProps = {
    id: string;
    title: string;
    date: string;
    children: string;
    imageSrc?: StaticImageData;
};

export default function Post({ id, title, date, imageSrc, children }: PostProps) {
    const route = `/post?id=${id}`;
    return (
        <article>
            <header>
                <span className="date">{date}</span>
                <h2 style={{
                    textWrap: "balance",
                    paddingLeft: "5%",
                    paddingRight: "5%"
                }}>
                    <Link href={route}>{title}</Link>
                </h2>
            </header>
            <ResponsiveImage wrapper={{
                component: Link,
                props: {
                    href: route
                }
            }} alignment="fit" src={imageSrc || defaultImage} alt="" />
            <p>{children}</p>
            <Actions special={true}>
                <LinkAction href={route}>Full Story</LinkAction>
            </Actions>
        </article>
    );
}
