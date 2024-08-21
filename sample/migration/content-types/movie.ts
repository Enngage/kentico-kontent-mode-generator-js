import type { MigrationElementModels } from '@kontent-ai/migration-toolkit';
import type { Item } from '../core.models.js';

/**
 * Movie
 *
 * Codename: movie
 * Id: b0c0f9c2-ffb6-4e62-bac9-34e14172dd8c
 */
export type MovieItem = Item<
    'movie',
    {
        /**
         * Title (text)
         *
         * Required: true
         * Codename: title
         * Id: 3473187e-dc78-eff2-7099-f690f7042d4a
         */
        title: MigrationElementModels.TextElement;

        /**
         * Plot (rich_text)
         *
         * Required: false
         * Codename: plot
         * Id: f7ee4f27-27fd-a19b-3c5c-102aae1c50ce
         */
        plot: MigrationElementModels.RichTextElement;

        /**
         * Released (date_time)
         *
         * Required: false
         * Codename: released
         * Id: 5ccf4644-0d65-5d96-9a32-f4ea21974d51
         */
        released: MigrationElementModels.DateTimeElement;

        /**
         * Length (number)
         *
         * Required: false
         * Codename: length
         * Id: 7e8ecfab-a419-27ee-d8ec-8adb76fd007c
         */
        length: MigrationElementModels.NumberElement;

        /**
         * Poster (asset)
         *
         * Required: false
         * Codename: poster
         * Id: a39a7237-9503-a1ae-8431-5b6cdb85ae9d
         */
        poster: MigrationElementModels.AssetElement;

        /**
         * Category (multiple_choice)
         *
         * Required: false
         * Codename: category
         * Id: 9821c252-6414-f549-c17f-cc171dd87713
         */
        category: MigrationElementModels.MultipleChoiceElement;

        /**
         * Stars (modular_content)
         *
         * Required: false
         * Codename: stars
         * Id: aa26a55d-19f8-7501-fea3-b0d9b1eeac71
         */
        stars: MigrationElementModels.LinkedItemsElement;

        /**
         * SeoName (url_slug)
         *
         * Required: false
         * Codename: seoname
         * Id: 756cc91a-a090-60f9-a7f0-f505bfbe046c
         */
        seoname: MigrationElementModels.UrlSlugElement;

        /**
         * ReleaseCategory (taxonomy)
         *
         * Required: false
         * Codename: releasecategory
         * Id: 65f2fd44-1856-bc2b-17c2-decb0635e3d2
         */
        releasecategory: MigrationElementModels.TaxonomyElement;
    }
>;
