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
        sidebarMenu: [
            {
                text: 'Glasses',
                href: '#',
                submenu: [
                    {
                        text: "Men's Glasses",
                        href: '#',
                    },
                    {
                        text: "Women's Glasses",
                        href: '#',
                    },
                    {
                        text: '$17 - Cheap Glasses',
                        href: '#',
                    },
                    {
                        text: '2 for 1 from $63.70',
                        href: '#',
                    },
                    {
                        text: 'Frames by Collection',
                        href: '#',
                        submenu: [
                            {
                                text: 'Essential Collection',
                                href: '#',
                            },
                            {
                                text: 'Designer Collection',
                                href: '#',
                            },
                            {
                                text: 'Boutique Collection',
                                href: '#',
                            },
                        ],
                    },
                    {
                        text: 'Frames by Style',
                        href: '#',
                    },
                    {
                        text: 'Frames by Colour',
                        href: '#',
                    },
                    {
                        text: 'Frames by Sport',
                        href: '#',
                    },
                    {
                        text: 'More Categories »',
                        href: '#',
                    },
                ],
            },
            {
                text: 'Sunglasses',
                href: '#',
            },
            {
                text: 'Brands',
                href: '#',
            },
            {
                text: 'Reglaze',
                href: '#',
            },
            {
                text: 'Contact Lenses',
                href: '#',
            },
            {
                text: 'Hearing AIDs',
                href: '#',
            },
            {
                text: 'Goggles',
                href: '#',
            },
            {
                text: 'Ready Readers',
                href: '#',
            },
            {
                text: 'Accessories',
                href: '#',
            },
            {
                text: 'Sale & Offers',
                href: '#',
            },
            {
                text: 'Help Me Choose',
                href: '#',
            },
        ],
        accountMenu: [
            {
                text: 'Account & Orders',
                href: '#',
                icon: 'person-circle',
            },
            {
                text: 'Spend & Earn Rewards',
                href: '#',
                icon: 'award',
            },
            {
                text: 'Wishlist',
                href: '#',
                icon: 'heart',
            },
        ],
        saleMenu: [
            {
                text: 'Help & Information',
                href: '#',
                icon: 'question-circle',
            },
            {
                text: 'Email us',
                href: '#',
                icon: 'envelope',
                email: 'test@test.com',
            },
            {
                text: '03303 801 190',
                href: '#',
                icon: 'telephone',
                tel: '03303 801 190',
            },
            {
                text: 'About Us',
                href: '#',
                icon: 'info-circle',
            },
        ],
        mobileActive: false,
        dropdowns: [],
    }
}

export const getters = {
    getMenu: (state) => {
        return state.menu
    },
    getSidebarMenu: (state) => {
        return state.sidebarMenu
    },
    getAccountMenu: (state) => {
        return state.accountMenu
    },
    getSaleMenu: (state) => {
        return state.saleMenu
    },
    isMobileActive: (state) => {
        return state.mobileActive
    },
    getDropdowns: (state) => {
        return state.dropdowns
    },
    getCurrentDropdown: (state) => {
        return state.dropdowns[state.dropdowns.length - 1]
    },
}

export const actions = {
    closeSideBarMobile: ({ commit }) => {
        commit('TOGGLE_SIDEBAR_MOBILE')
        commit('CLEAR_DROPDOWNS')
    },
    toggleSideBarMobile: ({ commit, getters }) => {
        if (getters.isMobileActive) {
            commit('CLEAR_DROPDOWNS')
        }

        commit('TOGGLE_SIDEBAR_MOBILE')
    },
}

export const mutations = {
    TOGGLE_SIDEBAR_MOBILE(state) {
        state.mobileActive = !state.mobileActive
    },
    PUSH_DROPDOWN(state, id) {
        state.dropdowns.push(id)
    },
    POP_DROPDOWN(state) {
        state.dropdowns.pop()
    },
    CLEAR_DROPDOWNS(state) {
        state.dropdowns = []
    },
    PUSH_DROPDOWN_HEIGHT(state, height) {
        state.dropdownHeight.push(height)
    },
    POP_DROPDOWN_HEIGHT(state) {
        state.dropdownHeight.pop()
    },
}
