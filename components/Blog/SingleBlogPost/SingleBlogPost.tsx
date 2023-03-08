import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { BlogFields } from '../Blog.types';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import styles from './SingleBlogPost.module.scss';
import { ReadTime } from '../ReadTime/ReadTime';
import { AiFillCalendar } from 'react-icons/ai';
import dayjs from 'dayjs';
import { Entry } from 'contentful';
import clsx from 'clsx';
import ScrollUp from 'components/ScrollUp/ScrollUp';

export const SingleBlogPost = ({ entry }: { entry: Entry<BlogFields> }) => {
    const fields = entry?.fields;

    if (!fields) return <section></section>;

    return (
        <section className="mx-auto">
            <ScrollUp />
            <article>
                {fields.thumbnail?.fields?.file?.url && (
                    <Image
                        alt={fields?.title}
                        src={'https:' + fields.thumbnail.fields.file.url}
                        width={1000}
                        height={600}
                        className="mx-auto mb-12"
                    />
                )}
                <h1
                    className={`font-bold text-5xl max-w-7xl mx-auto text-center mb-5 ${styles.title}`}>{`${fields?.title}`}</h1>
                <div className="flex justify-around max-w-6xl mx-auto">
                    <div className="flex items-center">
                        <AiFillCalendar size={20} />
                        <span className="ml-2">{dayjs(entry?.sys?.createdAt).format('DD/MM/YYYY')}</span>
                    </div>
                    <ReadTime text={fields.post} />
                </div>
                <div className="mt-12 max-w-6xl mx-auto text-lg">
                    <ReactMarkdown
                        components={{
                            code(codeProps) {
                                return !codeProps.inline ? (
                                    // eslint-disable-next-line react/no-children-prop
                                    <CodeBlock children={codeProps.children} />
                                ) : (
                                    <code
                                        className={clsx(codeProps.className, styles['code-block'])}
                                        style={{ background: '#63666A', fontStyle: 'italic', padding: '1px 4px' }}
                                        {...codeProps}>
                                        {codeProps.children}
                                    </code>
                                );
                            },
                            p(pProps) {
                                return <div className="mb-5" {...pProps} />;
                            },
                            h2(h2Props) {
                                return <h2 className="text-4xl mt-12 mb-3 font-bold" {...h2Props} />;
                            },
                            a(aProps) {
                                return <a {...aProps} className="underline underline-offset-1" />;
                            },
                            img(imgProps) {
                                return (
                                    <Image
                                        src={'https:' + imgProps.src}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        className="w-9/12 mx-auto"
                                        alt={imgProps.alt!}
                                    />
                                );
                            }
                        }}>
                        {fields.post}
                    </ReactMarkdown>
                </div>
            </article>
        </section>
    );
};
