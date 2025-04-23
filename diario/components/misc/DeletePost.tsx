"use client";

import Action from "../common/Action";
import { deletePost } from "@/utils/api";

type DeletePostProps = {
    id: string;
};

export default function DeletePost({ id }: DeletePostProps) {
    return (
        <>
            <Action onClick={() => deletePost(id)}>Excluir Post</Action>
        </>
    );
}
