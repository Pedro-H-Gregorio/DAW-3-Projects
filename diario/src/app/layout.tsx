import type { Metadata } from "next";
import "./globals.css";
import Intro from "../../components/misc/Intro";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Copyright from "../../components/misc/Copyright";
import Navigation from "../../components/layout/Navigation";
import Wrapper from "@/components/layout/Wrapper";

export const metadata: Metadata = {
    title: "Dialy",
    description: "Diário para suas postagens",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pages = [
        { route: "/", title: "Diário" },
        { route: "/post", title: "Postagem", hidden: true },
        { route: "/new", title: "Nova Postagem", hidden: true },
    ];

    return (
        <html lang="pt-br">
            <body className="is-preload">
                <Wrapper>
                    <Intro />
                    <Header />
                    <Navigation items={pages} />
                    <div id="main">{children}</div>
                    <Footer />
                    <Copyright />
                </Wrapper>
            </body>
        </html>
    );
}
