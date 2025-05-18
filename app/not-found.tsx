
import styles from '@/app/styles/topPage.module.css';

import React from 'react';
import MainContent from "@/app/components/mainContent";
import PageLinks from "@/app/components/pageLinks";

export const metadata = {
    title: 'Not Found',
    openGraph: {
        title: 'Not Found',
    },
};

const NotFoundPage: React.FC = () => {
    return (
        <MainContent>
            <div className={styles.notFound}>
                <h1 className={styles.notFoundH1}>404 Not Found</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
}
export default NotFoundPage;

