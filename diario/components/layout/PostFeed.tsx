'use client';

import useSWR from 'swr';
import Post from '@/components/misc/Post';
import Posts from '@/components/misc/Posts';
import Pagination from '@/components/common/Pagination';
import { fetchPosts, parsePosts } from '@/utils/api';
import { useEffect } from 'react';

import { mutate } from 'swr';

export default function PostFeed({ page }: { page: number }) {
    const fetcher = (_key: string) => fetchPosts(page);
    const { data, error, isLoading } = useSWR("/api/posts", fetcher, {
        refreshInterval: 5000, // Atualiza a cada 5s (ajuste conforme necessário)
    });

    useEffect(() => {
        mutate("/api/posts");
    }, [page]);

    if (error) return <h2>Erro ao carregar posts.</h2>;
    if (isLoading || !data) return <h2>Carregando...</h2>;

    const totalPage = Math.ceil(data.total / data.limit) || 1;
    const parsedPosts = parsePosts(data.data);
    const featuredPost = parsedPosts.length ? parsedPosts[0] : null;

    return (
        <>
            {featuredPost ? (
                <>
                    <Post {...featuredPost} featured={true}>
                        {featuredPost.summary}
                    </Post>
                    <Posts posts={parsedPosts.slice(1)} />
                </>
            ) : (
                <header>
                    <h2>Ops! Parece que ainda não há<br />nenhuma postagem aqui.</h2>
                </header>
            )}
            <footer>
                <Pagination pages={Array.from({ length: totalPage }, (_x, i) => i + 1)} maxNumberPages={6} />
            </footer>
        </>
    );
}
