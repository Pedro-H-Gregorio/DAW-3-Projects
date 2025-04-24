"use client";

import Action from "../common/Action";
import { deletePost } from "@/utils/api";
import Actions from "../common/Actions";
import { useState } from "react";
import MessageBox, { Message } from "../common/MessageBox";
import { useRouter } from "next/navigation";

type PostActionsProps = {
    id: string;
};

export default function PostActions({ id }: PostActionsProps) {
    const BACK_AFTER = 2000;
    const [message, setMessage] = useState<Message>({
        content: ""
    });
    const { back } = useRouter();
    return (
        <>
            <Actions>
                <Action onClick={async () => {
                    const result = await deletePost(id);
                    setMessage({
                        content: result ? "Post excluído com sucesso." : "Falha ao excluir post.",
                        positive: result
                    });
                    setTimeout(back, BACK_AFTER);
                }}>Excluir Post</Action>
            </Actions>
            <MessageBox message={message} setMessage={setMessage} />
        </>
    );
}
