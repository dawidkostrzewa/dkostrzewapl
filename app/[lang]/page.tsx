import { useLocale } from 'next-intl';
import { BlogFields } from '../../components/Blog/Blog.types';
import { Home } from '../../components/Home';
import { client } from '../../contentful/client';

const getLatestsBlogPost = async (lang: 'pl' | 'en') => {
    const locale = lang === 'pl' ? 'pl-PL' : 'en-US';
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        locale: locale
    });
    return res.items.filter((i) => i.fields.isPublished)[0];
};

export default async function HomePage() {
    const lang = useLocale() as 'pl' | 'en';
    const latestsBlogPost = await getLatestsBlogPost(lang);
    return <Home latestsBlogPost={latestsBlogPost} />;
}
