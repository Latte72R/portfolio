'use client';

import styles from '@/app/styles/mainContent.module.css';

import React from 'react';

import { useEffect, useState, useRef } from 'react';

import SlideMenu from '@/app/components/slidemenu';
import Header from '@/app/components/header';

interface Window {
    pJSDom: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
}
declare let window: Window;

const Particles = () => {
    useEffect(() => {
        import('@/app/particles').then(particlesJS => {
            window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
            window.pJSDom = [];
            particlesJS.default.load(styles.particlesJS, '/particles.json', function () {
                console.log('callback - particles.js config loaded');
            });
        });
    }, []);
    return <div id={styles.particlesJS}></div>;
}

const MainContent = (props: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const slideRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={styles.main}>
            <SlideMenu isOpen={isOpen} sRef={slideRef} />
            <Header setIsOpen={setIsOpen} isOpen={isOpen} sRef={slideRef} />
            <div className={styles.blank}></div>
            <Particles />
            {props.children}
            <Footer />
        </div>
    );
}
export default MainContent;

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>&copy; 2025 Latte72. All rights reserved.</p>
        </div>
    );
}

