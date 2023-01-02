import { BlogFields } from '../../../components/Blog/Blog.types';
import { client } from '../../../contentful/client';
import ReactMarkdown from 'react-markdown';

const getEntry = async (slug: string) => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });
    return res.items[0];
};

export default async function SingleBlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getEntry(params.slug);
    return (
        <article>
            <h1>{post.fields['title']}</h1>
            <ReactMarkdown>{post.fields.post}</ReactMarkdown>
        </article>
    );
}
