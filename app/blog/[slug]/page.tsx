import { BlogFields } from '../../../components/Blog/Blog.types';
import { client } from '../../../contentful/client';

const getEntry = async (slug: string) => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });
    return res.items[0];
};

export default async function SingleBlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getEntry(params.slug);
    return <h1>{post.fields['title']}</h1>;
}
