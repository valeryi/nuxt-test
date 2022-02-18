<template>
    <div class="toolbar">
        <custom-container>
            <b-row class="toolbar__wrapper">
                <ui-button-burger class="toolbar__burger" @toggle="onClick" />

                <the-header-toolbar-nav :menu="menu" />

                <div class="toolbar__icons">
                    <the-header-icon-component
                        v-for="(item, index) of icons"
                        :key="index"
                        :show-text="true"
                        :icon="item.icon"
                        :text="item.text"
                        class="toolbar__icon"
                    />
                </div>
            </b-row>
        </custom-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            icons: [
                { icon: 'person-circle', text: 'sign in' },
                { icon: 'search', text: 'search' },
                { icon: 'heart', text: 'wishlist' },
            ],
        }
    },
    computed: {
        ...mapGetters({
            menu: 'menu/getMenu',
        }),
    },
    methods: {
        onClick() {
            this.$emit('sidebar:toggle')
        },
    },
}
</script>

<style lang="scss">
$toolbar-bg-color: #eaeaea;
$toolbar-link-bg-color-hover: #d3d3d3;

.toolbar {
    background-color: $toolbar-bg-color;
    padding: 0 1rem;
    font-size: 1rem;
    @include hide-down(640px);

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;

        @include media-breakpoint-up(1024px) {
            justify-content: center;
        }
    }

    &__burger {
        @include hide-up(1024px);
    }

    &__icons {
        @include hide-up(1024px);
    }

    &__icon {
        margin-right: 1rem;

        svg {
            transform: scale(1.3);
        }
    }
}
</style>
