import Footer from '../../components/Footer/Footer';
import { GAScript } from '../../components/GAScript/GAScript';
import Navbar from '../../components/Navbar/Navbar';
import '../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="dark h-full" lang="en">
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
