import Copyright from "../../components/Copyright";
import Elements from "../../components/Elements";
import FeaturedPost from "../../components/FeaturedPost";
import Footer from "../../components/Footer";
import Generic from "../../components/Generic";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import PaginationFooter from "../../components/PaginationFooter";
import Posts from "../../components/Posts";
import Tab from "../../components/Tab";
import Tabs from "../../components/Tabs";


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
