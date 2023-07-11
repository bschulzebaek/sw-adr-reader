'use client';
import fileNameToTitle from '@/utility/file-name-to-title';
import { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

function removeMermaid(content: string) {
    return content.replace(/(.*)\bmermaid\b(.*)/g, '');
}

function fixLinks(container: HTMLElement) {
    container.querySelectorAll('a').forEach((a) => {
        a.href = a.href.toLowerCase();
    });
}

export default function AdrReader({ content, path }: { content: string, path: string}) {
    const mdRef = useRef(null);

    useEffect(() => {
        fixLinks(mdRef.current as unknown as HTMLElement);
    }, []);

    return (
        <>
            <h1>{fileNameToTitle(path, false)}</h1>

            <div ref={mdRef}>
                <ReactMarkdown
                    children={removeMermaid(content)}
                    remarkPlugins={[remarkFrontmatter]}
                    rehypePlugins={[rehypeHighlight]}
                />
            </div>
        </>
    )
}