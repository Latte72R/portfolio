'use client';

import '@/app/styles/header.css';

import Link from 'next/link';
import React from 'react';

import { useEffect, useState, useRef } from 'react';

import SlideMenu from './slidemenu';
import Header from './header';

interface Window {
    pJSDom: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
}
declare let window: Window;

const Particles = () => {
    useEffect(() => {
        import('./particles').then(particlesJS => {
            window.pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS());
            window.pJSDom = [];
            particlesJS.default.load('particles-js', '/particles.json', function () {
                console.log('callback - particles.js config loaded');
            });
        });
    }, []);
    return <div id="particles-js"></div>;
}

const MainContent = (props: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const slideRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className="main">
            <SlideMenu isOpen={isOpen} sRef={slideRef} />
            <Header setIsOpen={setIsOpen} isOpen={isOpen} sRef={slideRef} />
            <div className="blank"></div>
            <Particles />
            {props.children}
            <Footer />
        </div>
    );
}
export default MainContent;

interface DocumentProps {
    children: React.ReactNode;
}
const Document = (props: DocumentProps) => {
    return (
        <div className="document">
            {props.children}
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2025 Latte72. All rights reserved.</p>
        </div>
    );
}

const PageLinks = () => {
    return (
        <div className='link-button-div'>
            <Link href="/about" legacyBehavior><button className="link-button button1">About</button></Link>
            <Link href="/works" legacyBehavior><button className="link-button button2">Works</button></Link>
            <Link href="/techlab" legacyBehavior><button className="link-button button3">TechLab</button></Link>
        </div>
    );
}
export { Document, PageLinks };

