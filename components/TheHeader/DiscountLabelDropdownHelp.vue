<template>
    <the-header-discount-label-dropdown
        align-center
        text="Help"
        class="discount-dropdown-help"
    >
        <b-dropdown-item
            v-for="(link, index) of helpList"
            :key="index"
            class="discount-dropdown-help__item"
        >
            <b-icon
                :icon="link.icon"
                scale=".9"
                aria-hidden="true"
                class="discount-dropdown-help__icon"
            />
            {{ link.text }}
        </b-dropdown-item>
    </the-header-discount-label-dropdown>
</template>

<script>
export default {
    data() {
        return {
            helpList: [
                {
                    icon: `question-circle-fill`,
                    text: `Help & Information`,
                    title: `Link title`,
                },
                {
                    icon: `alarm-fill`,
                    text: `Production & Delivery`,
                    title: `Link title`,
                },
                {
                    icon: `reply-fill`,
                    text: `Returns`,
                    title: `Link title`,
                },
                {
                    icon: `compass`,
                    text: `Track Order`,
                    title: `Link title`,
                },
                {
                    icon: `eye-fill`,
                    text: `Your PD`,
                    title: `Link title`,
                },
                {
                    icon: `card-checklist`,
                    text: `Your prescription`,
                    title: `Link title`,
                },
                {
                    icon: `people-fill`,
                    text: `About us`,
                    title: `Link title`,
                },
                {
                    icon: `envelope-open`,
                    text: `Contact us`,
                    title: `Link title`,
                },
            ],
        }
    },
}
</script>

<style lang="scss">
$discount-dropdown-help-border-color: #e6e6e6;
$discount-dropdown-help-color-hovered: $typography-link-hover-color;

.discount-dropdown-help {
    padding: 0 1em;

    &__item {
        margin: 0 0.8em;
        padding: 0.1em;

        &:not(:last-child) {
            border-bottom: 1px solid $discount-dropdown-help-border-color;
        }

        .dropdown-item {
            margin: 1rem 0;
            padding: 0;
            font-size: 0.9rem;
            font-weight: bold;
            width: 200px;

            &:hover {
                color: $discount-dropdown-help-color-hovered;
                background-color: transparent;
            }
        }
    }

    &__icon {
        transform: translateY(-2px);
        margin-right: 10px;
        color: inherit;
    }
}
</style>
