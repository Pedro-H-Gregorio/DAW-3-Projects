import Actions from "@/components/stuff/ActionsStuff";
import Blockquote from "@/components/stuff/BlockquoteStuff";
import Box from "@/components/stuff/BoxStuff";
import Buttons from "@/components/stuff/ButtonsStuff";
import Definition from "@/components/stuff/DefinitionStuff";
import Form from "@/components/stuff/FormStuff";
import Header from "@/components/stuff/HeaderStuff";
import Image from "@/components/stuff/ImageStuff";
import Lists from "@/components/stuff/ListsStuff";
import Preformatted from "@/components/stuff/PreformattedStuff";
import Tables from "@/components/stuff/TablesStuff";
import Text from "@/components/stuff/TextStuff";


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
