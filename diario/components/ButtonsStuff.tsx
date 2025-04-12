export default function Buttons() {
    return (
        <>
            <h2>Buttons</h2>
            <ul className="actions">
                <li><a href="#" className="button primary">Primary</a></li>
                <li><a href="#" className="button">Default</a></li>
            </ul>
            <ul className="actions">
                <li><a href="#" className="button primary large">Large</a></li>
                <li><a href="#" className="button">Default</a></li>
                <li><a href="#" className="button small">Small</a></li>
            </ul>
            <ul className="actions fit">
                <li><a href="#" className="button primary fit">Fit</a></li>
                <li><a href="#" className="button fit">Fit</a></li>
            </ul>
            <ul className="actions fit small">
                <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                <li><a href="#" className="button fit small">Fit + Small</a></li>
            </ul>
            <ul className="actions">
                <li><a href="#" className="button primary icon solid fa-search">Icon</a></li>
                <li><a href="#" className="button icon solid fa-download">Icon</a></li>
            </ul>
            <ul className="actions">
                <li><span className="button primary disabled">Primary</span></li>
                <li><span className="button disabled">Default</span></li>
            </ul>

        </>
    );
}
