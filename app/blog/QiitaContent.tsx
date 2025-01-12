'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Document } from '../elements';
import { ArticleData, getAllPosts } from './QiitaAPI';

const Article: React.FC<{ post: ArticleData }> = ({ post }) => {
    return (
        <Document>
            <Link href={post.url} target="_blank" className="qiita-link">
                <div className="qiita-article">
                    <div className="qiita-img-container">
                        <Image className="qiita-image" src={post.image_url} alt="thumbnail" width={1200} height={630} layout="responsive" />
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
