import { useEffect, useRef } from "react";
import Box from "./Box";

export type Message = {
    positive?: boolean;
    content: string;
};

type MessageBoxProps = {
    message: Message;
    persistenceTime?: number;
    setMessage: (message: Message) => void;
};

export default function MessageBox({ persistenceTime = 3000, message, setMessage }: MessageBoxProps) {
    const messageDivRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (message && messageDivRef.current) {
            setTimeout(() => {
                messageDivRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                messageDivRef.current?.focus();
            }, 0);
            setTimeout(() => setMessage({ content: "" }), persistenceTime);
        }
    }, [message]);

    return (
        message.content.length ? (
            <div className="col-12" ref={messageDivRef} >
                <Box style={
                    message.positive ? {
                        backgroundColor: "#dff0d8",
                        borderColor: "#d6e9c6"
                    } : {
                        backgroundColor: "#f2dede",
                        borderColor: "#ebccd1"
                    }
                }>
                    <h3 style={{
                        color: message.positive ? "#3c763d" : "#a94442"
                    }}>{message.content}</h3>
                </Box>
            </div>
        ) : null
    );


}
