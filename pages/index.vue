<template>
    <div class="reglaze-page">
        <custom-container class="reglaze-section">
            <b-row>
                <b-col
                    cols="12"
                    class="d-flex flex-column justify-content-center"
                >
                    <h1
                        class="d-flex justify-content-center reglaze-section__header"
                    >
                        Reglaze My Glasses / Sunglasses
                    </h1>
                    <p
                        class="d-inline justify-content-center text-center mt-2 reglaze-section__text"
                    >
                        Give your favourite pair of prescription glasses (or
                        sunglasses) a new lease of life with our premium lens
                        replacement service starting from only
                        <strong>$49.00</strong> including lenses. Offering great
                        value, this service is perfect for those looking to
                        extend the life of their existing eyewear.
                    </p>

                    <img
                        class="reglaze-section__image mt-4"
                        src="https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/banners/reglaze/reglaze.jpg?20220127113847"
                        alt="glasses"
                        title="buy new one"
                    />
                </b-col>
            </b-row>
        </custom-container>

        <div class="reglaze-cards-section my-4 py-4">
            <custom-container>
                <b-row class="d-flex justify-content-between">
                    <b-col v-for="i of 3" :key="i" cols="12" sm="4">
                        <b-card class="reglaze-cards-section__card my-4">
                            <b-card-text
                                class="text-center font-weight-bold text-uppercase"
                                >SEMI rimless</b-card-text
                            >

                            <b-card-text
                                class="d-flex flex-column align-items-center"
                            >
                                <img
                                    class="reglaze-cards-section__image"
                                    src="https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_jpg/reglaze/reglaze-sr.jpg?20220127113847"
                                    alt="glasses"
                                />
                                <span class="reglaze-cards-section__price"
                                    >$65.33</span
                                >
                                <span
                                    class="font-weight-bold text-center reglaze-cards-section__description"
                                    >Including Lenses & Coatings</span
                                >

                                <b-button
                                    class="reglaze-cards-section__button mt-4"
                                    :size="
                                        $screen.lg || $screen.mobile
                                            ? `lg`
                                            : null
                                    "
                                    >Start Reglaze Now »</b-button
                                >
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
            </custom-container>
        </div>

        <reglaze-tabs-section />
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>

<style lang="scss">
$reglaze-cards-section-border-color-hover: #fc4c02;
$reglaze-cards-section-font-size: 0.85em;
$reglaze-cards-section-bg-color: #f7f5f6;
$reglaze-cards-section-border-color: #a0a0a0;
$reglaze-cards-section-border-width: 2px;

.reglaze-section {
    font-size: $reglaze-cards-section-font-size;

    &__header {
        font-size: 1.5em;
        font-weight: 600;

        @include media-breakpoint-up(1024px) {
            font-size: 1.8em;
        }
    }

    &__text {
        @include media-breakpoint-up(640px) {
            max-width: 90%;
            margin: 0 auto;
        }

        @include media-breakpoint-up(1024px) {
            max-width: 70%;
        }
    }

    &__image {
        @include hide-down(640px);
        max-width: 500px;
        margin: 0 auto;
    }
}

.reglaze-cards-section {
    background-color: $reglaze-cards-section-bg-color;

    &__price {
        color: $reglaze-cards-section-border-color-hover;
        font-size: 2em;

        @include media-breakpoint-up(575px) {
            font-size: 1.5em;
        }

        @include media-breakpoint-up(1024px) {
            font-size: 1.4em;
        }
    }

    &__image {
        width: 100%;
    }

    &__description {
        font-size: 0.9em;

        @include media-breakpoint-up(575px) {
            font-size: 0.7em;
        }

        @include media-breakpoint-up(1024px) {
            font-size: 0.9em;
        }
    }

    &__button {
        background-color: $reglaze-cards-section-border-color-hover;
        border: none;
        font-size: 1em;
        width: 200px;
        height: 50px;
        border-radius: 0;

        @include media-breakpoint-up(575px) {
            font-size: 0.65em;
            width: 130px;
            height: 40px;
        }

        @include media-breakpoint-up(1024px) {
            font-size: 0.9em;
            width: 190px;
            height: 40px;
        }

        &:hover {
            background-color: darken(
                $color: $reglaze-cards-section-border-color-hover,
                $amount: 5%
            );
        }
    }

    &__card {
        border: $reglaze-cards-section-border-width solid
            $reglaze-cards-section-border-color;
        transition: border-color ease-in-out 0.5s;
        cursor: pointer;

        &:hover {
            border-color: $reglaze-cards-section-border-color-hover;
        }
    }
}
</style>
