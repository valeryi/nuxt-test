<template>
    <div class="sidebar-menu-group">
        <div class="sidebar-menu-group__header">
            <span>{{ groupName }}</span>
            <div
                v-if="showClose"
                class="sidebar-menu-group__header-button"
                @click="onClose"
            >
                <span
                    v-for="i of 2"
                    :key="i"
                    class="sidebar-menu-group__header-button-line"
                ></span>
            </div>
        </div>

        <ul ref="menuGroup" class="sidebar-menu-group__menu">
            <li
                v-for="(item, index) of menu"
                :key="index"
                class="sidebar-menu-group__menu-item"
                :class="computedClasses(item)"
                @click="onLinkClick(item, index)($event)"
            >
                <b-icon
                    v-if="item.icon"
                    :icon="item.icon"
                    class="sidebar-menu-group__menu-icon"
                />

                <a
                    :href="getHref(item)"
                    class="sidebar-menu-group__menu-link"
                    >{{ item.text }}</a
                >

                <the-header-menu-mobile-group-dropdown
                    v-if="item.submenu"
                    :id="`1_${index}`"
                    :menu="item.submenu"
                    @dropdown:close="onCloseDropdown"
                    @dropdown:open="onOpenDropdown"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
        ...mapMutations({
            popDropdown: 'menu/POP_DROPDOWN',
            pushDropdown: 'menu/PUSH_DROPDOWN',
        }),
        getHref(item) {
            if (item.tel) return `tel:${item.tel}`
            else if (item.email) return `mailto:${item.email}`
            else return item.href
        },
        onClose() {
            this.$emit('close')
        },
        onLinkClick(item, index) {
            return (event) => {
                if (!item.email && !item.tel) {
                    event.preventDefault()

                    if (item.submenu) {
                        this.pushDropdown(`1_${index}`)
                    } else {
                        open(item.href, '_self')
                    }
                }
            }
        },
        computedClasses(item) {
            return {
                'sidebar-menu-group__menu-item--has-submenu': item.submenu,
                'sidebar-menu-group__menu-item--with-icon': item.icon,
            }
        },
        onOpenDropdown({ id }) {
            this.$refs.menuGroup.scrollTop = 0
            this.pushDropdown(id)
            this.$emit('dropdown:open')
        },
        onCloseDropdown() {
            this.popDropdown()
            this.$emit('dropdown:close')
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
$sidebar-menu-group-menu-button-size: 24px;

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
            display: flex;
            justify-content: center;
            align-items: center;
            color: $sidebar-menu-group-close-btn-color;
            width: $sidebar-menu-group-menu-button-size;
            height: $sidebar-menu-group-menu-button-size;
            position: relative;
            cursor: pointer;

            &:hover &-line {
                &:first-child {
                    transform: rotate(-45deg);
                }

                &:last-child {
                    transform: rotate(45deg);
                }
            }

            &-line {
                position: absolute;
                display: inline-block;
                width: 3px;
                height: 60%;
                border-radius: 10%;
                background-color: $sidebar-menu-group-header-color;
                transition: transform 0.5s ease-in-out;

                &:first-child {
                    transform: rotate(45deg);
                }

                &:last-child {
                    transform: rotate(-45deg);
                }
            }
        }
    }

    &__menu {
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        overflow-y: scroll;

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
                    z-index: 1000;
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
            @include truncate(250px);

            &:hover {
                color: $sidebar-menu-group-menu-link-color;
                text-decoration: none;
            }
        }

        &-icon {
            padding-left: 1rem;
            color: $sidebar-menu-group-menu-link-color;
            transform: scale(0.8);
        }

        &-item--with-icon &-link {
            padding-left: 1.5rem;
        }
    }
}
</style>
