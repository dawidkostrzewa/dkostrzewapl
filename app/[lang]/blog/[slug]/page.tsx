import { BlogFields } from '../../../../components/Blog/Blog.types';
import { SingleBlogPost } from '../../../../components/Blog/SingleBlogPost/SingleBlogPost';
import { client } from '../../../../contentful/client';
import { Locale } from '../../../../i18n-config';

const getEntry = async (slug: string, lang: Locale) => {
    const locale = lang === 'pl' ? 'pl-PL' : 'en-US';
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug,
        locale: locale
    });

    const id = res.items[0]?.sys.id;
    // const singlePost = await client.getEntry(id, { locale: '*' });

    return res.items[0];
};

export default async function SingleBlogPostPage({ params }: { params: { slug: string; lang: Locale } }) {
    const post = await getEntry(params.slug, params.lang);
    return <SingleBlogPost entry={post} />;
}
