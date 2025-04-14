import Actions from "../stuff/ActionsStuff";
import Blockquote from "../stuff/BlockquoteStuff";
import Box from "../stuff/BoxStuff";
import Buttons from "../stuff/ButtonsStuff";
import Definition from "../stuff/DefinitionStuff";
import Form from "../stuff/FormStuff";
import Header from "../stuff/HeaderStuff";
import Image from "../stuff/ImageStuff";
import Lists from "../stuff/ListsStuff";
import Preformatted from "../stuff/PreformattedStuff";
import Tables from "../stuff/TablesStuff";
import Text from "../stuff/TextStuff";


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
