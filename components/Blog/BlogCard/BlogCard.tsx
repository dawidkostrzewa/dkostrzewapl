import { BlogCardProps } from './BlogCard.types';
import Image from 'next/image';
import Link from 'next/link';

export const BlogCard = ({ entry }: BlogCardProps) => {
    return (
        <div className="bg-white border border-white rounded-lg max-w-2xl mx-auto mb-5">
            <Link href={`/blog/${entry.fields.slug}`}>
                <Image
                    alt={entry.fields.title}
                    src={'https:' + entry.fields.thumbnail.fields.file.url}
                    width={1280}
                    height={720}
                    className="rounded-t-lg"
                />
            </Link>
            <div className="p-5">
                <Link href={`/blog/${entry.fields.slug}`}>
                    <h5 className="text-black font-bold text-2xl tracking-tight mb-2">{entry.fields.title}</h5>
                </Link>
                <p className="font-normal text-black mb-3">{entry.fields.excerpt}</p>
                {/* <Link
                    href={`/blog/${entry.fields.slug}`}
                    className="text-black bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read more
                </Link> */}
            </div>
        </div>
    );
};
