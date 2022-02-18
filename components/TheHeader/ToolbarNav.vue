<template>
    <nav class="toolbar-nav" role="navigation">
        <div
            v-for="(item, index) of menu"
            :key="index"
            class="toolbar-nav__item"
        >
            <a
                :href="item.link.href"
                :alt="item.link.alt"
                :title="item.link.title"
                :class="linkClasses(item)"
                class="toolbar-nav__link"
                aria-haspopup="true"
                >{{ item.link.text }}</a
            >

            <the-header-toolbar-nav-dropdown
                v-if="item.submenu"
                :submenu="item.submenu.other || []"
                :gender="item.submenu.gender || []"
            />
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        menu: {
            type: Array,
            required: true,
        },
    },
    methods: {
        linkClasses(item) {
            return {
                'toolbar-nav__link--special': item.special,
                'toolbar-nav__link--submenu': item.submenu,
            }
        },
    },
}
</script>

<style lang="scss">
$toolbar-nav-link-color-hover: #d3d3d3;
$toolbar-nav-link-color: #222;
$toolbar-nav-link-triangle-color: #ce6627;
$toolbar-nav-link-color-special: #cc2d1d;
$toolbar-nav-dropdown-menu-aligning: -100%;

.toolbar-nav {
    padding: 0.1em 0;
    @include hide-down(1024px);

    &__link {
        padding: 0.7em 2em;
        margin: 0.2em 0;
        border-radius: 2px;
        text-decoration: none;
        text-transform: uppercase;
        color: $toolbar-nav-link-color;
        font-weight: bold;
        font-size: 0.85em;
        letter-spacing: 0.07em;

        &:hover {
            background-color: $toolbar-nav-link-color-hover;
            color: $toolbar-nav-link-color;
            text-decoration: none;
        }

        &--submenu::after {
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 6px 5px 0 5px;
            border-color: $toolbar-nav-link-triangle-color transparent
                transparent transparent;
            margin-left: 0.7rem;
            transform: translateY(-2px);
        }

        &--special {
            color: $toolbar-nav-link-color-special;

            &:hover {
                color: $toolbar-nav-link-color-special;
            }
        }
    }

    &-item {
        position: relative;
        padding: 0.5em 0;
    }

    // ** State Classes for Dropdown menus ** //

    &__item:hover,
    &__item:focus-within {
        & > .toolbar-nav-dropdown {
            display: flex;
            visibility: visible;
            transform: translateY(6px);
        }
    }

    &__item:last-child {
        .toolbar-nav-dropdown__item:hover,
        .toolbar-nav-dropdown__item:focus-within {
            & > .toolbar-nav-dropdown {
                left: $toolbar-nav-dropdown-menu-aligning;
            }
        }
    }

    &__item:not(:last-child) {
        .toolbar-nav-dropdown__item:hover,
        .toolbar-nav-dropdown__item:focus-within {
            & > .toolbar-nav-dropdown {
                right: $toolbar-nav-dropdown-menu-aligning;
            }
        }
    }
}
</style>
