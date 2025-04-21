
import pic01 from "/public/images/pic01.jpg";
import ResponsiveImage from "../common/ResponsiveImage";
import Actions from "../common/Actions";
import Action from "../common/Action";
import MajorHeader from "../common/MajorHeader";

const post = {
    title: "And this is a massive headline",
    date: "April 25, 2017",
    summary: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
    imageSrc: pic01
}

export default function FeaturedPost() {
    return (
        <article className="post featured">
            <MajorHeader title={post.title} date={post.date}>{post.summary}</MajorHeader>
            <ResponsiveImage wrapper={{
                component: "a", props: {
                    href: "#"
                }
            }} src={pic01} alignment="main" alt="" />
            <Actions special={true}>
                <Action size="large">Full Story</Action>
            </Actions>
        </article>
    );
}
