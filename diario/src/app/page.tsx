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
                    </> :
                    <header>
                        <h2>Ops! Parece que ainda não há<br />nenhuma postagem aqui.</h2>
                    </header>
                }
                <footer>
                    <Pagination pages={Array.from({ length: totalPage }, (_x, i) => i + 1)} maxNumberPages={6} />
                </footer>
            </>
        );
    } catch (e) {
        console.error(e);
        return (
            <h2>Não foi possível resgatar as postagens.</h2>
        );
    }
}

