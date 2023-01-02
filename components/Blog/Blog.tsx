'use client';

import { Asset, Entry, EntryFields } from 'contentful';
import { BlogFields } from './Blog.types';
import { BlogCard } from './BlogCard/BlogCard';

type BlogProps = {
    entries: Entry<BlogFields>[];
};

export const Blog = ({ entries }: BlogProps) => {
    console.log(entries[0].fields.post.content);
    return (
        <div>
            {entries.map((entry) => {
                return <BlogCard key={entry.sys.id} entry={entry} />;
            })}
        </div>
    );
};
