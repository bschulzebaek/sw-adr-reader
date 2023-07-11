import { API_PATH, RESERVED_FILE_NAMES } from '@/constants';
import fileNameToTitle from '@/utility/file-name-to-title';
import Link from 'next/link';

enum FileType {
    File = 'file',
    Directory = 'dir',
}

interface RepositoryItem {
    download_url: string;
    git_url: string;
    html_url: string;
    name: string;
    path: string;
    size: number;
    type: FileType;
    url: string;
}

async function getFileList(): Promise<RepositoryItem[]> {
    const response = await fetch(API_PATH);

    const items = await response.json() as RepositoryItem[];

    return items.filter((item: RepositoryItem) => {
        return item.type === FileType.File && !RESERVED_FILE_NAMES.includes(item.name);
    }).sort((a, b) => a.name < b.name ? 1 : -1);
}

export default async function AdrList() {
    const items = (await getFileList()).map((item, index) => {
        return (
            <li key={index}>
                <Link href={item.path}>
                    {fileNameToTitle(item.name)}
                </Link>
            </li>
        )
    });

    return (
        <>
            <h1>Shopware ADRs</h1>
            <ul>{items}</ul>
        </>
    );
}