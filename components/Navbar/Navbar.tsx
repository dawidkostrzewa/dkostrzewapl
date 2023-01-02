import Link from 'next/link';

const getBlogURL = () => {
    return process.env.BLOG_ENABLED ? <Link href="/blog">Blog</Link> : <a href="https://blog.dkostrzewa.pl/">Blog</a>;
};

const Navbar = () => {
    return (
        <nav className="mx-5 py-5 flex justify-end">
            <Link className="mr-2" href="/">
                Home
            </Link>
            {getBlogURL()}
        </nav>
    );
};

export default Navbar;
