import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'profil',
                title    : 'Profil',
                translate: 'NAV.PROFIL',
                type     : 'collapsable',
                icon     : 'person',
                children : [
                    {
                        id        : 'edition',
                        title     : 'Edition',
                        type      : 'item',
                        url       : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'vieprivee',
                        title     : 'Vie Privee',
                        type      : 'item',
                        url       : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'recherche',
                        title     : 'Recherche',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders',
                        exactMatch: true
                    }
                ]
            },
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'association',
                title    : 'Association',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'group',
                url      : '/association',
            },
            {
                id       : 'entreprise',
                title    : 'Entreprise',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'business',
                url      : '/entreprise',
            },
            {
                id       : 'professionel',
                title    : 'Professionel',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'work',
                url      : '/professionel',
            },
            {
                id       : 'e-commerce',
                title    : 'E-Commerce',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'item',
                        url       : '/apps/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'productDetail',
                        title     : 'Product Detail',
                        type      : 'item',
                        url       : '/apps/e-commerce/products/1/printed-dress',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Orders',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'orderDetail',
                        title     : 'Order Detail',
                        type      : 'item',
                        url       : '/apps/e-commerce/orders/1',
                        exactMatch: true
                    }
                ]
            },
        ]
    }
];
