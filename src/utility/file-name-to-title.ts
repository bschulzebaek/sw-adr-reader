const INDEX_NAME_DELIMITER = 10;

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

function nameToTitle(fileName: string) {
}

export default function fileNameToTitle(fileName: string, includeDate = true): string {
    const [date, name] = [fileName.substring(0, INDEX_NAME_DELIMITER), fileName.substring(INDEX_NAME_DELIMITER + 1, fileName.length - 3)];

    let formatted = (name.match(/[A-Za-z][a-z]*/g) || []).map(capitalize).join(' ');

    if (includeDate) {
        formatted += ` (${date})`;
    }

    return formatted;
}