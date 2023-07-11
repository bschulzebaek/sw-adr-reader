import AdrReader from '@/components/AdrReader';
import { API_PATH } from '@/constants';

async function getFileContents(path: string) {
    const response = await fetch(API_PATH + '/' + path);

    const data = await response.json();
    const content = atob(data.content);

    return content;
}

export default async function AdrPage({ params }: { params: { path: string } }) {
    const content = await getFileContents(params.path);

    return <AdrReader content={content} path={params.path} />
}