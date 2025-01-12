'use server';
import ky from "ky";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM();

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
    const res = await ky.get(postUrl);
    const text = await res.text();
    const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
    const headEls = el.head.children;
    for (let i = 0; i < headEls.length; i++) {
        const prop = headEls[i].getAttribute("property");
        if (!prop) continue;
        if (prop === "og:image") {
            return headEls[i].getAttribute("content") || "";
        }
    }
    return "";
}

export const getAllPosts = async (): Promise<ArticleData[]> => {
    const apiUrl = `${process.env.QIITA_API_URL}?per_page=10`;
    const res = await ky.get(apiUrl, {
        headers: { Authorization: `Bearer ${process.env.QIITA_API_KEY}` },
    });
    const data: Post[] = await res.json();
    const publicPosts = data.filter((post) => !post.private);

    /*
    for (let i = 0; i < publicPosts.length; i++) {
        const res = await ky.get(publicPosts[i].url);
        const text = await res.text();
        const el = new jsdom.window.DOMParser().parseFromString(text, "text/html");
        const headEls = el.head.children;
        Array.from(headEls).map((v) => {
            const prop = v.getAttribute("property");
            if (!prop) return;
            if (prop === "og:image") {
                publicPosts[i].image_url = v.getAttribute("content") || '';
            }
        });
    }
    */

    return publicPosts.map((post: Post) => ({
        title: post.title,
        url: post.url,
        tags: post.tags.map((tag: Tag) => tag.name),
        label: 'Qiita',
        date: post.created_at,
    }));
};

