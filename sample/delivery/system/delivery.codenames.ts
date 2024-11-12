
/** 
* This file has been auto-generated by '@kontent-ai/model-generator@8.0.0-11'.
* 
* (c) Kontent.ai
*  
* -------------------------------------------------------------------------------
* 
* Project: Movie Database
* Environment: Production
* Id: da5abe9f-fdad-4168-97cd-b3464be2ccb9
* 
* -------------------------------------------------------------------------------
**/

/**
 * Type representing all languages
 */
export type LanguageCodenames = 'en' | 'cz' | 'German';

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
 * Type representing all worksflow steps across all workflows
 */
export type WorkflowStepCodenames = 'draft' | 'review' | 'ready_to_publish' | 'published' | 'archived' | 'scheduled';

/**
 * Type representing all element codenames across all content types
 */
export type ElementCodenames =
    | 'url'
    | 'first_name'
    | 'last_name'
    | 'photo'
    | 'title'
    | 'plot'
    | 'released'
    | 'length'
    | 'poster'
    | 'category'
    | 'stars'
    | 'seoname'
    | 'releasecategory';
