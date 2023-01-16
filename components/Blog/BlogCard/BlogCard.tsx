import { BlogCardProps } from './BlogCard.types';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ReadTime } from '../ReadTime/ReadTime';
import dayjs from 'dayjs';
import { AiFillCalendar } from 'react-icons/ai';

export const BlogCard = ({ entry, isOnMainPage }: BlogCardProps) => {
    return (
        <Link href={`/blog/${entry.fields.slug}`}>
            <div
                className={clsx(
                    'bg-lightBlack',
                    'border',
                    'border-lightBlack',
                    'rounded-lg',
                    'shadow-2xl',
                    { 'max-w-md': !isOnMainPage },
                    'mx-auto',
                    'md:mx-0',
                    'hover:scale-102 transition-all'
                )}>
                <Image
                    alt={entry.fields.title}
                    src={'https:' + entry.fields.thumbnail.fields.file.url}
                    width={1280}
                    height={720}
                    className="rounded-t-lg "
                />

                <div className="p-5">
                    <h2 className="text-white font-bold text-center text-2xl tracking-tight mb-12">
                        {!entry.fields.isPublished && '[DRAFT]'} {entry.fields.title}
                    </h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <AiFillCalendar size={20} />
                            <span className="ml-2">{dayjs(entry.sys.createdAt).format('DD MMMM YYYY')}</span>
                        </div>
                        <ReadTime text={entry.fields.post} />
                    </div>

                    <p className="font-normal text-white my-6">{entry.fields.excerpt}</p>
                    {/* <Link
                    href={`/blog/${entry.fields.slug}`}
                    className="text-black bg-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read more
                </Link> */}
                </div>
            </div>
        </Link>
    );
};
