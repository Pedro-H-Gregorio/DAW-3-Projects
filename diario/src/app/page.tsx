import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import MainContent from "../../components/MainContent";
import Navigation from "../../components/Navigation";

export default function Home() {
    return (
        <div className="wrapper">
            <Intro />
            <Header />
            <Navigation />
            <MainContent />
            <Footer />
            <Copyright />
        </div >
    );
}
