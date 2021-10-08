
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0' on 'Fri Oct 08 2021 10:40:28 GMT+0200 (Central European Summer Time)'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Actor extends ContentItem {
    public url!: Elements.UrlSlugElement;
    public firstName!: Elements.TextElement;
    public lastName!: Elements.TextElement;
    public photo!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'first_name') {
                    return 'firstName';
                }
                if (elementName === 'last_name') {
                    return 'lastName';
                }
                return elementName;
            })
        });
    }
}
