import { StaticImageData } from "next/image";
import Actions from "../common/Actions";
import Action from "../common/Action";
import ResponsiveImage from "../common/ResponsiveImage";

type PostProps = {
    title: string;
    date: string;
    children: string;
    imageSrc: StaticImageData;
};

export default function Post({ title, date, imageSrc, children }: PostProps) {
    return (
        <article>
            <header>
                <span className="date">{date}</span>
                <h2 style={{
                    textWrap: "balance",
                    paddingLeft: "5%",
                    paddingRight: "5%"
                }}>
                    <a href="#">{title}</a>
                </h2>
            </header>
            <ResponsiveImage wrapper={{
                component: "a",
                props: {
                    href: "#"
                }
            }} alignment="fit" src={imageSrc} alt="" />
            <p>{children}</p>
            <Actions special={true}>
                <Action>Full Story</Action>
            </Actions>
        </article>
    );
}
