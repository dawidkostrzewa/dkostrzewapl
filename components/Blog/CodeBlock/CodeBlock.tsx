'use client';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { CodeBlockProps } from './CodeBlock.types';
import styles from './CodeBlock.module.scss';

export const CodeBlock = ({ children }: CodeBlockProps) => {
    return (
        <Highlight {...defaultProps} theme={theme} code={String(children).replace(/\n$/, '')} language="typescript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={`${className} my-5 ${styles['code-block']}`}
                    style={{ ...style, backgroundColor: 'transparent' }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};
