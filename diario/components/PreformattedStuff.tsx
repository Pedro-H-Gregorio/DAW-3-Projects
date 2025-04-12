
const code = `i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';
`;

export default function PreformattedStuff() {
    return (
        <>
            <h2>Preformatted</h2>
            <pre>
                <code>{code}</code>
            </pre>
        </>
    );
}
