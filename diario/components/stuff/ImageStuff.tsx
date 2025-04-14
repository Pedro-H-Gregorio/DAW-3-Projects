import ResponsiveImage from "../common/ResponsiveImage";

import pic01 from "/public/images/pic01.jpg";
import pic02 from "/public/images/pic02.jpg";
import pic03 from "/public/images/pic03.jpg";
import pic04 from "/public/images/pic04.jpg";
import pic08 from "/public/images/pic08.jpg";
import pic09 from "/public/images/pic09.jpg";

export default function ImageStuff() {
    return (
        <>
            <h2>Image</h2>
            <h3>Fit</h3>
            <ResponsiveImage wrapper={"span"} src={pic01} alt="" />
            <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic02} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic02} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic03} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic04} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic02} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic03} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic03} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic04} alt="" />
                    </div>
                    <div className="col-4">
                        <ResponsiveImage wrapper={"span"} src={pic02} alt="" />
                    </div>
                </div>
            </div>

            <h3>Left &amp; Right</h3>
            <p>
                <ResponsiveImage wrapper={"span"} alignment="left" src={pic08} alt="" />
                Lorem ipsum dolor sit accumsan
                interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
                faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
                ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
                ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis
                in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit
                adipiscing eu felis iaculis.</p>
            <p>
                <ResponsiveImage wrapper={"span"} alignment="right" src={pic09} alt="" />
                Lorem ipsum dolor sit accumsan
                interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
                faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
                ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer
                ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis
                in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
                faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit
                adipiscing eu felis iaculis.</p>
        </>
    );
}
