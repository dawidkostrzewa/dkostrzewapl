'use client';

import { i18n } from 'i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/');
    };

    return (
        <nav className="mx-5 py-5 flex justify-between">
            <div>
                <ul>
                    {i18n.locales.map((locale) => {
                        return (
                            <li key={locale}>
                                <Link href={redirectedPathName(locale)}>{locale}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <Link className="mr-2" href="/">
                    Home
                </Link>
                <Link href="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
