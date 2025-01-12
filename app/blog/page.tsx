
import '@/app/styles/blog.css'
import MainContent from "../elements";
import React from 'react';
import QiitaContent from "./QiitaContent";

export const metadata = {
    title: 'Blog',
    openGraph: {
        title: 'Blog',
    },
};

const WorksPage: React.FC = () => {
    return (
        <MainContent page="blog">
            <QiitaContent />
        </MainContent>
    );
}

export default WorksPage;
