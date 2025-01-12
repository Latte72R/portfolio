'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Document } from '../elements';
import { ArticleData, getAllPosts, getImgUrl } from './QiitaAPI';

export interface ArticleDataPlus {
    post: ArticleData;
    children: React.ReactNode;
}

const ArticleBase = (props: ArticleDataPlus) => {
    const { post, children } = props;
    return (
        <Document>
            <Link href={post.url} target="_blank" className="qiita-link">
                <div className="qiita-article">
                    <div className="qiita-img-container">
                        {children}
                    </div>
                    <h3 className="qiita-title">{post.title}</h3>
                    <p className="qiita-date">{post.date.replace(/(\d{4})-(\d{2})-(\d{2})T.*/, "$1/$2/$3")}</p>
                    <p className="qiita-tag-container">{post.tags.map((tag, index) => (
                        <span className="qiita-tag" key={index}>{tag}</span>
                    ))}</p>
                </div>
            </Link>
        </Document>
    );
};

const Article: React.FC<{ post: ArticleData }> = ({ post }) => {
    const [imageUrl, setUrl] = React.useState<string | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const postUrl = post.url;

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const imgUrlsRef = sessionStorage.getItem("imgUrlsRef");
            if (!imgUrlsRef) {
                sessionStorage.setItem("imgUrlsRef", JSON.stringify({}));
            }
            if (Object.keys(JSON.parse(imgUrlsRef || "{}")).includes(postUrl)) {
                setUrl(JSON.parse(imgUrlsRef || "{}")[postUrl]);
                setIsLoading(false);
            } else {
                try {
                    const fetchedUrl = await getImgUrl(postUrl);
                    const imgUrls = JSON.parse(imgUrlsRef || "{}");
                    imgUrls[postUrl] = fetchedUrl;
                    sessionStorage.setItem("imgUrlsRef", JSON.stringify(imgUrls));
                    setUrl(fetchedUrl);
                } catch {
                    setUrl(null);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchData();
    }, [postUrl]);

    if (isLoading) {
        return (
            <ArticleBase post={post}>
                <div className="qiita-img-loading">

                    <div className="loading-anime"></div>
                    <h3>Now loading...</h3>
                </div>
            </ArticleBase>

        );
    } else if (!imageUrl) {
        return (
            <ArticleBase post={post}>
                <div className="qiita-img-loading">
                    <h3>No image available.</h3>
                </div>
            </ArticleBase>
        );
    } else {
        return (
            <ArticleBase post={post}>
                <Image className="qiita-image" src={imageUrl || ""} alt="thumbnail" width={1200} height={630} layout="responsive" />
            </ArticleBase>
        );
    };
}

const QiitaContent: React.FC = () => {
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
                <div className="qiita-loading">
                    <div className="loading-anime"></div>
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

export default QiitaContent;
