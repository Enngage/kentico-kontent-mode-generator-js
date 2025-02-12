import type { MigrationItem, MigrationItemSystem, MigrationElements } from '@kontent-ai/migration-toolkit';
import type {
    CollectionCodenames,
    ContentTypeCodenames,
    LanguageCodenames,
    WorkflowCodenames,
    WorkflowStepCodenames
} from './environment/environment.js';

/**
 * System object shared by all individual content type models
 */
export type ItemSystem<TCodename extends ContentTypeCodenames> = MigrationItemSystem<
    TCodename,
    LanguageCodenames,
    CollectionCodenames,
    WorkflowCodenames
>;

/**
 * Item object shared by all individual content type models
 */
export type Item<TCodename extends ContentTypeCodenames, TElements extends MigrationElements = MigrationElements> = MigrationItem<
    TElements,
    ItemSystem<TCodename>,
    WorkflowStepCodenames
>;
