<template>
    <div
        class="layout layout--default"
        :class="{ 'layout--shifted': isMobileActive }"
    >
        <client-only>
            <lazy-the-header-sidebar-mobile
                v-if="$screen.mobile"
                class="layout__sidebar"
            />
        </client-only>

        <div class="layout__wrapper">
            <the-header />

            <main class="layout__content">
                <nuxt />
            </main>

            <LazyHydrate :when-visible="{ rootMargin: '200px' }">
                <lazy-the-footer />
            </LazyHydrate>

            <LazyHydrate never>
                <lazy-ui-overlay-component
                    :show="isMobileActive"
                    @hide="toggleSidebar"
                />
            </LazyHydrate>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'

export default {
    components: {
        LazyHydrate,
    },
    computed: {
        ...mapGetters({
            isMobileActive: 'sidebar/isMobileActive',
        }),
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
        }),
    },
}
</script>

<style lang="scss" scoped>
$transition-sidebar: transform 0.5s;

.layout {
    &--default {
        display: flex;
        min-height: 100vh;
        width: 100vw;
        transition: $transition-sidebar;
        transform: translateX(0);
    }

    &__wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
    }

    &__content {
        flex: 1 0 auto;
    }

    &--shifted {
        transform: translateX(200px);
    }

    &__sidebar {
        position: absolute;
        left: -200px;
    }
}
</style>
