<template>
    <div class="sidebar-menu-group">
        <div class="sidebar-menu-group__header">
            <span>{{ groupName }}</span>
            <span
                v-if="showClose"
                class="sidebar-menu-group__header-button"
                @click="onClick"
                >Close</span
            >
        </div>

        <ul class="sidebar-menu-group__menu">
            <li
                v-for="(item, index) of menu"
                :key="index"
                class="sidebar-menu-group__menu-item"
                :class="hasSubmenu(item)"
                @click.prevent="onLinkClick(item)"
            >
                <a href="#" class="sidebar-menu-group__menu-link">
                    {{ item.link.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Array,
            required: true,
        },
        groupName: {
            type: String,
            default: `Group`,
        },
        showClose: {
            type: Boolean,
        },
    },
    methods: {
        onClick() {
            this.$emit('close')
        },
        onLinkClick(item) {
            if (item.submenu) {
                // console.log(item)
            } else {
                open(item.link.href, '_self')
            }
        },
        hasSubmenu(item) {
            return {
                'sidebar-menu-group__menu-item--has-submenu': item.submenu,
            }
        },
    },
}
</script>

<style lang="scss">
$sidebar-menu-group-header-color: #fc4c02;
$sidebar-menu-group-header-bg-color: #111;
$sidebar-menu-group-close-btn-color: #fff;
$sidebar-menu-group-menu-bg-color: #333;
$sidebar-menu-group-menu-link-color: #fff;
$sidebar-menu-group-menu-border-color: #555;

.sidebar-menu-group {
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.6rem;
        background: $sidebar-menu-group-header-bg-color;
        color: $sidebar-menu-group-header-color;
        font-weight: bold;
        font-size: 0.8rem;
        width: 100%;

        &-button {
            color: $sidebar-menu-group-close-btn-color;
            cursor: pointer;
        }
    }

    &__menu {
        list-style: none;
        margin: 0;
        padding: 0;

        &-item {
            display: flex;
            align-items: center;
            height: 45px;
            line-height: 45px;
            background-color: $sidebar-menu-group-menu-bg-color;
            border-bottom: 1px solid $sidebar-menu-group-menu-border-color;

            &:hover {
                background-color: darken(
                    $color: $sidebar-menu-group-menu-bg-color,
                    $amount: 10%
                );
            }

            &--has-submenu {
                &::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 0;
                    border: 6px inset;
                    border-color: transparent transparent transparent
                        $sidebar-menu-group-menu-link-color;
                    border-left-style: solid;
                    border-right-width: 0;
                    position: absolute;
                    right: 1rem;
                }
            }
        }

        &-link {
            display: inline-block;
            height: 100%;
            width: 100%;
            padding-left: 1.2rem;
            color: $sidebar-menu-group-menu-link-color;
            font-size: 0.7rem;
            letter-spacing: 0.07em;

            &:hover {
                color: $sidebar-menu-group-menu-link-color;
                text-decoration: none;
            }
        }
    }
}
</style>
