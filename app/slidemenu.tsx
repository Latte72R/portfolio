'use client';

import '@/app/styles/header.css';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import GitHubLogoWhite from '@/public/logos/github-mark-white.webp';
import XLogoWhite from '@/public/logos/x-logo-white.webp';
import QiitaIconWhite from '@/public/logos/qiita-white-icon.webp';

interface SlideMenuProps {
    isOpen: boolean;
    sRef: React.RefObject<HTMLDivElement | null>;
}

const SlideMenu = (props: SlideMenuProps) => {
    return (
        <div className={`slide-menu ${props.isOpen ? "open" : ""}`} ref={props.sRef}>
            <p><Link href="/" className="menu-link">Top</Link></p>
            <p><Link href="/about" className="menu-link">About</Link></p>
            <p><Link href="/works" className="menu-link">Works</Link></p>
            <p><Link href="/techlab" className="menu-link">TechLab</Link></p>
            <div className="divider"></div>
            <p><Link href="https://turtle.latte72.net" className="menu-link" target="_blank">TurtleGraphics</Link></p>
            <p><Link href="https://shilitori.latte72.net" className="menu-link" target="_blank">Shilitori</Link></p>
            <p><Link href="https://easyturtle.latte72.net" className="menu-link" target="_blank">EasyTurtle</Link></p>
            <div className="divider"></div>
            <div>
                <div className="sns-menu-span">
                    <Link href="https://github.com/Latte72R" legacyBehavior>
                        <a className="sns-menu" target="_blank">
                            <Image id="github-menu" src={GitHubLogoWhite} alt="G" priority={false} />
                        </a>
                    </Link>
                </div>
                <div className="sns-menu-span">
                    <Link href="https://x.com/Latte72R" legacyBehavior>
                        <a className="sns-menu" target="_blank">
                            <Image id="x-menu" src={XLogoWhite} alt="X" priority={false} />
                        </a>
                    </Link>
                </div>
                <div className="sns-menu-span">
                    <Link href="https://qiita.com/Latte72R" legacyBehavior>
                        <a className="sns-menu" target="_blank">
                            <Image id="qiita-menu" src={QiitaIconWhite} alt="Q" priority={false} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu;
