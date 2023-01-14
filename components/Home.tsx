import IntroAnimation from './Intro/IntroAnimation';
import styles from './Home.module.scss';
import AboutMe from './AboutMe/AboutMe';
import Technologies from './Technologies/Technologies';
import { Socials } from './Socials/Socials';
import { LatestsBlogPost } from './LatestsBlogPost/LatestsBlogPost';
import { Entry } from 'contentful';
import { BlogFields } from './Blog/Blog.types';

export const Home = ({ latestsBlogPost }: { latestsBlogPost: Entry<BlogFields> }) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-extrabold">Dawid Kostrzewa</h1>
                <h2 className="text-lg mt-2 italic capitalize  font-extrabold">software engineer</h2>
                <div className="text-sm italic mt-5">
                    Frontend Developer / JavaScript Developer / FullStack Developer
                </div>
                <div className={'lg:w-2/4 lg:mt-12 sm:w-4/4 sm:mt-4 ' + styles['img']}>
                    <IntroAnimation />
                </div>
            </div>
            <AboutMe />
            <Technologies />
            {process.env.BLOG_ENABLED && <LatestsBlogPost latestsBlogPost={latestsBlogPost} />}
            <Socials />
        </>
    );
};
