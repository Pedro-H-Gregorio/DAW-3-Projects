import Action from "../common/Action";
import Actions from "../common/Actions";

export default function ActionsStuff() {
    return (
        <>
            <h3>Actions</h3>
            <Actions>
                <Action primary={true}>Primary</Action>
                <Action>Default</Action>
            </Actions>
            <Actions size="small">
                <Action primary={true}>Small</Action>
                <Action>Small</Action>
            </Actions>
            <div className="row">
                <div className="col-6 col-12-small">
                    <Actions stacked={true}>
                        <Action primary={true}>Default</Action>
                        <Action>Default</Action>
                    </Actions>
                </div>
                <div className="col-6 col-12-small">
                    <Actions stacked={true} size="small">
                        <Action primary={true}>Small</Action>
                        <Action>Small</Action>
                    </Actions>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-12-small">
                    <Actions stacked={true}>
                        <Action primary={true} fit={true}>Default</Action>
                        <Action fit={true}>Default</Action>
                    </Actions>
                </div>
                <div className="col-6 col-12-small">
                    <Actions stacked={true} >
                        <Action primary={true} fit={true} size="small">Small</Action>
                        <Action fit={true} size="small">Small</Action>
                    </Actions>
                </div>
            </div>
        </>
    );
}
