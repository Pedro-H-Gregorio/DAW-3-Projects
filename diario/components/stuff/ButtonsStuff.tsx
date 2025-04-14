import { FaDownload, FaSearch } from "react-icons/fa";
import Action from "../common/Action";
import Actions from "../common/Actions";

export default function ButtonsStuff() {
    return (
        <>
            <h2>Buttons</h2>
            <Actions>
                <Action primary={true}>Primary</Action>
                <Action>Default</Action>
            </Actions>
            <Actions>
                <Action primary={true} size="large">Large</Action>
                <Action>Default</Action>
                <Action size="small">Small</Action>
            </Actions>
            <Actions fit={true}>
                <Action primary={true}>Fit</Action>
                <Action>Fit</Action>
            </Actions>
            <Actions fit={true} size="small">
                <Action primary={true}>Fit + Small</Action>
                <Action>Fit + Small</Action>
            </Actions>
            <ul className="actions">
                <li>
                    <a href="#" className="button primary icon solid fa-search" >
                        <FaSearch className="icon before" style={{ fontSize: "1rem" }} />
                        Icon
                    </a>
                </li>
                <li>
                    <a href="#" className="button icon" style={{ display: "flex" }}>
                        <FaDownload className="icon before icon_solid_before" style={{ height: "100%" }} />
                        Icon
                    </a>
                </li>
            </ul>
            <Actions>
                <Action primary={true} disabled={true}>Primary</Action>
                <Action disabled={true}>Default</Action>
            </Actions>
        </>
    );
}
