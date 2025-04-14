import Image from "next/image";

import pic01 from "/public/images/pic01.jpg";

const post = {
    title: "And this is a massive headline",
    date: "April 25, 2017",
    summary: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
    imageSrc: pic01
}

export default function FeaturedPost() {
    return (
        <article className="post featured">
            <header className="major">
                <span className="date">{post.date}</span>
                <h2 style={{
                    textWrap: "balance"
                }}>
                    <a href="#">{post.title}</a>
                </h2>
                <p style={{
                    textWrap: "balance"
                }}>{post.summary}</p>
            </header>
            <a href="#" className="image main">
                <Image src={pic01} alt="" style={{
                    height: "auto"
                }} />
            </a>
            <ul className="actions special">
                <li>
                    <a href="#" className="button large">
                        Full Story
                    </a>
                </li>
            </ul>
        </article>
    );
}
