import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="dark h-full" lang="en">
            <body className="min-h-full">
                <div className="bg-white dark:bg-black dark:text-white min-h-screen">
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
