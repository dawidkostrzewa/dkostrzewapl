import { BlogFields } from '../../../components/Blog/Blog.types';
import { client } from '../../../contentful/client';

const getEntryTitle = async (slug: string) => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });
    return res.items[0].fields.title;
};

export default async function Head({ params }: { params: { slug: string } }) {
    const title = await getEntryTitle(params.slug);
    return (
        <>
            <title>{`${title} | Dawid Kostrzewa - Software Engineer`}</title>
        </>
    );
}
