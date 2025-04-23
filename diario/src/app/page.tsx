import PostFeed from "@/components/layout/PostFeed";

type HomeProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
    const currentPage = Number(params?.page) || 1;
    return <PostFeed page={currentPage} />;
}
