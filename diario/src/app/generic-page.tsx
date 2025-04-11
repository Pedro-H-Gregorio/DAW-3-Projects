import "@/app/page.css";

import GenericPageContent from "../../components/GenericPageContent";
import GenericPageHeader from "../../components/GenericPageHeader";

export default function GenericPage() {
    return (
        <div id="main">
            <section className="post">
                <GenericPageHeader />
                <GenericPageContent />
            </section>
        </div>
    )
}
