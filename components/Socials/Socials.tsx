import { useTranslations } from 'next-intl';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Socials.module.scss';

export const Socials = () => {
    const t = useTranslations();
    return (
        <div className="mr-auto ml-auto lg:mt-32 min-[320px]:mt-8 max-w-3xl text-justify">
            <h2 className={`text-2xl font-bold ${styles['title']}`}>{t('home.socials')}</h2>
            <div className="mt-6 flex justify-around">
                <a
                    href="http://twitter.com/kosDawid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all">
                    <FaTwitter size="3rem" />
                </a>
                <a
                    href="https://www.linkedin.com/in/dawid-kostrzewa-94a271150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all">
                    <FaLinkedin size="3rem" />
                </a>
                <a
                    href="https://github.com/dawidkostrzewa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all">
                    <FaGithub size="3rem" />
                </a>
                <a
                    href="https://www.instagram.com/dev.dawid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-all">
                    <FaInstagram size="3rem" />
                </a>
            </div>
        </div>
    );
};
