import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import Footer from '../../components/Footer/Footer';
import { GAScript } from '../../components/GAScript/GAScript';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/globals.css';

type Props = {
    children: ReactNode;
    params: { lang: string };
};

export default function RootLayout({ children, params }: Props) {
    const locale = useLocale();
    if (params.lang !== locale) {
        notFound();
    }

    return (
        <html className="dark h-full" lang={params.lang}>
            <body className="min-h-full">
                <div className="bg-white dark:bg-black dark:text-white min-h-screen">
                    <Navbar />
                    <main className="px-8 mt-20">{children}</main>
                    <Footer />
                    <GAScript />
                </div>
            </body>
        </html>
    );
}
