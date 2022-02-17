<template>
    <b-dropdown
        ref="dropdown"
        :text="text"
        :popper-opts="popper"
        :toggle-class="isUnderlined"
        menu-class="discount-label-dropdown__menu"
        lazy
        class="discount-label-dropdown"
        tabindex="0"
        @shown="alignToRight"
    >
        <template v-if="$slots['button-content']" #button-content>
            <slot name="button-content" />
        </template>

        <slot />
    </b-dropdown>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: `ClickMe`,
        },
        buttonUnderlined: {
            type: Boolean,
            default: true,
        },
        alignCenter: {
            type: Boolean,
        },
        fixPreventOverflow: {
            type: Boolean,
        },
        placement: {
            type: String,
            default: 'auto',
            validator(value) {
                return [
                    'auto',
                    'auto-start',
                    'auto-end',
                    'top',
                    'top-start',
                    'top-end',
                    'right',
                    'right-start',
                    'right-end',
                    'bottom',
                    'bottom-start',
                    'bottom-end',
                    'left',
                    'left-start',
                    'left-end',
                ].includes(value)
            },
        },
    },
    data() {
        return {
            popper: null,
        }
    },
    computed: {
        isUnderlined() {
            return this.buttonUnderlined
                ? `discount-label-dropdown__toggle--underfined`
                : null
        },
    },
    mounted() {
        /**
         *
         * // FIXME: fix preventOverflow - elements overflow the viewport
         * Now `alignToRight` fixes that behavious
         *
         * */
        this.popper = {
            placement: this.placement,
            modifiers: {
                preventOverflow: {
                    enabled: true,
                    padding: 32,
                },
            },
        }

        // window.addEventListener('resize', this.alignToRight)
    },
    methods: {
        alignToRight() {
            if (
                this.fixPreventOverflow &&
                this.$screen.md &&
                !this.$screen.lg
            ) {
                const dropdown =
                    this.$refs.dropdown.$el.querySelector(`.dropdown-menu`)
                const rect = dropdown.getBoundingClientRect()
                const elPos = rect.left + rect.width

                dropdown.style.left = `${innerWidth - elPos}px`
            }
        },
    },
    // beforeDestroy() {
    //     window.removeEventListener('resize', this.alignToRight)
    // },
}
</script>

<style lang="scss">
$discount-label-dropdown-border-color: #e6e6e6;
$discount-label-dropdown-background-color: #f3f3f3;
$discount-label-dropdown-color: #222;
$discount-label-dropdown-shadow: 0 3px 5px 0 rgb(0 0 0 / 30%);

.discount-label-dropdown {
    &.dropdown {
        .dropdown-toggle {
            display: flex;
            align-items: center;
            outline: none;
            padding: 0;
            font-size: 1em;
            margin: 0 0.6em;
            box-shadow: none !important;
            border: none !important;
            background-color: transparent !important;

            &::after {
                display: inline;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 8px 4px 0 4px;
                margin-left: 0.7em;
                border-color: $discount-label-dropdown-border-color transparent
                    transparent transparent;
            }
        }

        .dropdown-menu {
            border: none;
            min-width: 11rem;
        }

        .b-dropdown-form {
            padding: 0;
        }
    }

    &__toggle {
        &--underfined {
            text-decoration: underline;
        }
    }

    &.show {
        .dropdown-toggle {
            &::after {
                transform: rotate(180deg);
            }
        }
    }

    &__menu {
        box-shadow: $discount-label-dropdown-shadow;
        background-color: $discount-label-dropdown-background-color;
        color: $discount-label-dropdown-color;
        list-style: none;
        border-radius: 0;
        outline: none;
    }
}
</style>
