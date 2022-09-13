/**
 * Generated by '@kontent-ai/model-generator@5.5.1' at 'Tue, 13 Sep 2022 11:19:35 GMT'
 *
 * Project name: Import source (Movie DB test)
 * Environment: Production
 * Project Id: cdbf5823-cbec-010d-f4c3-0411eee31c0e
 */
export const contentTypes = {
  /**
   * Actor
   * Last modified: Tue Aug 02 2022 09:05:12 GMT+0200 (Central European Summer Time)
   */
  actor: {
    codename: 'actor',
    id: '58099989-319f-495f-aa36-cb3710854e36',
    externalId: undefined,
    name: 'Actor',
    elements: {
      /**
       * Pages (subpages)
       */
      pages: {
        codename: 'pages',
        id: 'af3b152b-6c98-479e-937c-b68b562994b8',
        externalId: undefined,
        name: 'Pages',
        required: false,
        type: 'subpages',
        snippetCodename: undefined,
      },

      /**
       * First name (text)
       */
      first_name: {
        codename: 'first_name',
        id: '14dd70e5-c42d-f111-9640-c82b443edf1d',
        externalId: undefined,
        name: 'First name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Url (url_slug)
       */
      url: {
        codename: 'url',
        id: 'c8658782-f209-a573-9c85-430fb4e3e9f0',
        externalId: undefined,
        name: 'Url',
        required: false,
        type: 'url_slug',
        snippetCodename: undefined,
      },

      /**
       * Last name (text)
       */
      last_name: {
        codename: 'last_name',
        id: '9f7a0dd4-af3a-95ca-0358-400c14ce7075',
        externalId: undefined,
        name: 'Last name',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Photo (asset)
       */
      photo: {
        codename: 'photo',
        id: 'eaec9ba3-9624-6875-04ec-80d0b2e00781',
        externalId: undefined,
        name: 'Photo',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * EmptyModel
   * Last modified: Tue Sep 13 2022 13:14:32 GMT+0200 (Central European Summer Time)
   */
  emptymodel: {
    codename: 'emptymodel',
    id: 'e9e929fa-1dde-4c05-976a-33fb72201c44',
    externalId: undefined,
    name: 'EmptyModel',
    elements: {},
  },

  /**
   * Movie
   * Last modified: Mon Feb 10 2020 11:22:27 GMT+0100 (Central European Standard Time)
   */
  movie: {
    codename: 'movie',
    id: 'b0c0f9c2-ffb6-4e62-bac9-34e14172dd8c',
    externalId: undefined,
    name: 'Movie',
    elements: {
      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: '3473187e-dc78-eff2-7099-f690f7042d4a',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Plot (rich_text)
       */
      plot: {
        codename: 'plot',
        id: 'f7ee4f27-27fd-a19b-3c5c-102aae1c50ce',
        externalId: undefined,
        name: 'Plot',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Released (date_time)
       */
      released: {
        codename: 'released',
        id: '5ccf4644-0d65-5d96-9a32-f4ea21974d51',
        externalId: undefined,
        name: 'Released',
        required: false,
        type: 'date_time',
        snippetCodename: undefined,
      },

      /**
       * Length (number)
       */
      length: {
        codename: 'length',
        id: '7e8ecfab-a419-27ee-d8ec-8adb76fd007c',
        externalId: undefined,
        name: 'Length',
        required: false,
        type: 'number',
        snippetCodename: undefined,
      },

      /**
       * Poster (asset)
       */
      poster: {
        codename: 'poster',
        id: 'a39a7237-9503-a1ae-8431-5b6cdb85ae9d',
        externalId: undefined,
        name: 'Poster',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Category (multiple_choice)
       */
      category: {
        codename: 'category',
        id: '9821c252-6414-f549-c17f-cc171dd87713',
        externalId: undefined,
        name: 'Category',
        required: false,
        type: 'multiple_choice',
        snippetCodename: undefined,
      },

      /**
       * Stars (modular_content)
       */
      stars: {
        codename: 'stars',
        id: 'aa26a55d-19f8-7501-fea3-b0d9b1eeac71',
        externalId: undefined,
        name: 'Stars',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * SeoName (url_slug)
       */
      seoname: {
        codename: 'seoname',
        id: '756cc91a-a090-60f9-a7f0-f505bfbe046c',
        externalId: undefined,
        name: 'SeoName',
        required: false,
        type: 'url_slug',
        snippetCodename: undefined,
      },

      /**
       * ReleaseCategory (taxonomy)
       */
      releasecategory: {
        codename: 'releasecategory',
        id: '65f2fd44-1856-bc2b-17c2-decb0635e3d2',
        externalId: undefined,
        name: 'ReleaseCategory',
        required: false,
        type: 'taxonomy',
        snippetCodename: undefined,
      },
    },
  },
};
