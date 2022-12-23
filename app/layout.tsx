import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="dark" lang="en">
            <head>
                <title>Dawid Kostrzewa - Software Engineer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="I am a software engineer based in Kraków, Poland. I am working on web applications including the newest frameworks and libraries such as Reach, Angular, TypeScript, NodeJS. I like to learn new things and I am looking forward to working with great people."
                />
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <Script id="GA" strategy="lazyOnload">
                    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
                </Script>
            </head>
            <body>
                <div className="bg-white dark:bg-black dark:text-white">
                    <header>
                        <Navbar />
                    </header>
                    <main className="px-8 mt-20">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
