import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Tab from "../../components/layout/Tab";
import Tabs from "../../components/layout/Tabs";
import Copyright from "../../components/misc/Copyright";
import Elements from "../../components/misc/Elements";
import FeaturedPost from "../../components/misc/FeaturedPost";
import Generic from "../../components/misc/Generic";
import Intro from "../../components/misc/Intro";
import PaginationFooter from "../../components/misc/PaginationFooter";
import Posts from "../../components/misc/Posts";

export default function Home() {
    return (
        <div className="wrapper">
            <Intro />
            <Header />
            <Tabs>
                <Tab title="This is Massively">
                    <FeaturedPost />
                    <Posts />
                    <PaginationFooter />
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
