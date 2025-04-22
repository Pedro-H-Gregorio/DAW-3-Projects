import Actions from "../common/Actions";
import ResponsiveImage from "../common/ResponsiveImage";
import LinkAction from "../common/LinkAction";
import Link from "next/link";

import defaultImage from "@/public/images/default-image.jpg";

type PostProps = {
    id: string;
    title: string;
    date: string;
    children: string;
    featured?: boolean;
    imageSrc?: string;
};

export default function Post({ id, title, date, imageSrc, featured, children }: PostProps) {
    const route = `/post?id=${id}`;

    return (
        <article className={featured ? "post featured" : ""}>
            <header className={featured ? "major" : ""}>
                <span className="date">{date}</span>
                <h2 style={{
                    textWrap: "balance",
                    paddingLeft: featured ? "10%" : "5%",
                    paddingRight: featured ? "10%" : "5%"
                }}>
                    <Link href={route}>{title}</Link>
                </h2>
            </header>
            <ResponsiveImage
                wrapper={{
                    component: Link,
                    props: {
                        href: route
                    }
                }}
                alignment={featured ? "main" : "fit"}
                src={imageSrc || defaultImage}
                alt=""
                quality={featured ? 100 : 75}
            />
            {featured ? null :
                <p>{children}</p>}
            <Actions special={true}>
                <LinkAction href={route}>Full Story</LinkAction>
            </Actions>
        </article>
    );
}
