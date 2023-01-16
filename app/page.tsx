import { BlogFields } from '../components/Blog/Blog.types';
import { Home } from '../components/Home';
import { client } from '../contentful/client';

const getLatestsBlogPost = async () => {
    const res = await client.getEntries<BlogFields>({
        content_type: 'blogPost'
    });
    return res.items.filter((i) => i.fields.isPublished)[0];
};

export default async function HomePage() {
    const latestsBlogPost = await getLatestsBlogPost();
    return <Home latestsBlogPost={latestsBlogPost} />;
}
