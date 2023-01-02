import { Blog } from '../../components/Blog/Blog';
import { BlogFields } from '../../components/Blog/Blog.types';
import { client } from '../../contentful/client';

const getContentful = async () => {
    const res = await client.getEntries<BlogFields>({ content_type: 'blogPost' });
    return res.items;
};
export default async function BlogPage() {
    const items = await getContentful();
    return <Blog entries={items} />;
}
