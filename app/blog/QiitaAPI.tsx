'use server';

import axios from "axios";
import { getLinkPreview } from "link-preview-js";

interface Tag {
    name: string;
}

interface Post {
    title: string;
    url: string;
    tags: Tag[];
    label: string;
    created_at: string;
    image_url: string;
    private: boolean;
}

export interface ArticleData {
    title: string;
    url: string;
    tags: string[];
    label: string;
    date: string;
}

export const getImgUrl = async (postUrl: string) => {
    try {
        const data = await getLinkPreview(postUrl);
        return (data as { images: string[] }).images[0];
    } catch (error) {
        console.error(`Failed to fetch og:image from ${postUrl}:`, error);
        return "";
    }
}

export const getAllPosts = async (): Promise<ArticleData[]> => {
    const apiUrl = `${process.env.QIITA_API_URL}?per_page=10`;

    try {
        const res = await axios.get(apiUrl, {
            headers: { Authorization: `Bearer ${process.env.QIITA_API_KEY}` },
        });

        const data: Post[] = res.data;
        const publicPosts = data.filter((post) => !post.private);

        return publicPosts.map((post: Post) => ({
            title: post.title,
            url: post.url,
            tags: post.tags.map((tag: Tag) => tag.name),
            label: 'Qiita',
            date: post.created_at,
        }));
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
};
