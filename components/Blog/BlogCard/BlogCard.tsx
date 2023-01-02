import { BlogCardProps } from './BlogCard.types';
import Image from 'next/image';
import Link from 'next/link';

export const BlogCard = ({ entry }: BlogCardProps) => {
    return (
        <Link href={`/blog/${entry.fields.slug}`}>
            <div>
                <h1>{entry.fields.title}</h1>
                <Image
                    alt={entry.fields.title}
                    src={'https:' + entry.fields.thumbnail.fields.file.url}
                    width={500}
                    height={300}
                />
            </div>
        </Link>
    );
};
