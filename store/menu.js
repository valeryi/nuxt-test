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
        mobileActive: false,
        dropdowns: [],
    }
}

export const getters = {
    getMenu: (state) => {
        return state.menu
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
