'use client';

import styles from '@/app/styles/techlab.module.css'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Document from '@/app/components/document';
import { ArticleData, getAllPosts } from './MicroCMSAPI';
import QiitaLogo from '@/public/logo-color/qiita-icon.webp';
import SpeakerDeckLogo from '@/public/logo-color/speakerdeck-icon.webp';

export interface ArticleDataPlus {
    post: ArticleData;
    children: React.ReactNode;
}

const ContentSite: React.FC<{ site: string }> = ({ site }) => {
    switch (site) {
        case "Qiita":
            return (
                <span className={styles.contentSite}>
                    <Image className={styles.siteLogo} src={QiitaLogo} alt="" priority />Qiita
                </span>);
        case "SpeakerDeck":
            return (
                <span className={styles.contentSite}>
                    <Image className={styles.siteLogo} src={SpeakerDeckLogo} alt="" priority />SpeakerDeck
                </span>);
        default:
            return (
                <span className={styles.contentSite}>
                    {site}
                </span>);
    }
}

const ConvertJST = (date: string) => {
    const time: Date = new Date(date);
    return time.toLocaleDateString("ja-JP", {
        year: "numeric", month: "2-digit",
        day: "2-digit"
    });
}

const ArticleBase = (props: ArticleDataPlus) => {
    const { post, children } = props;
    return (
        <Document>
            <Link href={post.link} target="_blank" className={styles.contentLink}>
                <div className={styles.contentArticle}>
                    <div className={styles.contentImageContainer}>
                        {children}
                    </div>
                    <h3 className={styles.contentTitle}>{post.title}</h3>
                    <div className={styles.contentDetails}>
                        <span className={styles.contentDate}>{ConvertJST(post.date)}</span>
                        <ContentSite site={post.site} />
                    </div>
                </div>
            </Link>
        </Document>
    );
};

const Article: React.FC<{ post: ArticleData }> = ({ post }) => {
    return (
        <ArticleBase post={post}>
            <Image className={styles.contentImage} src={post.image} alt="thumbnail" width={1200} height={630} layout="responsive" />
        </ArticleBase>
    );
}

const CreateContent: React.FC = () => {
    const [posts, setPosts] = React.useState<ArticleData[] | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const postsRef = sessionStorage.getItem("postsRef");
            if (postsRef) {
                setPosts(JSON.parse(postsRef));
                setIsLoading(false);
            } else {
                try {
                    const fetchedPosts = await getAllPosts();
                    sessionStorage.setItem("postsRef", JSON.stringify(fetchedPosts));
                    setPosts(fetchedPosts);
                } catch {
                    setPosts(null);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Document>
                <div className={styles.contentLoading}>
                    <div className={styles.loadingAnime}></div>
                    <h3>Now loading...</h3>
                </div>
            </Document>
        );
    } else if (!posts || posts.length === 0) {
        return (
            <Document>
                <h3>No posts available.</h3>
            </Document>
        );
    } else {
        return (
            <>
                {posts.map((post, index) => (
                    <Article key={index} post={post} />
                ))}
            </>
        );
    }
};

export default CreateContent;
