import Actions from "../common/Actions";
import ResponsiveImage from "../common/ResponsiveImage";
import LinkAction from "../common/LinkAction";
import Link from "next/link";
import { StaticImageData } from "next/image";


type PostProps = {
    id: string;
    title: string;
    date: string;
    children: string;
    featured?: boolean;
    imageSrc: string | StaticImageData;
};

export default function Post({ id, title, date, imageSrc, featured, children }: PostProps) {
    const MAX_SUMMARY_CHARACTERS = 160;
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
                src={imageSrc}
                alt=""
                quality={featured ? 100 : 75}
            />
            {featured ? null :
                <p>{children.length > MAX_SUMMARY_CHARACTERS ?
                    children.substring(0, children.indexOf(" ", MAX_SUMMARY_CHARACTERS)) + "..."
                    : children}</p>}
            <Actions special={true}>
                <LinkAction href={route}>Full Story</LinkAction>
            </Actions>
        </article>
    );
}
