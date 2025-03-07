
import MainContent, { PageLinks } from "./elements";
import React from 'react';
import Image from 'next/image';

import LatteSpaceImage from "@/public/latte_space.png";


const HomePage: React.FC = () => {
    return (
        <MainContent>
            <div className="page-top">
                <p><Image className="latte-image" src={LatteSpaceImage} alt="main-image" priority /></p>
                <h1 className="title-top">Latte72</h1>
                <PageLinks />
            </div>
        </MainContent>
    );
};

export default HomePage;
