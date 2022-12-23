import Link from "next/link"

const Navbar = () => {
    return <nav className="mx-5 py-5 flex justify-end">
        <Link className="mr-2" href="/">Home</Link>
        <a href="https://blog.dkostrzewa.pl/">Blog</a>
    </nav>
}

export default Navbar