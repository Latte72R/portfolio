'use client';

import styles from '@/app/styles/slideMenu.module.css';

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
        <div className={`${styles.slideMenu} ${props.isOpen ? styles.open : ""}`} ref={props.sRef}>
            <p><Link href="/" className={styles.menuLink}>Top</Link></p>
            <p><Link href="/about" className={styles.menuLink}>About</Link></p>
            <p><Link href="/works" className={styles.menuLink}>Works</Link></p>
            <p><Link href="/techlab" className={styles.menuLink}>TechLab</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="https://turtle.latte72.net" className={styles.menuLink} target="_blank">TurtleGraphics</Link></p>
            <p><Link href="https://shilitori.latte72.net" className={styles.menuLink} target="_blank">Shilitori</Link></p>
            <p><Link href="https://easyturtle.latte72.net" className={styles.menuLink} target="_blank">EasyTurtle</Link></p>
            <div className={styles.divider}></div>
            <div>
                <div className={styles.snsMenuSpan}>
                    <Link href="https://github.com/Latte72R" legacyBehavior>
                        <a className={styles.snsMenu} target="_blank">
                            <Image id={styles.githubMenu} src={GitHubLogoWhite} alt="G" priority={false} />
                        </a>
                    </Link>
                </div>
                <div className={styles.snsMenuSpan}>
                    <Link href="https://x.com/Latte72R" legacyBehavior>
                        <a className={styles.snsMenu} target="_blank">
                            <Image id={styles.xMenu} src={XLogoWhite} alt="X" priority={false} />
                        </a>
                    </Link>
                </div>
                <div className={styles.snsMenuSpan}>
                    <Link href="https://qiita.com/Latte72R" legacyBehavior>
                        <a className={styles.snsMenu} target="_blank">
                            <Image id={styles.qiitaMenu} src={QiitaIconWhite} alt="Q" priority={false} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu;
