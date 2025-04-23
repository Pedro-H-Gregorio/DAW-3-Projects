import List from "../common/List";

export default function ListsStuff() {
    return (
        <>
            <h2>Lists</h2>
            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>Unordered</h3>
                    <List type="unordened">
                        <li>Dolor pulvinar etiam.</li>
                        <li>Sagittis lorem eleifend.</li>
                        <li>Felis feugiat dolore viverra.</li>
                        <li>Dolor pulvinar etiam.</li>
                    </List>
                    <h3>Alternate</h3>
                    <List type="unordened" alt={true}>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Sagittis lorem eleifend.</li>
                        <li>Felis feugiat dolore viverra.</li>
                        <li>Dolor pulvinar etiam.</li>
                    </List>
                </div>
                <div className="col-6 col-12-small">
                    <h3>Ordered</h3>
                    <List type="ordened">
                        <li>Dolor pulvinar etiam.</li>
                        <li>Etiam vel felis at viverra.</li>
                        <li>Felis enim feugiat magna.</li>
                        <li>Etiam vel felis nullam.</li>
                        <li>Felis enim et tempus.</li>
                    </List>
                </div>
            </div>
        </>
    );
}
