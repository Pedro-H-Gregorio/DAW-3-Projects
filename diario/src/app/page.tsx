import Pagination from "@/components/common/Pagination";
import Post from "@/components/misc/Post";
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
        const featuredPost = parsedPosts.length ? parsedPosts[0] : null;

        return (
            <>
                {featuredPost ?
                    <>
                        <Post
                            id={featuredPost.id}
                            title={featuredPost.title}
                            date={featuredPost.date}
                            featured={true}
                            imageSrc={featuredPost.imageSrc}>{featuredPost.summary}</Post>
                        <Posts posts={parsedPosts.slice(1)} />
                    </> : null
                }
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

