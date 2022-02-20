<template>
    <transition-slide-in-left>
        <ul
            v-if="isActive(id)"
            ref="dropdown"
            class="menu-mobile-group-dropdown"
        >
            <li
                class="menu-mobile-group-dropdown__item"
                @click.stop="onCloseDropdown()"
            >
                <span class="menu-mobile-group-dropdown__back-button"
                    >Back</span
                >
            </li>

            <li
                v-for="(item, index) of menu"
                :key="index"
                :class="hasSubmenu(item)"
                class="menu-mobile-group-dropdown__item"
                @click.stop="onOpenDropdown(item, `${currentLevel}_${index}`)"
            >
                <a href="#" class="menu-mobile-group-dropdown__link">{{
                    item.text
                }}</a>

                <transition-slide-in-left>
                    <the-header-menu-mobile-group-dropdown
                        v-if="
                            item.submenu && isActive(`${currentLevel}_${index}`)
                        "
                        :id="`${currentLevel}_${index}`"
                        :menu="item.submenu"
                        :level="currentLevel"
                        @dropdown:close="onCloseDropdown"
                        @dropdown:open="
                            onOpenDropdown(item, `${currentLevel}_${index}`)
                        "
                    />
                </transition-slide-in-left>
            </li>
        </ul>
    </transition-slide-in-left>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        menu: {
            type: Array,
            required: true,
        },
        level: {
            type: Number,
            default: 1,
        },
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters({
            getDropdownList: 'menu/getDropdowns',
            getCurrentDropdown: 'menu/getCurrentDropdown',
        }),
        isActive() {
            return (id) => this.getDropdownList.includes(id)
        },
        currentLevel() {
            return this.level + 1
        },
    },
    methods: {
        hasSubmenu(item) {
            return {
                'menu-mobile-group-dropdown__item--has-submenu': item.submenu,
            }
        },
        onOpenDropdown(item, id) {
            if (item.submenu && !this.isActive(id)) {
                this.$emit('dropdown:open', { item, id })
            }
        },
        onCloseDropdown() {
            this.$emit('dropdown:close')
        },
    },
}
</script>

<style lang="scss">
$menu-mobile-dropdown-color: #fff;
$menu-mobile-dropdown-color-hover: #222;
$menu-mobile-dropdown-bg-color: #545454;
$menu-mobile-dropdown-bg-color: #545454;

.menu-mobile-group-dropdown {
    position: absolute;
    left: 0;
    top: 0;
    color: $menu-mobile-dropdown-color;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    z-index: 1010;
    background-color: $menu-mobile-dropdown-bg-color;

    &__item {
        box-sizing: border-box;
        border-bottom: 1px solid $menu-mobile-dropdown-color-hover;
        background-color: $menu-mobile-dropdown-bg-color;

        &:hover {
            background-color: $menu-mobile-dropdown-color-hover;
        }

        &--has-submenu {
            display: flex;

            &::after {
                content: '';
                align-self: center;
                width: 0;
                height: 0;
                border: 6px inset;
                border-color: transparent transparent transparent
                    $menu-mobile-dropdown-color;
                border-left-style: solid;
                border-right-width: 0;
                position: absolute;
                right: 1rem;
                z-index: 1000;
            }
        }
    }

    &__link,
    &__back-button {
        color: $menu-mobile-dropdown-color;
        font-size: 0.8em;
        display: block;
        padding-left: 1.7em;
        font-size: 0.7rem;
        cursor: pointer;
        @include truncate(200px);

        &:hover {
            color: $menu-mobile-dropdown-color;
            text-decoration: none;
            height: 100%;
            width: 100%;
        }
    }
}
</style>
