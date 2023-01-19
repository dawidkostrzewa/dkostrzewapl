import { BlogFields } from '../../../../components/Blog/Blog.types';
import { GAScript } from '../../../../components/GAScript/GAScript';
import { client } from '../../../../contentful/client';

const getEntryTitle = async (slug: string) => {
    console.log(slug);
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost',
        'fields.slug': slug
    });

    return res.items[0]?.fields || { title: '', excerpt: '' };
};

export default async function Head({ params }: { params: { slug: string } }) {
    const { title, excerpt } = await getEntryTitle(params.slug);
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={excerpt} />
            <title>{`${title} | Dawid Kostrzewa - Software Engineer`}</title>

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <GAScript />
        </>
    );
}
