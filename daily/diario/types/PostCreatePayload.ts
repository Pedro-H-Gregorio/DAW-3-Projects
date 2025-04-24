type PostCreatePayload = {
    id: string;
    author: string;
    email: string;
    title: string;
    category: string;
    content: string;
    image?: File;
};
