import { PostResponse } from "./PostResponse";

export type PostListResponse = {
    data: PostResponse[];
    limit: number;
    page: number;
    total: number;
};

