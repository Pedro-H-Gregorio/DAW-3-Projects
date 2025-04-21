import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Copyright from "../../components/misc/Copyright";
import Intro from "../../components/misc/Intro";
import MainContent from "../../components/layout/MainContent";

export default async function Home() {
    return (
        <div className="wrapper">
            <Intro />
            <Header />
            <MainContent />
            <Footer />
            <Copyright />
        </div >
    );
}

