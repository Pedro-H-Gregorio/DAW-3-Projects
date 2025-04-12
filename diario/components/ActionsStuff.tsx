export default function ActionsStuff() {
    return (
        <>
            <h3>Actions</h3>
            <ul className="actions">
                <li><a href="#" className="button primary">Primary</a></li>
                <li><a href="#" className="button">Default</a></li>
            </ul>
            <ul className="actions small">
                <li><a href="#" className="button primary small">Small</a></li>
                <li><a href="#" className="button small">Small</a></li>
            </ul>
            <div className="row">
                <div className="col-6 col-12-small">
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary">Default</a></li>
                        <li><a href="#" className="button">Default</a></li>
                    </ul>
                </div>
                <div className="col-6 col-12-small">
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary small">Small</a></li>
                        <li><a href="#" className="button small">Small</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-12-small">
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary fit">Default</a></li>
                        <li><a href="#" className="button fit">Default</a></li>
                    </ul>
                </div>
                <div className="col-6 col-12-small">
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary small fit">Small</a></li>
                        <li><a href="#" className="button small fit">Small</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
