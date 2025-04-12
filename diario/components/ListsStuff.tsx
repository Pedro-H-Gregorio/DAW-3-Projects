
export default function ListsStuff() {
    return (
        <>
            <h2>Lists</h2>
            <div className="row">
                <div className="col-6 col-12-small">
                    <h3>Unordered</h3>
                    <ul>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Sagittis lorem eleifend.</li>
                        <li>Felis feugiat dolore viverra.</li>
                        <li>Dolor pulvinar etiam.</li>
                    </ul>
                    <h3>Alternate</h3>
                    <ul className="alt">
                        <li>Dolor pulvinar etiam etiam.</li>
                        <li>Sagittis adipiscing eleifend.</li>
                        <li>Felis enim dolore viverra.</li>
                        <li>Dolor pulvinar etiam etiam.</li>
                    </ul>
                </div>
                <div className="col-6 col-12-small">

                    <h3>Ordered</h3>
                    <ol>
                        <li>Dolor pulvinar etiam.</li>
                        <li>Etiam vel felis at viverra.</li>
                        <li>Felis enim feugiat magna.</li>
                        <li>Etiam vel felis nullam.</li>
                        <li>Felis enim et tempus.</li>
                    </ol>

                    <h3>Icons</h3>
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a>
                        </li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a>
                        </li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                    </ul>
                    <ul className="icons alt">
                        <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a>
                        </li>
                        <li><a href="#" className="icon brands alt fa-facebook-f"><span
                            className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands alt fa-instagram"><span
                            className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands alt fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands alt fa-dribbble"><span className="label">Dribbble</span></a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
}
