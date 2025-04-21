import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Tab from "../../components/layout/Tab";
import Tabs from "../../components/layout/Tabs";
import Copyright from "../../components/misc/Copyright";
import Elements from "../../components/misc/Elements";
import FeaturedPost from "../../components/misc/FeaturedPost";
import Generic from "../../components/misc/Generic";
import Intro from "../../components/misc/Intro";
import Posts from "../../components/misc/Posts";
import { fetchPosts } from "../../utils/api";
import Pagination from "../../components/common/Pagination";


type HomeProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export default async function Home(props: HomeProps) {
    const params = await props.searchParams;
    const currentPage = Number(params?.page) || 1;
    const response = await fetchPosts(currentPage);
    const totalPage = Math.ceil(response.total / response.limit);
    const formatted = response.data.map((post: any) => ({
        title: post.nomeAutor,
        date: post.email,
        summary: post.descricao,
    }));

    return (
        <div className="wrapper">
            <Intro />
            <Header />
            <Tabs>
                <Tab title="This is Massively">
                    <FeaturedPost />
                    <Posts posts={formatted} />
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
            <Footer />
            <Copyright />
        </div >
    );
}

