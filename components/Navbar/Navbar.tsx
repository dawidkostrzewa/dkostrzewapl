import clsx from 'clsx';
import { LocalizedLink, useLocale } from 'next-intl';

const Navbar = () => {
    const locale = useLocale();

    return (
        <nav className="mx-5 py-5 flex justify-between">
            <div>
                <LocalizedLink href="/" locale="pl" className={clsx({ 'font-bold': locale === 'pl' }, 'mr-2')}>
                    PL
                </LocalizedLink>
                <LocalizedLink href="/" locale="en" className={clsx({ 'font-bold': locale === 'en' })}>
                    EN
                </LocalizedLink>
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
