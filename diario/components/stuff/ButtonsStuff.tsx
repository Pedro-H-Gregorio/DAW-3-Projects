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
            <Actions>
                <Action
                    icon={{
                        element: FaSearch,
                        solid: true,
                    }}
                    primary={true}
                >Icon</Action>
                <Action
                    icon={{
                        element: FaDownload,
                        solid: true,
                    }}
                >Icon</Action>
            </Actions >
            <Actions>
                <Action primary={true} disabled={true}>Primary</Action>
                <Action disabled={true}>Default</Action>
            </Actions>
        </>
    );
}
