import GenericContent from "./GenericContent";
import GenericHeader from "./GenericHeader";

export default function Generic() {
    return (
        <section className="post">
            <GenericHeader />
            <GenericContent />
        </section>
    );
}
