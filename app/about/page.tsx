
import styles from "@/app/styles/about.module.css";

import MainContent from '@/app/\components/mainContent';
import Document from "@/app/components/document";
import React from 'react';
import Image from 'next/image';

import GitHubLogoWhite from '@/public/logos/github-mark-white.webp';
import XLogoWhite from '@/public/logos/x-logo-white.webp';
import QiitaLogoWhite from '@/public/logos/qiita-white-icon.webp';

import MailAddressImage from '@/public/mail-adress.webp';

export const metadata = {
    title: 'About',
    openGraph: {
        title: 'About',
    },
    alternates: {
        canonical: '/about',
    }
};

const HomePage: React.FC = () => {
    return (
        <MainContent>
            <Document>
                <h2>About Me</h2>
                <h3>はじめまして，Latte72 です．</h3>
                <p>主に Python，C/C++，JavaScript を使って開発しています．</p>
                <p>最近は低レイヤー開発（特に自作OSや自作コンパイラの開発）に興味があります．</p>
                <h3>所属</h3>
                <p>慶應義塾大学理工学部情報工学科</p>
                <p>慶應義塾大学公認サークル Computer Society</p>
                <h3>SNS Links</h3>
                <span className={styles.snsLinkSpan}>
                    <a href="https://github.com/Latte72R" className={styles.snsLink} target="_blank">
                        <Image id={styles.githubLogoWhite} src={GitHubLogoWhite} alt="G" priority />
                        @Latte72R</a>
                </span>
                <span className={styles.snsLinkSpan}>
                    <a href="https://x.com/Latte72R" className={styles.snsLink} target="_blank">
                        <Image id={styles.xLogoWhite} src={XLogoWhite} alt="X" priority />
                        @Latte72R</a>
                </span>
                <span className={styles.snsLinkSpan}>
                    <a href="https://qiita.com/Latte72R" className={styles.snsLink} target="_blank">
                        <Image id={styles.qiitaLogoWhite} src={QiitaLogoWhite} alt="Q" priority />
                        @Latte72R</a>
                </span>
            </Document>
            <Document>
                <h2>Skills</h2>
                <p>Python / C / C++</p>
                <p>HTML / CSS</p>
                <p>JavaScript/ TypeScript</p>
                <p>React / Next.js</p>
                <p>x86-64 Assembly</p>
                <p>Visual Basic for Applications</p>
                <p>Windows / Linux / WSL</p>
            </Document>
            <Document>
                <h2>Interests</h2>
                <p>低レイヤー / 自作OS / 自作ブラウザ</p>
                <p>LLVM / MLIR / 自作言語 / 自作コンパイラ</p>
                <p>自然言語処理 / Transformer / Deep Learning / 画像認識</p>
            </Document>
            <Document>
                <h2>Contacts</h2>
                <p>メールでのお問い合わせは以下のアドレスまでお願いします．</p>
                <p><Image id={styles.mailAddress} src={MailAddressImage} alt="address" priority /></p>
                <p>※ 特定電子メールの送付はお断りします．</p>
                <p>X (@Latte72R) の DirectMessage への連絡も受け付けています．</p>
            </Document>
        </MainContent>
    );
}

export default HomePage;
