type ApiPost = {
    id: number;
    nomeAutor: string;
    email: string;
    categoria: string;
    descricao: string;
    imagePath: string;
    titulo: string;
    dhPostagem: Date;
}

type ApiResponse = {
    data: ApiPost[];
    limit: number;
    page: number;
    total: number;
};

export function parsePost(post: ApiPost) {
    return {
        id: post.id.toString(),
        title: post.nomeAutor,
        date: post.email,
        summary: post.descricao.substring(0, post.descricao.indexOf("\n")),
        content: post.descricao
    };
}

export function parsePosts(posts: ApiPost[]) {
    return posts.map(parsePost);
}

export async function fetchPosts(page: number | string): Promise<ApiResponse> {
    const url = new URL("http://localhost:5000/diarios");
    url.searchParams.set("page", page.toString());

    const result = await fetch(url);

    if (!result.ok)
        throw new Error("Failed to fetch posts.");

    return result.json();
}

export async function fetchPost(id: string): Promise<ApiPost> {
    const url = new URL(`http://localhost:5000/diarios/${id}`);
    const result = await fetch(url);

    if (!result.ok)
        throw new Error("Failed to fetch post.");

    return result.json();
}

export async function deletePost(id: string): Promise<boolean> {
    const url = new URL(`http://localhost:5000/diarios/${id}`);
    const result = await fetch(url, {
        method: "DELETE"
    });
    return result.ok;
}
