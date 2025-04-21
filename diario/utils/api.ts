
type ApiResponse = {
    data: {
        nomeAutor: string;
        email: string;
        categoria: string;
        descricao: string;
        imagePath: string;
    }[];
    limit: number;
    page: number;
    total: number;
};

export async function fetchPosts(page: number | string): Promise<ApiResponse> {
    const url = new URL("http://localhost:5000/diarios");
    url.searchParams.set("page", page.toString());

    const result = await fetch(url);

    if (!result.ok)
        throw new Error("Failed to fetch posts.");

    return result.json();
}
