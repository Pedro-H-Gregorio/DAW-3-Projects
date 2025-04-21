
type MajorHeaderProps = {
    title: string;
    date: string;
    children: string;
};

export default function MajorHeader({ title, date, children }: MajorHeaderProps) {
    return (
        <header className="major">
            <span className="date">{date}</span>
            <h2 style={{
                textWrap: "balance",
                paddingLeft: "10%",
                paddingRight: "10%"
            }}>
                <a href="#">{title}</a>
            </h2>
            <p style={{
                textWrap: "balance",
            }}>{children}</p>
        </header >
    );
}
