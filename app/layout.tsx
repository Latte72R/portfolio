
import "@/app/styles/doctheme.css";

import React from 'react';
import { ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        canonical: "/",
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
    appleWebApp: true,
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
            </head>
            <body>
                <SpeedInsights />
                {children}
            </body>
        </html >
    )
}
