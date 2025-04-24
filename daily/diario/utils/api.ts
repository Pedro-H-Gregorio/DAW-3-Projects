import { PostListResponse } from "@/types/PostListResponse";
import { PostResponse } from "@/types/PostResponse";

import axios, { AxiosInstance } from "axios";
import FormData from "form-data";

export function parsePost(post: PostResponse) {
  const date = new Date(post.dhPostagem);
  const formated =
    date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }) +
    " " +
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
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
  return posts
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

export async function fetchPosts(
  page: number | string,
  limit: number = 7
): Promise<PostListResponse> {
  const params = {
    page: page.toString(),
    limit: limit.toString(),
  };

  const response = await api.get<PostListResponse>("diarios", { params });
  return response.data;
}

export async function fetchPost(id: string): Promise<PostResponse> {
  const response = await api.get<PostResponse>(`diarios/${id}`);
  return response.data;
}

export async function fetchFile(path: string): Promise<File> {
  const response = await api.get(path, {
    responseType: "blob",
  });
  const blob = response.data;
  return new File([blob], path, { type: blob.type });
}

export async function deletePost(id: string): Promise<boolean> {
  try {
    const response = await api.delete(`diarios/${id}`);
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    return false;
  }
}

export async function createPost({
  author,
  email,
  title,
  category,
  content,
  image,
}: PostCreatePayload) {
  const form = new FormData();

  form.append("nomeAutor", author);
  form.append("email", email);
  form.append("titulo", title);
  form.append("categoria", category);
  form.append("descricao", content);
  form.append("file", image);

  return await api.post("/diarios", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
