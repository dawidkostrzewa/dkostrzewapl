import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { BlogFields } from '../Blog.types';
import { CodeBlock } from '../CodeBlock/CodeBlock';

export const SingleBlogPost = (fields: BlogFields) => {
    return (
        <section className="w-7/12 mx-auto">
            <article>
                <h1 className="font-bold text-5xl text-center mb-5">{`< ${fields.title} />`}</h1>
                <Image
                    alt={fields.title}
                    src={'https:' + fields.thumbnail.fields.file.url}
                    width={600}
                    height={350}
                    className="mx-auto "
                />
                <div className="mt-12 text-lg">
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
                                        style={{ background: 'black', fontStyle: 'italic' }}
                                        {...codeProps}>
                                        {codeProps.children}
                                    </code>
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
