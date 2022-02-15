<template>
    <div class="header-discount">
        <custom-container>
            <b-row md="12" class="justify-content-between">
                <b-col
                    cols="12"
                    md="5"
                    class="d-flex justify-content-center justify-content-md-start header-discount__discount"
                >
                    <span> <strong>10% OFF</strong> for New Customers </span>
                    <a
                        href="#"
                        rel="nofollow"
                        class="header-discount__discount-link"
                        title="Get Discount Now"
                        >Get Discount »</a
                    >
                </b-col>

                <b-col
                    md="auto"
                    class="d-none d-md-flex justify-content-between header-discount__info"
                >
                    <strong class="header-discount__reward mx-2">
                        <b-icon
                            icon="trophy-fill"
                            scale=".8"
                            aria-hidden="true"
                            class="header-discount__icon"
                        />
                        <a
                            href="#"
                            rel="nofollow"
                            class="header-discount__reward-link"
                            title="Spend & Earn Rewards"
                            >Spend & Earn Rewards »</a
                        >
                    </strong>

                    <strong class="mx-2">
                        <!-- TODO: Change icons -->
                        <b-icon
                            icon="phone"
                            scale=".8"
                            aria-hidden="true"
                            class="header-discount__icon"
                        />
                        <a
                            href="tel:0330 165 6900"
                            class="header-discount__phone-link"
                            rel="nofollow"
                            title="Call and Buy"
                            >0330 165 6900</a
                        >
                    </strong>

                    <lazy-the-header-discount-label-dropdown-help />
                    <lazy-the-header-discount-label-dropdown-currency
                        fix-prevent-overflow
                    />
                </b-col>
            </b-row>
        </custom-container>
    </div>
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
$header-discount-background-color: #323232;
$header-discount-color: #fff;
$header-discount-discount-link-color: #fc6344;
$header-discount-rewards-link-color: #ffee7e;

.header-discount {
    position: relative;
    padding: 0.5em 1em;
    background: $header-discount-background-color;
    font-size: 0.7rem;
    color: $header-discount-color;

    @include media-breakpoint-up(md) {
        font-size: 0.8rem;
    }

    &__discount-link {
        @include link-underlined($header-discount-discount-link-color) {
            font-weight: bold;
            padding: 0 0.5em;
        }
    }

    &__icon {
        transform: translateY(-2px);
    }

    &__info {
        position: relative;
        right: -35px;
    }

    &__reward {
        align-items: center;

        @include media-breakpoint-down(1000px) {
            display: none;
        }
    }

    &__reward-link {
        @include link-underlined($header-discount-rewards-link-color) {
            font-weight: bold;
            font-size: 1em;
        }
    }

    &__phone-link {
        @include link-underlined($header-discount-color, true) {
            font-weight: bold;
            font-size: 1em;
        }
    }
}
</style>
