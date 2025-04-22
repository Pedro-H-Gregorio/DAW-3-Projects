import Pagination from "@/components/common/Pagination";
import FeaturedPost from "@/components/misc/FeaturedPost";
import Posts from "@/components/misc/Posts";
import { fetchPosts, parsePosts } from "@/utils/api";

type HomeProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export default async function Home({ searchParams }: HomeProps) {
    try {
        const params = await searchParams;
        const currentPage = Number(params?.page) || 1;

        const response = await fetchPosts(currentPage);
        const totalPage = Math.ceil(response.total / response.limit) || 1;
        const parsedPosts = parsePosts(response.data);

        return (
            <>
                {parsedPosts.length ?
                    <>
                        <FeaturedPost post={parsedPosts[0]} />
                        <Posts posts={parsedPosts.slice(1)} />
                    </> : null}
                <footer>
                    <Pagination pages={Array.from({ length: totalPage }, (_x, i) => i + 1)} maxNumberPages={6} />
                </footer>
            </>
        );
    } catch (e) {
        console.log(e);
        return (
            <h1>ERREI, FUI MLK</h1>
        );
    }
}

