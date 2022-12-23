import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Socials.module.scss'

export const Socials = () => {

    return (
    <div className="mr-auto ml-auto mt-32 max-w-3xl text-justify">
        <h2 className={`text-2xl font-bold ${styles['title']}`}>Socials</h2>
        <div className='mt-2 flex justify-around'>
            <a href="http://twitter.com/kosDawid" target="_blank" rel="noopener noreferrer">
                <FaTwitter size="3rem" />
            </a>
            <a
                href="https://www.linkedin.com/in/dawid-kostrzewa-94a271150/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin size="3rem" />
            </a>
            <a href="https://github.com/dawidkostrzewa" target="_blank" rel="noopener noreferrer">
                <FaGithub size="3rem" />
            </a>
            <a href="https://www.instagram.com/dev.dawid/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size="3rem" />
            </a>
        </div>
    </div>)

}