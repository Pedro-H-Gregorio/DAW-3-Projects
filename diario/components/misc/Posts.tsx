import { StaticImageData } from "next/image";

import Post from "./Post";
import pic02 from "@/public/images/pic02.jpg";
import pic03 from "/public/images/pic03.jpg";
import pic04 from "/public/images/pic04.jpg";
import pic05 from "/public/images/pic05.jpg";
import pic06 from "/public/images/pic06.jpg";
import pic07 from "/public/images/pic07.jpg";
import { Post as PostType } from "@/types/Post";
import { fetchPosts } from "../../utils/api";
import { GetStaticProps } from "next";


// const posts = [
//     {
//         title: "Sed magna ipsum faucibus", imageSrc: pic02, date: "April 24, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     },
//     {
//         title: "Primis eget imperdiet lorem", imageSrc: pic03, date: "April 22, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     },
//     {
//         title: "Ante mattis interdum dolor", imageSrc: pic04, date: "April 18, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     },
//     {
//         title: "Tempus sed nulla imperdiet", imageSrc: pic05, date: "April 14, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     },
//     {
//         title: "Odio magna sed consectetur", imageSrc: pic06, date: "April 11, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     },
//     {
//         title: "Augue lorem primis vestibulum", imageSrc: pic07, date: "April 7, 2017",
//         summary: "Donec eget ex magna.Interdum et malesuada fames ac ante ipsum primis in faucibus.Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam."
//     }
// ];

// console.log("TESTE");

type PostsProps = {
    posts: PostType[];
};

export default function Posts({ posts }: PostsProps) {
    return (
        <section className="posts">
            {posts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} date={post.date}>{post.summary}</Post>
            ))}
        </section>
    );
}

