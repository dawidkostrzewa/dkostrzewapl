import { createClient } from 'contentful';

export const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
});
