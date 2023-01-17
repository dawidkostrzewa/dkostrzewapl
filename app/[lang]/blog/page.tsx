import { Blog } from 'components/Blog/Blog';
import { BlogFields } from 'components/Blog/Blog.types';
import { client } from 'contentful/client';
import { Locale } from 'i18n-config';

//
const getContentful = async (lang: Locale) => {
    console.log(lang);
    const locale = lang === 'pl' ? 'pl-PL' : 'en-US';

    const res = await client.getEntries<BlogFields>({ content_type: 'blogPost', locale: locale });
    return res.items;
};

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
    const items = await getContentful(params.lang);
    return <Blog entries={items} />;
}
