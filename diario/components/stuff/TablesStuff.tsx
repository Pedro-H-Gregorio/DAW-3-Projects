import Table from "../common/Table";

export default function TablesStuff() {
    return (
        <>
            <h2>Table</h2>
            <h3>Default</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item 1</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                    </tr>
                    <tr>
                        <td>Item 4</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                    </tr>
                    <tr>
                        <td>Item 5</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}></td>
                        <td>100.00</td>
                    </tr>
                </tfoot>
            </Table>
            <h3>Alternate</h3>
            <Table alt={true}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item 1</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                    </tr>
                    <tr>
                        <td>Item 4</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                    </tr>
                    <tr>
                        <td>Item 5</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}></td>
                        <td>100.00</td>
                    </tr>
                </tfoot>
            </Table>
        </>
    );
}
