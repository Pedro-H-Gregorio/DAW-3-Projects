import { PostListResponse } from "@/types/PostListResponse";
import { PostResponse } from "@/types/PostResponse";

import axios from "axios";
import FormData from "form-data";

export function parsePost(post: PostResponse) {
    const date = new Date(post.dhPostagem);
    const formated = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    const content = post.descricao.trim().concat("\n");
    const imageSrc = post.imagemPath
        ? `http://localhost:5000/${post.imagemPath}`
        : "";

    return {
        id: post.id.toString(),
        title: post.titulo,
        summary: content.substring(0, content.indexOf("\n")),
        date: formated,
        imageSrc,
        content,
    };
}

export function parsePosts(posts: PostResponse[]) {
    return posts.map(parsePost).sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function fetchPosts(page: number | string, limit: number = 7): Promise<PostListResponse> {
    const url = new URL("http://localhost:5000/diarios");
    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());

    const result = await fetch(url);

    if (!result.ok) throw new Error("Failed to fetch posts.");

    return result.json();
}

export async function fetchPost(id: string): Promise<PostResponse> {
    const url = new URL(`http://localhost:5000/diarios/${id}`);
    const result = await fetch(url);

    if (!result.ok) throw new Error("Failed to fetch post.");

    return result.json();
}

export async function fetchFile(path: string): Promise<File> {
    const url = new URL(`http://localhost:5000/${path}`);
    const result = await fetch(url);

    if (!result.ok) throw new Error("Failed to fetch post.");

    const blob = await result.blob();
    const file = new File([blob], path, { type: blob.type });

    return file;
}

export async function deletePost(id: string): Promise<boolean> {
    const url = new URL(`http://localhost:5000/diarios/${id}`);
    const result = await fetch(url, {
        method: "DELETE",
    });
    return result.ok;
}

export async function createPost({ author, email, title, category, content, image }: PostCreatePayload) {
    const form = new FormData();

    form.append("nomeAutor", author);
    form.append("email", email);
    form.append("titulo", title);
    form.append("categoria", category);
    form.append("descricao", content);
    form.append("file", image);

    return await axios.post("http://localhost:5000/diarios", form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}
