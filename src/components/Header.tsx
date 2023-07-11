'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();

    return (
        <header>
            {path !== '/' ? <a href="/">Back</a> : null}
        </header>
    );
}