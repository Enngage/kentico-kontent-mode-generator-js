import type { Elements } from '@kontent-ai/delivery-sdk';
import type { CoreContentType } from '../system/index.js';

/**
 * Actor
 *
 * Id: 58099989-319f-495f-aa36-cb3710854e36
 * Codename: actor
 */
export type Actor = CoreContentType<
    ActorElementCodenames,
    {
        /**
         * Url
         *
         * Type: url_slug
         * Required: false
         * Codename: url
         * Id: c8658782-f209-a573-9c85-430fb4e3e9f0
         */
        readonly url: Elements.UrlSlugElement;
        /**
         * First name
         *
         * Type: text
         * Required: true
         * Codename: first_name
         * Id: 14dd70e5-c42d-f111-9640-c82b443edf1d
         * Guidelines: This is the first name of the actor
         */
        readonly first_name: Elements.TextElement;
        /**
         * Last name
         *
         * Type: text
         * Required: true
         * Codename: last_name
         * Id: 9f7a0dd4-af3a-95ca-0358-400c14ce7075
         */
        readonly last_name: Elements.TextElement;
        /**
         * Photo
         *
         * Type: asset
         * Required: false
         * Codename: photo
         * Id: eaec9ba3-9624-6875-04ec-80d0b2e00781
         */
        readonly photo: Elements.AssetsElement;
    },
    'actor'
>;

/**
 * Type representing all available element codenames for Actor
 */
export type ActorElementCodenames = 'url' | 'first_name' | 'last_name' | 'photo';

/**
 * Type guard for Actor
 *
 * Id: 58099989-319f-495f-aa36-cb3710854e36
 * Codename: actor
 */
export function isActor(item: CoreContentType | undefined | null): item is Actor {
    return item?.system?.type === 'actor';
}
