import { createHash } from 'crypto';
import { ModuleResolution } from './core.models.js';

export function uniqueFilter(value: string, index: number, self: readonly string[]): boolean {
    return self.indexOf(value) === index;
}

export function getDefaultModuleResolution(moduleResolution: ModuleResolution | undefined): ModuleResolution {
    return moduleResolution ?? 'node';
}

export function getFileNameWithoutExtension(filePath: string): string {
    return filePath.substring(0, filePath.lastIndexOf('.'));
}

export function getFilenameFromPath(text: string): string {
    const lastIndex = text.lastIndexOf('/');
    return text.substring(lastIndex + 1);
}

export function sortAlphabetically<T>(arrayToSort: readonly T[], propertySelector: (item: T) => string): readonly T[] {
    return arrayToSort.toSorted((a, b) => propertySelector(a).toLowerCase().localeCompare(propertySelector(b).toLowerCase()));
}

export function toPascalCase(text: string): string {
    return prefixWithUnderscoreWhenStartsWithNonAlpha(
        toSafeStringCode(
            text
                .toLowerCase()
                .replace(new RegExp(/[-_]+/, 'g'), ' ')
                .replace(new RegExp(/[^\w\s]/, 'g'), '')
                .replace(new RegExp(/\s+(.)(\w*)/, 'g'), ($1, $2, $3) => `${($2 as string).toUpperCase() + $3}`)
                .replace(new RegExp(/\w/), (s) => s.toUpperCase())
        )
    );
}

export function toCamelCase(text: string): string {
    return prefixWithUnderscoreWhenStartsWithNonAlpha(
        toSafeStringCode(
            text
                .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
                    return index === 0 ? word.toLowerCase() : word.toUpperCase();
                })
                .replace(/\s+/g, '')
        )
    );
}
export function toGuidelinesComment(guidelines: string): string {
    return removeLineEndings(guidelines);
}

export function getStringOrUndefined(text: string | undefined): string {
    return text ? `'${text}'` : 'undefined';
}

export function toSafePropertyName(value: string): string {
    const propertyName = toCamelCase(value);

    if (propertyName.length === 0) {
        // to prevent empty string being used as property name, use hash
        return getPropertyStringHash(value);
    }

    return prefixWithUnderscoreWhenStartsWithNonAlpha(propertyName);
}

export function toSafePropertyValue(value: string): string {
    const replaceWith = '';
    return value.replace(/'/g, replaceWith);
}

export function toOutputDirPath(outputDir: string | undefined): string {
    return outputDir ? `${outputDir}/`.replaceAll('//', '/') : `./`;
}

function removeLineEndings(value: string): string {
    return value.replace(/(\r\n|\n|\r)/gm, '');
}

function toSafeStringCode(text: string): string {
    const replaceWith = '';
    return text.replace(/[\s-]/g, replaceWith).replace(/[^a-zA-Z0-9_]/g, replaceWith);
}

export function prefixWithUnderscoreWhenStartsWithNonAlpha(text: string): string {
    if (/^[^a-zA-Z]/.test(text)) {
        return `_${text}`;
    }
    return text;
}

function getPropertyStringHash(text: string): string {
    const hash = createHash('sha256');
    hash.update(text);
    return `_${hash.digest('hex')}`.slice(0, 10);
}
