import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className='dark'>
            <head>
                <title>Dawid Kostrzewa - Software Engineer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <div className="bg-white dark:bg-black dark:text-white">
                    <header>
                       <Navbar/>
                    </header>
                    <main className='px-8 mt-20'>
                    {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
