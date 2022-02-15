export const state = () => {
    return {
        mobileActive: false,
    }
}

export const getters = {
    isMobileActive: (state) => {
        return state.mobileActive
    },
}

export const mutations = {
    TOGGLE_SIDEBAR_MOBILE(state) {
        state.mobileActive = !state.mobileActive
    },
}
