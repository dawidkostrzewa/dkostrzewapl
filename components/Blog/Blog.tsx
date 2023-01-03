'use client';

import { Asset, Entry, EntryFields } from 'contentful';
import { BlogFields } from './Blog.types';
import { BlogCard } from './BlogCard/BlogCard';

type BlogProps = {
    entries: Entry<BlogFields>[];
};

export const Blog = ({ entries }: BlogProps) => {
    return (
        <section>
            <h1 className="text-6xl font-bold text-center">Blog</h1>
            <div className="max-w-7xl mx-auto mt-16">
                {entries.map((entry) => {
                    return <BlogCard key={entry.sys.id} entry={entry} />;
                })}
            </div>
        </section>
    );
};
