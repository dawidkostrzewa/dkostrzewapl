import { BlogFields } from '../../../components/Blog/Blog.types';
import { client } from '../../../contentful/client';
import { SingleBlogPost } from '../../../components/Blog/SingleBlogPost/SingleBlogPost';

const getEntry = async (slug: string) => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });
    return res.items[0];
};

export default async function SingleBlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getEntry(params.slug);

    return <SingleBlogPost entry={post} />;
}
