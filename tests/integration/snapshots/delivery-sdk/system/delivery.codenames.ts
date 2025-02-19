/**
 * Type representing all languages
 */
export type LanguageCodenames = 'cz' | 'en' | 'German';

/**
 * Type representing all content types
 */
export type ContentTypeCodenames = 'actor' | 'movie';

/**
 * Type representing all collections
 */
export type CollectionCodenames = 'default';

/**
 * Type representing all workflows
 */
export type WorkflowCodenames = 'default';

/**
 * Type representing all taxonomies
 */
export type TaxonomyCodenames = 'movietype' | 'releasecategory';

/**
 * Type representing all worksflow steps across all workflows
 */
export type WorkflowStepCodenames = 'archived' | 'draft' | 'published' | 'ready_to_publish' | 'review' | 'scheduled';

/**
 * Type representing all element codenames across all content types
 */
export type ElementCodenames =
    | 'category'
    | 'first_name'
    | 'last_name'
    | 'length'
    | 'photo'
    | 'plot'
    | 'poster'
    | 'releasecategory'
    | 'released'
    | 'seoname'
    | 'stars'
    | 'title'
    | 'url';
