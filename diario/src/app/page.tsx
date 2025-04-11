import Image from "next/image";
import pic01 from "/public/images/pic01.jpg";
import pic02 from "/public/images/pic02.jpg";
import pic03 from "/public/images/pic03.jpg";
import pic04 from "/public/images/pic04.jpg";
import pic05 from "/public/images/pic05.jpg";
import pic06 from "/public/images/pic06.jpg";
import pic07 from "/public/images/pic07.jpg";
import pic08 from "/public/images/pic08.jpg";
import pic09 from "/public/images/pic09.jpg";

import "./page.css";

export default function Home() {
  return (
    <div>
      <div id="main">
        {/* <!-- Featured Post --> */}
        <article className="post featured">
          <header className="major">
            <span className="date">April 25, 2017</span>
            <h2>
              <a href="#">
                {" "}
                And this is a<br /> massive headline
              </a>
            </h2>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam
              <br />
              facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
              <br />
              amet nullam sed etiam veroeros.
            </p>
          </header>
          <a href="#" className="image main">
            <Image src={pic01} alt="" width={100} height={100} />
          </a>
          <ul className="actions special">
            <li>
              <a href="#" className="button large">
                Full Story
              </a>
            </li>
          </ul>
        </article>

        {/* <!-- Posts --> */}
        <section className="posts">
          <article>
            <header>
              <span className="date">April 24, 2017</span>
              <h2>
                <a href="#">
                  {" "}
                  Sed magna
                  <br />
                  ipsum faucibus
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic02} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 22, 2017</span>
              <h2>
                <a href="#">
                  Primis eget
                  <br />
                  imperdiet lorem
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic03} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 18, 2017</span>
              <h2>
                <a href="#">
                  Ante mattis
                  <br />
                  interdum dolor
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic04} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 14, 2017</span>
              <h2>
                <a href="#">
                  Tempus sed
                  <br />
                  nulla imperdiet
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic05} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 11, 2017</span>
              <h2>
                <a href="#">
                  Odio magna
                  <br />
                  sed consectetur
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic06} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <span className="date">April 7, 2017</span>
              <h2>
                <a href="#">
                  Augue lorem
                  <br />
                  primis vestibulum
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <Image src={pic07} alt="" width={100} height={100} />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  Full Story
                </a>
              </li>
            </ul>
          </article>
        </section>

        {/* <!-- Footer --> */}
        <footer>
          <div className="pagination">
            {/* <!--<a href="#" className="previous">Prev</a>--> */}
            <a href="#" className="page active">
              1
            </a>
            <a href="#" className="page">
              2
            </a>
            <a href="#" className="page">
              3
            </a>
            <span className="extra">&hellip;</span>
            <a href="#" className="page">
              8
            </a>
            <a href="#" className="page">
              9
            </a>
            <a href="#" className="page">
              10
            </a>
            <a href="#" className="next">
              Next
            </a>
          </div>
        </footer>
      </div>

      <footer>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
