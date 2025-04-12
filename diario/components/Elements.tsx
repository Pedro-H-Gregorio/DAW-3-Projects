import Actions from "./ActionsStuff";
import Blockquote from "./BlockquoteStuff";
import Box from "./BoxStuff";
import Buttons from "./ButtonsStuff";
import Definition from "./DefinitionStuff";
import Form from "./FormStuff";
import Header from "./HeaderStuff";
import Image from "./ImageStuff";
import Lists from "./ListsStuff";
import Preformatted from "./PreformattedStuff";
import Tables from "./TablesStuff";
import Text from "./TextStuff";

export default function Elements() {
    return (
        <section className="post">
            <Header />
            <Text />
            <hr />
            <Lists />
            <Definition />
            <Actions />
            <hr />
            <Blockquote />
            <hr />
            <Tables />
            <hr />
            <Buttons />
            <hr />
            <Form />
            <hr />
            <Image />
            <hr />
            <Box />
            <hr />
            <Preformatted />
        </section>
    );
}
