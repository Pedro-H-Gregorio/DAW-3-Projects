import defaultImage from "/public/images/default-image.jpg";

import ResponsiveImage from "../common/ResponsiveImage";
import Actions from "../common/Actions";
import Action from "../common/Action";
import MajorHeader from "../common/MajorHeader";
import { Post } from "../../types/Post";
import LinkAction from "../common/LinkAction";
import Link from "next/link";

// const post = {
//     title: "And this is a massive headline",
//     date: "April 25, 2017",
//     summary: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
//     imageSrc: pic01
// }

type FeaturedPostProps = {
    post: Post;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
    const route = `/post?id=${post.id}`;
    return (
        <article className="post featured">
            <MajorHeader title={post.title} date={post.date}>{post.summary}</MajorHeader>
            <ResponsiveImage wrapper={{
                component: Link, props: {
                    href: route
                }
            }} src={defaultImage} alignment="main" alt="" />
            <Actions special={true}>
                <LinkAction href={route}>Full Story</LinkAction>
            </Actions>
        </article>
    );
}
