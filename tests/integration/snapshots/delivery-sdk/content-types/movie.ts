import type { Elements } from '@kontent-ai/delivery-sdk';
import type { Actor } from './index.js';
import type { CoreContentType } from '../system/index.js';
import type { ReleaseCategory } from '../taxonomies/index.js';

/**
 * Movie
 *
 * Id: b0c0f9c2-ffb6-4e62-bac9-34e14172dd8c
 * Codename: movie
 */
export type Movie = CoreContentType<
    {
        /**
         * Title
         *
         * Type: text
         * Required: true
         * Codename: title
         * Id: 3473187e-dc78-eff2-7099-f690f7042d4a
         */
        readonly title: Elements.TextElement;
        /**
         * Plot
         *
         * Type: rich_text
         * Required: false
         * Codename: plot
         * Id: f7ee4f27-27fd-a19b-3c5c-102aae1c50ce
         */
        readonly plot: Elements.RichTextElement<CoreContentType>;
        /**
         * Released
         *
         * Type: date_time
         * Required: false
         * Codename: released
         * Id: 5ccf4644-0d65-5d96-9a32-f4ea21974d51
         */
        readonly released: Elements.DateTimeElement;
        /**
         * Length
         *
         * Type: number
         * Required: false
         * Codename: length
         * Id: 7e8ecfab-a419-27ee-d8ec-8adb76fd007c
         */
        readonly length: Elements.NumberElement;
        /**
         * Poster
         *
         * Type: asset
         * Required: false
         * Codename: poster
         * Id: a39a7237-9503-a1ae-8431-5b6cdb85ae9d
         */
        readonly poster: Elements.AssetsElement;
        /**
         * Category
         *
         * Type: multiple_choice
         * Required: false
         * Codename: category
         * Id: 9821c252-6414-f549-c17f-cc171dd87713
         */
        readonly category: Elements.MultipleChoiceElement<
            'sci_fi' | 'documentary' | 'action' | 'romance' | 'animation' | 'comedy' | 'adventure' | 'drama'
        >;
        /**
         * Stars
         *
         * Type: modular_content
         * Required: false
         * Codename: stars
         * Id: aa26a55d-19f8-7501-fea3-b0d9b1eeac71
         */
        readonly stars: Elements.LinkedItemsElement<Actor | Movie>;
        /**
         * SeoName
         *
         * Type: url_slug
         * Required: false
         * Codename: seoname
         * Id: 756cc91a-a090-60f9-a7f0-f505bfbe046c
         */
        readonly seoname: Elements.UrlSlugElement;
        /**
         * ReleaseCategory
         *
         * Type: taxonomy
         * Required: false
         * Codename: releasecategory
         * Id: 65f2fd44-1856-bc2b-17c2-decb0635e3d2
         */
        readonly releasecategory: Elements.TaxonomyElement<ReleaseCategory, 'releasecategory'>;
    },
    'movie'
>;

/**
 * Type representing all available element codenames for Movie
 */
export type MovieElementCodenames =
    | 'title'
    | 'plot'
    | 'released'
    | 'length'
    | 'poster'
    | 'category'
    | 'stars'
    | 'seoname'
    | 'releasecategory';

/**
 * Type guard for Movie
 *
 * Id: b0c0f9c2-ffb6-4e62-bac9-34e14172dd8c
 * Codename: movie
 */
export function isMovie(item: CoreContentType | undefined | null): item is Movie {
    return item?.system?.type === 'movie';
}
