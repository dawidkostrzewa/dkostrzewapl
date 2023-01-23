import { Entry } from 'contentful';
import { useTranslations } from 'next-intl';
import { client } from '../../contentful/client';
import { BlogFields } from '../Blog/Blog.types';
import { BlogCard } from '../Blog/BlogCard/BlogCard';
import styles from './LatestsBlogPost.module.scss';

export const LatestsBlogPost = ({ latestsBlogPost }: { latestsBlogPost: Entry<BlogFields> }) => {
    const t = useTranslations();
    if (!latestsBlogPost) return null;
    return (
        <div className="mr-auto ml-auto lg:mt-32 min-[320px]:mt-8 max-w-3xl text-justify">
            <h2 className={`text-2xl my-4 font-bold ${styles['title']}`}>{t('home.recentlyOnBlog')}</h2>
            <BlogCard entry={latestsBlogPost} isOnMainPage />
        </div>
    );
};
