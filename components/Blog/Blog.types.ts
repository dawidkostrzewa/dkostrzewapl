import { Asset, EntryFields } from 'contentful';

export type BlogFields = {
    title: EntryFields.Text;
    slug: EntryFields.Text;
    thumbnail: Asset;
    post: EntryFields.Text;
};
