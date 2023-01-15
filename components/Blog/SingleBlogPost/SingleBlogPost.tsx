import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { BlogFields } from '../Blog.types';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import styles from './SingleBlogPost.module.scss';
import { ReadTime } from '../ReadTime/ReadTime';

export const SingleBlogPost = (fields: BlogFields) => {
    return (
        <section className="w-7/12 mx-auto">
            <article>
                <Image
                    alt={fields.title}
                    src={'https:' + fields.thumbnail.fields.file.url}
                    width={800}
                    height={400}
                    className="mx-auto mb-12"
                />
                <h1 className={`font-bold text-5xl text-center mb-5 ${styles.title}`}>{`${fields.title}`}</h1>
                <div>
                    <ReadTime text={fields.post} />
                </div>
                <div className="mt-12 max-w-4xl mx-auto text-lg">
                    <ReactMarkdown
                        components={{
                            code(codeProps) {
                                return !codeProps.inline ? (
                                    // eslint-disable-next-line react/no-children-prop
                                    <CodeBlock children={codeProps.children} />
                                ) : (
                                    <code
                                        className={codeProps.className}
                                        // TODO: proper styling for inline code
                                        style={{ background: '#63666A', fontStyle: 'italic', padding: '3px' }}
                                        {...codeProps}>
                                        {codeProps.children}
                                    </code>
                                );
                            },
                            p(pProps) {
                                return <p className="mb-5" {...pProps} />;
                            }
                        }}>
                        {fields.post}
                    </ReactMarkdown>
                </div>
            </article>
        </section>
    );
};
