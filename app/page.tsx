
import styles from '@/app/styles/topPage.module.css';

import MainContent from "@/app/components/mainContent";
import PageLinks from "@/app/components/pageLinks";
import React from 'react';
import Image from 'next/image';

import LatteSpaceImage from "@/public/latte_space.png";


const HomePage: React.FC = () => {
    return (
        <MainContent>
            <div className={styles.pageTop}>
                <p><Image className={styles.latteImage} src={LatteSpaceImage} alt="main-image" priority /></p>
                <h1 className={styles.titleTop}>Latte72</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
};

export default HomePage;
