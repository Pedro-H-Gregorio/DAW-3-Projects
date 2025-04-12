import GenericPageContent from "./GenericPageContent";
import GenericPageHeader from "./GenericPageHeader";

export default function GenericPage() {
    return (
        <section className="post">
            <GenericPageHeader />
            <GenericPageContent />
        </section>
    );
}
