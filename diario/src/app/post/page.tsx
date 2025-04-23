
import { fetchPost, parsePost } from "@/utils/api";
import ResponsiveImage from "@/components/common/ResponsiveImage";

import defaultImage from "@/public/images/default-image.jpg";
import DeletePost from "@/components/misc/DeletePost";
import { notFound } from "next/navigation";

type PostProps = {
    searchParams?: Promise<{
        id?: string;
    }>;
};

export default async function Post({ searchParams }: PostProps) {
    const params = await searchParams;
    const id = params?.id || "";

    try {
        const response = await fetchPost(id);
        const post = parsePost(response);
        const paragraphs = post.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
        ));

        return (
            <section className="post">
                <header className="major">
                    <span className="date">{post.date}</span>
                    <h1>{post.title}</h1>
                    <p>{post.summary}</p>
                </header>
                <ResponsiveImage alignment="main" src={post.imageSrc || defaultImage} alt="" />
                {paragraphs}
                <DeletePost id={id} />
            </section>
        );
    } catch (e) {
        console.error(e);
        return notFound();
    }
}
