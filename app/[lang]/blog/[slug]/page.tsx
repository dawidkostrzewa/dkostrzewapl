import { BlogFields } from '../../../../components/Blog/Blog.types';
import { SingleBlogPost } from '../../../../components/Blog/SingleBlogPost/SingleBlogPost';
import { client } from '../../../../contentful/client';
import { Locale } from '../../../../i18n-config';

const getEntry = async (slug: string) => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });
    return res.items[0];
};

export default async function SingleBlogPostPage({ params }: { params: { slug: string; lang: Locale } }) {
    console.log(params.lang);
    const post = await getEntry(params.slug);

    return <SingleBlogPost entry={post} />;
}
