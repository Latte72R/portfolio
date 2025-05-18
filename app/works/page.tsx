
import '@/app/styles/works.css';

import MainContent, { Document } from "../elements";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PortfolioImage from "@/public/image/portfolio.webp";
import TurtleImage from "@/public/image/turtle.webp";
import LaCCImage from "@/public/image/lacc.webp";
import ShilitoriImage from "@/public/image/shilitori.webp";
import EasyTurtleImage from "@/public/image/easyturtle.webp";
import LsbImage from "@/public/image/lsb.webp";
import TkWidgetsImage from "@/public/image/tkwidgets.webp";

export const metadata = {
    title: 'Works',
    openGraph: {
        title: 'Works',
    },
    alternates: {
        canonical: '/works',
    }
};

const WorksPage: React.FC = () => {
    return (
        <MainContent>
            <Document>
                <section id="turtle-graphics">
                    <h2>Turtle graphics</h2>
                    <p><Image id="image-turtle" className="works-image" src={TurtleImage} alt="Turtle Graphics Image" priority /></p>
                    <p>Documents：<Link href="https://turtle.latte72.net/" target="_blank">https://turtle.latte72.net/</Link></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/TurtleGraphics/" target="_blank">https://github.com/latte72r/TurtleGraphics/</Link></p>
                    <p>Turtle graphics は，教育現場で教師がプログラミングの基礎を教えるために作られたツールです．</p>
                    <p>このサイトでは，JavaScript を使ってウェブブラウザから簡単に Turtle Graphics を体験できるようにアレンジしました．</p>
                    <p>ユーザーはシンプルなコマンドを入力するだけで，Turtle に指示を与え，さまざまな図形を描かせることができます．</p>
                </section>
            </Document>
            <Document>
                <section id="lacc">
                    <h2>LaCC</h2>
                    <p><Image id="image-lacc" className="works-image" src={LaCCImage} alt="LaCC Image" /></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/LaCC/" target="_blank">https://github.com/latte72r/LaCC/</Link></p>
                    <p>LaCC は, C コンパイラの仕様やメモリ構造の理解を目的として開発されました.</p>
                    <p>必要最小限のコア機能だけを実装したシンプルな C コンパイラです.</p>
                </section>
            </Document>
            <Document>
                <section id="shilitori">
                    <h2>ShilitoriJS</h2>
                    <p><Image id="image-shilitori" className="works-image" src={ShilitoriImage} alt="Shilitori Image" /></p>
                    <p>Documents：<Link href="https://shilitori.latte72.net/" target="_blank">https://shilitori.latte72.net/</Link></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/Shilitori/" target="_blank">https://github.com/latte72r/Shilitori/</Link></p>
                    <p>ShilitoriJS は，JavaScript を使用した「しりとり」ゲームです．</p>
                    <p>シンプルで直感的なインターフェースを採用していて，誰でも簡単に楽しむことができます．</p>
                    <p>プレイヤーは日本語の名詞を入力し，ルールに従って単語をつなげていくことで進行します．</p>
                </section>
            </Document>
            <Document>
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <p><Image id="image-portfolio" className="works-image" src={PortfolioImage} alt="Portfolio Image" priority /></p>
                    <p>今ご覧いただいているポートフォリオです．</p>
                    <p>React, Next.js, particles.js, Vercel を用いて作成しています．</p>
                </section>
            </Document>
            <Document>
                <section id="easy-turtle">
                    <h2>EasyTurtle</h2>
                    <p><Image id="image-easyturtle" className="works-image" src={EasyTurtleImage} alt="EasyTurtle Image" /></p>
                    <p>Documents：<Link href="https://easyturtle.latte72.net/" target="_blank">https://easyturtle.latte72.net/</Link></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/EasyTurtle/" target="_blank">https://github.com/latte72r/EasyTurtle/</Link></p>
                    <p>EasyTurtle は，GUI を利用して Python の Turtle モジュールを簡単に扱えるプログラムです．</p>
                    <p>Windows と Linux 環境で動作し，値の入力とクリックだけでプログラミングが可能です．</p>
                </section>
            </Document>
            <Document>
                <section id="lsb">
                    <h2>Latte&apos;s Simple Browser</h2>
                    <p><Image id="image-lsb" className="works-image" src={LsbImage} alt="LSB Image" /></p>
                    <p>Documents：<Link href="https://lsb.latte72.net/" target="_blank">https://lsb.latte72.net/</Link></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/LSB/" target="_blank">https://github.com/latte72r/LSB/</Link></p>
                    <p>Latte&apos;s Simple Browser ( LSB ) は，独自に開発されたシンプルで軽量なブラウザです．</p>
                    <p>このプロジェクトは，ブラウザの基本機能を学びながら実装することを目的として設計されています．</p>
                </section>
            </Document>
            <Document>
                <section id="tkwidgets">
                    <h2>TkWidgets</h2>
                    <p><Image id="image-tkwidgets" className="works-image" src={TkWidgetsImage} alt="TkWidgets Image" /></p>
                    <p>GitHub：<Link href="https://github.com/latte72r/TkWidgets/" target="_blank">https://github.com/latte72r/TkWidgets/</Link></p>
                    <p><code>CheckButton</code>，<code>RadioButton</code>，<code>ToggleButton</code> などのカスタムTkinterウィジェットのコレクションです．</p>
                    <p>標準のTkinterウィジェットと比較して，デザインと機能の面でより柔軟で拡張性のあるインターフェースを提供します．</p>
                </section>
            </Document>
        </MainContent>
    );
}

export default WorksPage;
