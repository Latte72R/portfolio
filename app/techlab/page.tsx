
import MainContent from "@/app/components/mainContent";
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
