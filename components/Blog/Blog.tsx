import { Entry } from 'contentful';
import { BlogFields } from './Blog.types';
import { BlogCard } from './BlogCard/BlogCard';

type BlogProps = {
    entries: Entry<BlogFields>[];
};

export const Blog = ({ entries }: BlogProps) => {
    return (
        <section className="h-100% mb-20">
            <h1 className="text-6xl font-bold text-center mb-20">Blog</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 xl:max-w-7xl mx-auto mt-20">
                {entries.map((entry) => {
                    return <BlogCard key={entry.sys.id} entry={entry} />;
                })}
            </div>
        </section>
    );
};
