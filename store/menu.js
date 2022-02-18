export const state = () => {
    return {
        menu: [
            {
                link: {
                    href: '#',
                    title: 'Glasses',
                    text: 'Glasses',
                },
            },
            {
                link: {
                    href: '#',
                    title: 'Sunglasses',
                    text: 'Sunglasses',
                },
                submenu: {
                    gender: [
                        {
                            href: '#',
                            title: "Men's Sunglasses",
                            text: "Men's Sunglasses",
                        },
                        {
                            href: '#',
                            title: "Women's Sunglasses",
                            text: "Women's Sunglasses",
                        },
                    ],
                    other: [
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                            submenu: [
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                            ],
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                            submenu: [
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                            ],
                        },
                    ],
                },
            },
            {
                link: {
                    href: '#',
                    title: 'Brands',
                    text: 'Brands',
                },
            },
            {
                link: {
                    href: '#',
                    title: 'Sale',
                    text: 'Sale',
                },
                special: true,
            },
            {
                link: {
                    href: '#',
                    title: 'HearingAIDs',
                    text: 'HearingAIDs',
                },
            },
            {
                link: {
                    href: '#',
                    title: 'More',
                    text: 'More',
                },
                submenu: {
                    gender: [
                        {
                            href: '#',
                            title: "Men's Sunglasses",
                            text: "Men's Sunglasses",
                        },
                        {
                            href: '#',
                            title: "Women's Sunglasses",
                            text: "Women's Sunglasses",
                        },
                    ],
                    other: [
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                            submenu: [
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                            ],
                        },
                        {
                            href: '#',
                            title: 'Sunglasses',
                            text: 'Sunglasses',
                            submenu: [
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                                {
                                    href: '#',
                                    title: 'item 1',
                                    text: 'item 1',
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    }
}

export const getters = {
    getMenu: (state) => {
        return state.menu
    },
}
