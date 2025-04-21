import Tab from "../../components/layout/Tab";
import Tabs from "../../components/layout/Tabs";
import Elements from "../../components/misc/Elements";
import FeaturedPost from "../../components/misc/FeaturedPost";
import Generic from "../../components/misc/Generic";
import Posts from "../../components/misc/Posts";
import { fetchPosts, parsePosts } from "../../utils/api";
import Pagination from "../../components/common/Pagination";

type MainContentProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export default async function MainContent({ searchParams }: MainContentProps) {
    try {
        const params = await searchParams;
        const currentPage = Number(params?.page) || 1;

        const response = await fetchPosts(currentPage);
        const totalPage = Math.ceil(response.total / response.limit) || 1;
        const parsedPosts = parsePosts(response.data);

        return (
            <Tabs>
                <Tab title="This is Massively">
                    {parsedPosts.length ?
                        <FeaturedPost post={parsedPosts[0]} /> : null}
                    <Posts posts={parsedPosts.slice(1)} />
                    <footer>
                        <Pagination pages={Array.from({ length: totalPage }, (_x, i) => i + 1)} maxNumberPages={6} />
                    </footer>
                </Tab>
                <Tab title="Generic Page">
                    <Generic />
                </Tab>
                <Tab title="Elements Reference">
                    <Elements />
                </Tab>
            </Tabs>
        );
    } catch (e) {
        return (
            <div id="main">
                <h1>ERREI, FUI MLK</h1>
            </div>
        );
    }
}

