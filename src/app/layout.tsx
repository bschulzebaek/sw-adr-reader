import './globals.css';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto_Flex({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Shopware ADR Reader',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Header/>

        <main>
            {children}
        </main>
        <Analytics/>
        </body>
        </html>
    );
}
