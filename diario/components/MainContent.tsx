import Posts from "./Posts";
import FeaturedPost from "./FeaturedPost";
import PaginationFooter from "./PaginationFooter";

export default function MainContent() {
    return (
        <div id="main">
            <FeaturedPost />
            <Posts />
            <PaginationFooter />
        </div >
    );
}
