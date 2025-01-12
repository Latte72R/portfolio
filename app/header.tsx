'use client';

import '@/app/styles/header.css';

import Link from 'next/link';
import React from 'react';

import { useEffect, useRef } from 'react';

interface HeaderProps {
    sRef: React.RefObject<HTMLDivElement>;
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}
const Header = (props: HeaderProps) => {
    const buttonRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const handleMouseEvent = (e: MouseEvent) => {
            if (buttonRef.current && props.sRef.current) {
                const bRect = buttonRef.current.getBoundingClientRect();
                const sRect = props.sRef.current.getBoundingClientRect();
                let isInside: boolean = false;
                if (window.matchMedia("(max-width: 1023px)").matches) {
                    if (!props.isOpen) {
                        isInside = (e.clientX >= bRect.left && e.clientX <= bRect.right && e.clientY >= bRect.top && e.clientY <= bRect.bottom);
                    } else {
                        isInside =
                            (e.clientX >= bRect.left && e.clientX <= bRect.right && e.clientY >= bRect.top && e.clientY <= bRect.bottom) ||
                            (e.clientX >= sRect.left && e.clientX <= sRect.right && e.clientY >= sRect.top && e.clientY <= sRect.bottom);
                    }
                } else {
                    if (!props.isOpen) {
                        isInside = (e.clientX >= bRect.left && e.clientX <= bRect.right && e.clientY >= bRect.top && e.clientY <= bRect.bottom);
                    } else {
                        if (e.clientY >= bRect.top && e.clientY <= sRect.top) {
                            const left = sRect.left + (bRect.left - sRect.left) * (sRect.top - e.clientY) / (sRect.top - bRect.top);
                            const right = bRect.right + (sRect.right - bRect.left) * (e.clientY - bRect.top) / (sRect.top - bRect.top);
                            isInside =
                                (e.clientX >= left && e.clientX <= right) ||
                                (e.clientX >= bRect.left && e.clientX <= bRect.right && e.clientY >= bRect.top && e.clientY <= bRect.bottom);
                        } else if (e.clientY >= sRect.top && e.clientY <= sRect.bottom) {
                            isInside = (e.clientX >= sRect.left && e.clientX <= sRect.right);
                        }
                    }
                }
                props.setIsOpen(isInside);
            }
        };

        window.addEventListener("mousemove", handleMouseEvent);
    }, [props, buttonRef, props.sRef]);

    return (
        <div className="header">
            <Link href="/" legacyBehavior><a className="header-title">Latte72</a></Link>
            <svg className={`hamburger-menu ${props.isOpen ? "open" : ""}`} viewBox="0 0 500 500" onClick={() => props.setIsOpen(!props.isOpen)} ref={buttonRef}>
                <path className="border1 border"
                    d="M44.6,151.6h409.9c18.9,0,34.2-15.2,34.2-34.1c0-18.8-15.3-34-34.2-34H44.6c-18.8,0-34.1,15.2-34.1,34 C10.4,136.4,25.7,151.6,44.6,151.6z" />
                <path className="border2 border"
                    d="M454.5,219.9H44.5c-18.8,0-34.1,15.3-34.1,34.1c0,18.9,15.3,34.2,34.1,34.2h409.9c18.9,0,34.2-15.3,34.2-34.2 C488.7,235.2,473.3,219.9,454.5,219.9z" />
                <path className="border3 border"
                    d="M454.5,356.7H44.5c-18.8,0-34.1,15.2-34.1,34.1c0,18.8,15.3,34.1,34.1,34.1h409.9c18.9,0,34.2-15.3,34.2-34.1 S473.3,356.7,454.5,356.7z" />
            </svg>
        </div>
    );
}

export default Header;
