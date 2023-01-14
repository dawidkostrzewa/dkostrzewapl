import { Entry } from 'contentful';
import { BlogFields } from '../Blog.types';

export type BlogCardProps = {
    entry: Entry<BlogFields>;
    isOnMainPage?: boolean;
};
