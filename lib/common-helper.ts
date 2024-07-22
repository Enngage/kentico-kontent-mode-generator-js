import { parse } from 'path';
import { ContentTypeElements, TaxonomyModels } from '@kontent-ai/management-sdk';
import { libMetadata } from './meta/index.js';
import { ModuleResolution } from './models.js';

export interface IGeneratedFile {
    filename: string;
    text: string;
}

export class CommonHelper {
    sortAlphabetically<T>(arrayToSort: T[], propertySelector: (item: T) => string): T[] {
        return arrayToSort.sort((a, b) =>
            propertySelector(a).toLowerCase().localeCompare(propertySelector(b).toLowerCase())
        );
    }

    getAutogenerateNote(addTimestamp: boolean): string {
        if (addTimestamp) {
            return `Generated by '${libMetadata.name}@${libMetadata.version}' at '${new Date().toUTCString()}'`;
        }

        return `Generated by '${libMetadata.name}@${libMetadata.version}'`;
    }

    getElementCodename(element: ContentTypeElements.ContentTypeElementModel): string | undefined {
        return element.codename;
    }

    isElementRequired(element: ContentTypeElements.ContentTypeElementModel): boolean {
        const isRequired = (<{ is_required?: boolean }>element)['is_required'];

        return isRequired === true;
    }

    getElementGuidelines(element: ContentTypeElements.ContentTypeElementModel): string | null {
        const guidelines = (<{ guidelines?: string }>element)['guidelines'];

        if (!guidelines) {
            return null;
        }

        return guidelines;
    }

    getImportStatement(data: {
        filePath: string;
        importValue: string;
        moduleResolution: ModuleResolution;
        isExternalLib: boolean;
    }): string {
        let resolvedFilePath: string;

        if (data.moduleResolution === 'nodeNext' && !data.isExternalLib) {
            resolvedFilePath = `${data.filePath}.js`;
        } else {
            resolvedFilePath = data.filePath;
        }

        return `import { ${data.importValue} } from '${resolvedFilePath}';`;
    }

    getElementTitle(
        element: ContentTypeElements.ContentTypeElementModel,
        taxonomies: TaxonomyModels.Taxonomy[]
    ): string | null {
        if (element.type === 'taxonomy') {
            const taxonomyGroupId = element.taxonomy_group?.id;

            if (!taxonomyGroupId) {
                return element.type;
            }

            const taxonomy = taxonomies.find((m) => m.id === taxonomyGroupId);

            if (!taxonomy) {
                return element.type;
            }

            return taxonomy.name;
        }
        return (<{ name?: string }>element).name ?? null;
    }

    getBarrelExportCode(data: { filenames: string[]; moduleResolution: ModuleResolution }): string {
        let code = '';

        if (data.filenames.length) {
            for (let i = 0; i < data.filenames.length; i++) {
                const isLast = i === data.filenames.length - 1;
                const filename = data.filenames[i];
                const path = parse(filename);
                const extension = data.moduleResolution === 'nodeNext' ? '.js' : '';
                code += `export * from '${path.dir}/${path.name}${extension}'`;

                if (!isLast) {
                    code += `\n`;
                }
            }
        } else {
            code = `export {}`;
        }

        return code;
    }

    escapeNameValue(value: string): string {
        return value.replaceAll(`'`, `\\'`);
    }
}

export const commonHelper = new CommonHelper();
