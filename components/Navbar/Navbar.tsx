import clsx from 'clsx';
import { LocalizedLink, useLocale } from 'next-intl';

const Navbar = () => {
    const locale = useLocale();

    return (
        <nav className="mx-5 py-5 flex justify-between">
            <div>
                <ul>
                    <LocalizedLink href="/" locale="pl" className={clsx({ underline: locale === 'pl' })}>
                        PL
                    </LocalizedLink>
                    <LocalizedLink href="/" locale="en" className={clsx({ underline: locale === 'en' })}>
                        EN
                    </LocalizedLink>
                </ul>
            </div>
            <div>
                <LocalizedLink className="mr-2" href="/" locale={locale}>
                    Home
                </LocalizedLink>
                <LocalizedLink href="/blog" locale={locale}>
                    Blog
                </LocalizedLink>
            </div>
        </nav>
    );
};

export default Navbar;
