
import React from 'react';
import MainContent, { PageLinks } from "./elements";

export const metadata = {
    title: 'Not Found',
    openGraph: {
        title: 'Not Found',
    },
};

const NotFoundPage: React.FC = () => {
    return (
        <MainContent>
            <div className="not-found">
                <h1 className="not-found-h1">404 Not Found</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
}
export default NotFoundPage;

