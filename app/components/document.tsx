'use client';

import styles from '@/app/styles/document.module.css';
import React from 'react';

interface DocumentProps {
    children: React.ReactNode;
}
export default function Document(props: DocumentProps) {
    return (
        <div className={styles.document}>
            {props.children}
        </div>
    );
}
