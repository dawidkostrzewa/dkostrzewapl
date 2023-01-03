import ReactMarkdown from 'react-markdown';
import { BlogFields } from '../Blog.types';
import { CodeBlock } from '../CodeBlock/CodeBlock';

export const SingleBlogPost = (fields: BlogFields) => {
    return (
        <>
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
        </>
    );
};
