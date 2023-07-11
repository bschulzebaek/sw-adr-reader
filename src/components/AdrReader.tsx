'use client';
import fileNameToTitle from '@/utility/file-name-to-title';
import ReactMarkdown from 'react-markdown';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

function removeMermaid(content: string) {
    return content.replace(/(.*)\bmermaid\b(.*)/g, '');
}

export default function AdrReader({ content, path }: { content: string, path: string}) {
    return (
        <>
            <h1>{fileNameToTitle(path, false)}</h1>

            <ReactMarkdown
                children={removeMermaid(content)}
                remarkPlugins={[remarkFrontmatter]}
                rehypePlugins={[rehypeHighlight]}
            />
        </>
    )
}