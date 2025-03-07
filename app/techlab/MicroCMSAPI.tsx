'use server';

import axios from "axios";

export interface ArticleData {
    title: string;
    link: string;
    image: string;
    date: string;
    site: string;
}

export const getAllPosts = async (): Promise<ArticleData[]> => {
    const apiUrl = `${process.env.MICROCMS_API_URL}`;

    try {
        const res = await axios.get(apiUrl, {
            headers: { "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}` },
        });

        return res.data.contents.map((content: any) => ({
            title: content.title,
            link: content.link,
            image: content.image.url,
            date: content.date,
            site: content.site,
        }));
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return [];
    }
};
