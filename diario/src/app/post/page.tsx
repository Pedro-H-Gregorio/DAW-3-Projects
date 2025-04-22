import { deletePost, fetchPost, parsePost } from "@/utils/api";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Actions from "@/components/common/Actions";

import defaultImage from "@/public/images/default-image.jpg";
import LinkAction from "@/components/common/LinkAction";
import DeletePost from "@/components/misc/DeletePost";

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

        return (
            <section className="post">
                <header className="major">
                    <span className="date">{post.date}</span>
                    <h1>{post.title}</h1>
                    <p>{post.summary}</p>
                </header>
                <ResponsiveImage alignment="main" src={defaultImage} alt="" />
                <p>{post.content}</p>
                <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sapien risus, commodo eget turpis at, elementum convallis enim turpis, lorem ipsum dolor sit amet nullam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum.</p>
                <DeletePost id={id} />
            </section>
        );
    } catch (e) {
        console.log(e);
        return <h1>ERROR 404</h1>;
    }
}
