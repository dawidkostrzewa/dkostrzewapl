import Script from 'next/script';

export const GAScript = () => {
    if (process.env.NODE_ENV === 'development') return <></>;

    return (
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-173012167-1`} />

            <Script id="GA" strategy="lazyOnload">
                {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-173012167-1', {
page_path: window.location.pathname,
});
`}
            </Script>
        </>
    );
};
