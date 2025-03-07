
import '@/app/styles/techlab.css'
import MainContent from "../elements";
import React from 'react';
import CreateContent from "./CreateContent";

export const metadata = {
    title: 'TechLab',
    openGraph: {
        title: 'TechLab',
    },
    alternates: {
        canonical: '/techlab',
    }
};

const WorksPage: React.FC = () => {
    return (
        <MainContent>
            <CreateContent />
        </MainContent>
    );
}

export default WorksPage;
