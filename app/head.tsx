import Script from 'next/script';

export default function Head() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
                name="description"
                content="I am a software engineer based in Kraków, Poland. I am working on web applications including the newest frameworks and libraries such as Reach, Angular, TypeScript, NodeJS. I like to learn new things and I am looking forward to working with great people."
            />
            <title>Dawid Kostrzewa - Software Engineer</title>

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

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
        </>
    );
}
