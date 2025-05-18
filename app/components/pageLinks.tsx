'use client';

import styles from '@/app/styles/topPage.module.css';
import React from 'react';
import Link from 'next/link';

export default function PageLinks() {
    return (
        <div className='link-button-div'>
            <Link href="/about" legacyBehavior><button className={`${styles.linkButton} ${styles.button1}`}>About</button></Link>
            <Link href="/works" legacyBehavior><button className={`${styles.linkButton} ${styles.button2}`}>Works</button></Link>
            <Link href="/techlab" legacyBehavior><button className={`${styles.linkButton} ${styles.button3}`}>TechLab</button></Link>
        </div>
    );
}
