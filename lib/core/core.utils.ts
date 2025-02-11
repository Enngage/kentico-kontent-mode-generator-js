export function uniqueFilter(value: string, index: number, self: readonly string[]): boolean {
    return self.indexOf(value) === index;
}

export const isNotUndefined = <T>(item: T | undefined): item is T => item !== undefined;

export function getFileNameWithoutExtension(filePath: string): string {
    if (!filePath.includes('.')) {
        return filePath;
    }
    return filePath.substring(0, filePath.lastIndexOf('.'));
}

export function sortAlphabetically<T>(arrayToSort: readonly T[], propertySelector: (item: T) => string): readonly T[] {
    return arrayToSort.toSorted((a, b) => propertySelector(a).toLowerCase().localeCompare(propertySelector(b).toLowerCase()));
}

export function getStringOrUndefinedAsPropertyValue(text: string | undefined): string {
    return text ? `'${text}'` : 'undefined';
}

export function toSafePropertyValue(value: string): string {
    return value.replace(/'/g, '');
}

export function toOutputDirPath(outputDir: string | undefined): string {
    return outputDir ? `${outputDir}/`.replaceAll('//', '/') : `./`;
}

export function singleItemToArray<T>(item: T | undefined): readonly T[] {
    return item ? [item] : [];
}
