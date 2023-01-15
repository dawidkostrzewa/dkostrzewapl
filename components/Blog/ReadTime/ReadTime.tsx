'use client';

import { BsBook } from 'react-icons/bs';
import readingTime from 'reading-time';

export const ReadTime = ({ text }: { text: string }) => {
    const readTime = readingTime(text);
    return (
        <div className="flex items-center">
            <BsBook size={20} /> <span className="ml-2">{readTime.text}</span>
        </div>
    );
};
