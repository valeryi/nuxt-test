<template>
    <ul
        class="toolbar-nav-dropdown"
        :class="
            level == 1
                ? 'toolbar-nav-dropdown--top'
                : 'toolbar-nav-dropdown--sub'
        "
        aria-label="submenu"
    >
        <li
            v-for="(link, index) of gender"
            :key="`gender_${index}`"
            class="toolbar-nav-dropdown__item toolbar-nav-dropdown__item--gender"
        >
            <a :href="link.href" class="toolbar-nav-dropdown__link">{{
                link.text
            }}</a>
        </li>
        <li
            v-for="(link, index) of submenu"
            :key="index"
            class="toolbar-nav-dropdown__item"
        >
            <a :href="link.href" class="toolbar-nav-dropdown__link">{{
                link.text
            }}</a>
            <the-header-toolbar-nav-dropdown
                v-if="link.submenu"
                :submenu="link.submenu"
                :level="level + 1"
            />
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        submenu: {
            type: Array,
            required: true,
        },
        gender: {
            type: Array,
            default: () => [],
        },
        level: {
            type: Number,
            default: 1,
        },
    },
}
</script>

<style lang="scss">
$toolbar-nav-dropdown-link-font-size: 0.75rem;
$toolbar-nav-dropdown-link-color-hover: #d3d3d3;
$toolbar-nav-dropdown-link-color: $typography-font-color-primary;
$toolbar-nav-dropdown-shadow: 0 3px 5px 0 rgb(0 0 0 / 30%);

.toolbar-nav-dropdown {
    position: absolute;
    visibility: hidden;
    display: none;
    flex-direction: column;
    z-index: 999999;
    background-color: $toolbar-nav-dropdown-link-color-hover;
    padding: 0;
    margin: 0;
    list-style: none;
    min-width: 225px;
    box-shadow: $toolbar-nav-dropdown-shadow;

    &__link {
        padding: 0.6rem 2rem 0.6rem 1.5rem;
        display: inline-block;
        width: 100%;
        color: $toolbar-nav-dropdown-link-color;
        font-size: $toolbar-nav-dropdown-link-font-size;

        &:hover {
            color: $toolbar-nav-dropdown-link-color;
            text-decoration: none;
        }
    }

    &__item {
        border-bottom: 1px solid
            darken($color: $toolbar-nav-dropdown-link-color-hover, $amount: 5%);

        &:hover {
            background-color: darken(
                $color: $toolbar-nav-dropdown-link-color-hover,
                $amount: 10%
            );
        }

        &--gender:nth-child(2) {
            border-bottom: 2px solid
                darken(
                    $color: $toolbar-nav-dropdown-link-color-hover,
                    $amount: 20%
                );
        }
    }

    // ** State Classes for Dropdown menus ** //

    &__item:hover,
    &__item:focus-within {
        & > .toolbar-nav-dropdown {
            display: flex;
            visibility: visible;
            transform: translateY(-37px);
        }
    }
}
</style>
