<template>
    <div class="header-logo-section">
        <custom-container>
            <b-row class="header-logo-section__wrapper">
                <b-col cols="auto" class="header-logo-section__left-side">
                    <ui-button-burger
                        class="header-logo-section__burger"
                        @toggle="onClick"
                    />

                    <the-header-logo-section-partner-logo
                        link-text="FREE Delivery"
                        class="header-logo-section__car"
                    >
                        <template #logo>
                            <div class="header-logo-section__car-logo"></div>
                        </template>

                        <template #description>
                            <span>On orders over</span>
                        </template>
                    </the-header-logo-section-partner-logo>

                    <the-header-logo-section-partner-logo
                        link-text="Loved by Customers"
                        class="header-logo-section__trustpilot"
                    >
                        <template #logo>
                            <div
                                class="header-logo-section__trustpilot-logo"
                            ></div>
                        </template>

                        <template #description>
                            <span>
                                Over
                                <strong>5,000</strong> reviews
                            </span>
                        </template>
                    </the-header-logo-section-partner-logo>
                </b-col>

                <b-col class="header-logo-section__logo">
                    <seo-logo-background
                        class="header-logo-section__logo--mobile"
                    />
                    <seo-logo-background
                        class="header-logo-section__logo--desktop"
                    />
                </b-col>

                <client-only>
                    <b-col cols="auto" class="header-logo-section__right-side">
                        <the-header-icon-component
                            v-if="showOtherIcons"
                            :show-text="true"
                            icon="person-circle"
                            text="sign in"
                            class="header-logo-section__icon"
                        />
                        <the-header-icon-component
                            v-if="showSearchIcon"
                            icon="search"
                            class="header-logo-section__icon"
                        />
                        <the-header-icon-component
                            v-if="showOtherIcons"
                            icon="heart"
                            class="header-logo-section__icon"
                        />
                        <the-header-icon-component
                            icon="handbag-fill"
                            class="header-logo-section__icon"
                        />
                    </b-col>
                </client-only>
            </b-row>
        </custom-container>
    </div>
</template>

<script>
export default {
    computed: {
        showSearchIcon() {
            return this.$screen.width < 640 || this.$screen.width > 1024
        },
        showOtherIcons() {
            return this.$screen.width > 1024
        },
    },
    methods: {
        onClick() {
            this.$emit('sidebar:toggle')
        },
    },
}
</script>

<style lang="scss">
$header-logo-section: #f6f6f6;

.header-logo-section {
    background-color: $header-logo-section;
    padding: 0.5rem;

    &__wrapper {
        display: flex;
        align-items: center;

        @include media-breakpoint-up(640px) {
            justify-content: space-around;
        }
    }

    &__icon {
        @include media-breakpoint-up(640px) {
            margin-left: 1.5em;
        }

        svg {
            @include media-breakpoint-up(640px) {
                transform: scale(1.3);
            }
        }
    }

    &__right-side {
        display: flex;
        justify-content: flex-end;

        @include media-breakpoint-up(1024px) {
            @include grid-cell(4);
        }
    }

    &__logo {
        display: flex;
        padding: 0;

        @include media-breakpoint-up(640px) {
            justify-content: center;
            align-items: center;
        }

        @include media-breakpoint-up(1024px) {
            @include grid-cell(4);
        }

        &--mobile {
            @extend %logo-small;
            @include hide-up(640px);
        }

        &--desktop {
            @extend %logo-big;
            @include hide-down(640px);
        }
    }

    &__left-side {
        display: flex;
        justify-content: flex-start;
        padding: 0;

        @include media-breakpoint-up(1024px) {
            @include grid-cell(4);
        }
    }

    &__burger {
        @include hide-up(640px);
    }

    &__car,
    &__trustpilot {
        margin: 0 0.5rem;
    }

    &__car {
        margin-left: 1.5rem;
        @include hide-down(640px);

        &-logo {
            @extend %car;
        }
    }

    &__trustpilot {
        @include hide-down(1025px);

        &-logo {
            @extend %trustpilot;
        }
    }
}
</style>
