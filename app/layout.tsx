
import "@/app/styles/doctheme.css";

import React from 'react';
import { ReactNode } from 'react';

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata = {
    // Vercel以外のホスティングサービスを利用する場合はmetadataBaseを設定する必要がある
    metadataBase: new URL("https://latte72.net"),

    title: {
        default: "Latte72",
        template: `%s | Latte72`,
    },
    description: "Latte72's portfolio",
    alternates: {
        canonical: "https://latte72.net",
    },
    openGraph: {
        title: {
            default: "Latte72",
            template: `%s | Latte72`,
        },
        description: "Latte72's portfolio",
        url: "https://latte72.net",
        siteName: "Latte72",
        locale: "ja_JP",
        type: "website",
    },
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ja">
            <head>
                <meta name="color-scheme" content="dark" />
                <meta property="og:image" content="https://latte72.net/latte_space.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Latte72R" />
                <meta name="twitter:creator" content="@Latte72R" />
                <meta name="twitter:image" content="https://latte72.net/latte_space.png" />
                <meta name="google-site-verification" content="0emCJYzQ7kMGpSYs0rCOwGaUoVxEN8FrIp42fC9ao0w" />
            </head>
            <body>{children}</body>
        </html >
    )
}
