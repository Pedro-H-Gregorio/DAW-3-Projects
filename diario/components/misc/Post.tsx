import Image, { StaticImageData } from "next/image";


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
                }}>
                    <a href="#">{title}</a>
                </h2>
            </header>
            <a href="#" className="image fit">
                <Image src={imageSrc} alt="" style={{ height: "auto" }} />
            </a>
            <p>{children}</p>
            <ul className="actions special">
                <li>
                    <a href="#" className="button">Full Story</a>
                </li>
            </ul>
        </article>
    );
}
