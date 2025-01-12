'use client';

import '@/app/styles/header.css';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import GitHubLogoWhite from '@/public/logos/github-mark-white.png';
import XLogoWhite from '@/public/logos/x-logo-white.png';
import QiitaIconWhite from '@/public/logos/qiita-white-icon.png';

interface SlideMenuProps {
    isOpen: boolean;
    sRef: React.RefObject<HTMLDivElement>;
}

const SlideMenu = (props: SlideMenuProps) => {
    return (
        <div className={`slide-menu ${props.isOpen ? "open" : ""}`} ref={props.sRef}>
            <p><Link href="/" className="menu-link">Top</Link></p>
            <p><Link href="/about" className="menu-link">About</Link></p>
            <p><Link href="/works" className="menu-link">Works</Link></p>
            <p><Link href="/blog" className="menu-link">Blog</Link></p>
            <div>
                <div className="sns-menu-span">
                    <Link href="https://github.com/Latte72R" target="_blank" legacyBehavior>
                        <a className="sns-menu">
                            <Image id="github-menu" src={GitHubLogoWhite} alt="G" priority />
                        </a>
                    </Link>
                </div>
                <div className="sns-menu-span">
                    <Link href="https://x.com/Latte72R" target="_blank" legacyBehavior>
                        <a className="sns-menu">
                            <Image id="x-menu" src={XLogoWhite} alt="X" priority />
                        </a>
                    </Link>
                </div>
                <div className="sns-menu-span">
                    <Link href="https://qiita.com/Latte72R" target="_blank" legacyBehavior>
                        <a className="sns-menu">
                            <Image id="qiita-menu" src={QiitaIconWhite} alt="Q" priority />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu;
