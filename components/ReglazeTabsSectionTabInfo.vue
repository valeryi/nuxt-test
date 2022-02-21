<template>
    <b-tab title="Information" class="tabs-info">
        <div>
            <div class="tabs-info__header">
                <h3 class="text-center tabs-info__header-text">
                    Replacing your lenses is easy
                </h3>
                <p class="text-center tabs-info__header-subline">
                    <em>This is how it works...</em>
                </p>
            </div>

            <div class="tabs-info__content">
                <div
                    v-for="(step, index) of infoSteps"
                    :key="index"
                    :class="`tabs-info__step--${step.name}`"
                    class="tabs-info__step"
                >
                    <strong class="tabs-info__step-title">{{
                        step.title
                    }}</strong>
                    <img
                        :src="step.src"
                        :alt="step.name"
                        :title="step.name"
                        class="tabs-info__step-image"
                    />
                    <small class="tabs-info__step-description">{{
                        step.description
                    }}</small>
                    <!-- Aware of XSS problem here but for dummy text in this example it's fine -->
                    <p class="tabs-info__step-text" v-html="step.text"></p>
                </div>
            </div>
        </div>

        <div class="tabs-table">
            <h3 class="tabs-table__title">Lens prices for reglaze orders</h3>

            <span class="tabs-table__subline">
                This is an indication of our reglaze prices for
                <strong>clear lenses only</strong>. More lens and tinted options
                are available once you start your order.
            </span>

            <small class="tabs-table__note">
                <em
                    >Prices correct as of May 2021 and are subject to change at
                    any time. Prices are 'from' and can vary for higher
                    prescriptions.</em
                >
            </small>

            <b-table
                striped
                :items="tableData"
                bordered
                class="tabs-table__table"
            />
        </div>

        <div class="should-know">
            <h3 class="should-know__header">What you should know</h3>

            <div
                v-for="(item, index) of shouldKnow"
                :key="index"
                class="should-know__item"
                :class="getShouldKnowItemClass(item)"
            >
                <span class="should-know__title">{{ item.title }}</span>
                <p class="should-know__text">{{ item.text }}</p>
            </div>
        </div>
    </b-tab>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    'Our lenses - including standard coatings': 'Basic 1.50',
                    'Single Vision': 'FREE',
                    Bifocal: '-',
                    Varifocal: '-',
                },
                {
                    'Our lenses - including standard coatings': 'Regular 1.50',
                    'Single Vision': '$14.70',
                    Bifocal: '$40.83',
                    Varifocal: '$65.33',
                },
                {
                    'Our lenses - including standard coatings':
                        'Thin & Light 1.56',
                    'Single Vision': '$22.87',
                    Bifocal: '-',
                    Varifocal: '-',
                },
                {
                    'Our lenses - including standard coatings':
                        'BlueGuard 1.56',
                    'Single Vision': '$29.40',
                    Bifocal: '-',
                    Varifocal: '-',
                },
                {
                    'Our lenses - including standard coatings':
                        'High Impact 1.56',
                    'Single Vision': '$24.50',
                    Bifocal: '$114.33',
                    Varifocal: '$163.33',
                },
                {
                    'Our lenses - including standard coatings':
                        'Polycarbonate 1.59',
                    'Single Vision': '$32.67',
                    Bifocal: '$32.67',
                    Varifocal: '$32.67',
                },
                {
                    'Our lenses - including standard coatings':
                        'Super Thin 1.60',
                    'Single Vision': '$32.67',
                    Bifocal: '$163.33',
                    Varifocal: '$130.67',
                },
                {
                    'Our lenses - including standard coatings':
                        'Ultra Super Thin 1.67',
                    'Single Vision': '$49.00',
                    Bifocal: '$294.00',
                    Varifocal: '$179.67',
                },
                {
                    'Our lenses - including standard coatings':
                        'UltraX Super Thin 1.74',
                    'Single Vision': '$98.00',
                    Bifocal: '-',
                    Varifocal: '$326.67',
                },
                {
                    'Our lenses - including standard coatings':
                        'Elite Super Thin 1.76',
                    'Single Vision': '$294.00',
                    Bifocal: '-',
                    Varifocal: '-',
                },
            ],
            infoSteps: [
                {
                    name: 'one',
                    title: 'Step 1',
                    src: 'https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/icons/reglaze/step1.jpg?20220127113847',
                    description: 'Choose the frame style you want to reglaze.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ea labore nihil distinctio voluptates quam inventore, blanditiis earum dolores repellat voluptatibus soluta explicabo, harum ducimus saepe, accusantium eveniet assumenda facere eligendi? Est harum excepturi corrupti molestiae labore ipsum provident minima animi officia, vel praesentium minus illo repudiandae? Accusantium, eos cumque!',
                },
                {
                    name: 'two',
                    title: 'Step 2',
                    src: 'https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/icons/reglaze/step2.jpg?20220127113847',
                    description:
                        'Enter your prescription and choose your lenses.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. <strong>Suscipit</strong> ea labore nihil distinctio voluptates quam inventore, blanditiis earum dolores repellat voluptatibus soluta explicabo, harum ducimus saepe, accusantium eveniet assumenda facere eligendi? Est harum excepturi corrupti molestiae labore ipsum provident minima animi officia, vel praesentium minus illo repudiandae? Accusantium, eos cumque!',
                },
                {
                    name: 'three',
                    title: 'Step 3',
                    src: 'https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/icons/reglaze/step3.jpg?20220127113847',
                    description:
                        'Pay for your order and send your frames to us by insured post to:',
                    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a href="#" title='Suscipit'>Suscipit</a> ea labore nihil distinctio voluptates quam inventore, blanditiis earum dolores repellat voluptatibus soluta explicabo, harum ducimus saepe, accusantium eveniet assumenda facere eligendi? Est harum excepturi corrupti molestiae labore ipsum provident minima animi officia, vel praesentium minus illo repudiandae? Accusantium, eos cumque!`,
                },
                {
                    name: 'four',
                    title: 'Step 4',
                    src: 'https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/icons/reglaze/step4.jpg?20220127113847',
                    description: 'Choose the frame style you want to reglaze.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ea labore nihil distinctio voluptates quam inventore, blanditiis earum dolores repellat voluptatibus soluta explicabo, harum ducimus saepe, accusantium eveniet assumenda facere eligendi? Est harum excepturi corrupti molestiae labore ipsum provident minima animi officia, vel praesentium minus illo repudiandae? Accusantium, eos cumque!',
                },
            ],
            shouldKnow: [
                {
                    title: 'Frame Condition',
                    text: 'Frames must be in good original condition and not liable to break during the glazing process. Frames should not be adapted or repainted in any way.',
                },
                {
                    title: 'Semi-Rimless/Rimless Frames',
                    text: 'Semi-Rimless/Rimless frames must have at least one non-broken lens in order to be reglazed.',
                },
                {
                    title: 'Curved Frames / Oversized Lenses',
                    text: `Unfortunately, we're unable to reglaze frames or sunglasses with a curvature or large lenses. Please contact us if you're unsure if your frame is suitable.`,
                },
                {
                    title: 'Varifocal/Progressive Lenses',
                    text: `If you're choosing to reglaze a frame with varifocal/progressive lenses, please ensure the minimum height of your frame is 26mm. Unfortunately we're unable to glaze a frame with varifocal lenses if the height is less than this.`,
                },
                {
                    title: 'Risk',
                    text: 'All reglazes are done at the customers own risk. Ensure your frames are sent to us via an insured method, we cannot be held responsible for frames lost in the post.',
                },
                {
                    title: 'Please note',
                    text: `While we make every effort to ensure all reglaze orders are completed, there are occasions where we're unable to complete the reglaze due to damage, brittle frames or a frame design that is not suitable for new lenses to be fitted successfully. In these cases we will contact you to advise you and return your frame and offer a refund. Unfortunately, we cannot refund postage fees.`,
                    type: 'underlined',
                },
                {
                    title: 'Lindberg Frames',
                    text: `Unfortunately, due to the complexity of these frames, we're unable to provide a reglaze service for this brand.`,
                    type: 'italic',
                },
            ],
        }
    },
    methods: {
        getShouldKnowItemClass(item) {
            return {
                'should-know__item--underlined': item.type === 'underlined',
                'should-know__item--italic': item.type === 'italic',
            }
        },
    },
}
</script>

<style lang="scss">
$tabs-info-bg-color: #fff;
$tabs-info-text-color: #000;
$tabs-info-border-color: #e2e6e7;
$tabs-info-border-color-active: #a0a0a0;
$tabs-info-border-mark-color-active: #fc4c02;
$tabs-info-tab-bg-inactive: #f0f0f0;
$tabs-info-tab-bg-color: #fefefe;

$tabs-info-title-font-size: 1.2em;
$tabs-info-subline-font-size: 0.9em;

$tabs-table-header-bg-color: #a7d163;
$tabs-table-border-color: #fff;
$tabs-table-first-col-width: 50%;

.tabs-section {
    &__tab {
        &--active {
            background: $tabs-info-bg-color !important;
            color: $tabs-info-text-color !important;
            border-left: 1px solid $tabs-info-border-color-active !important;
            border-top: 5px solid $tabs-info-border-mark-color-active !important;
            border-right: 1px solid $tabs-info-border-color-active !important;
            border-bottom: 1px solid $tabs-info-border-color-active !important;
            padding: 1rem !important;
        }
    }

    .nav-tabs {
        border: none;

        .nav-item {
            .nav-link {
                padding: 1rem;
                font-size: 1rem;
                font-weight: bold;
                color: $tabs-info-border-color-active;
                background: $tabs-info-tab-bg-inactive;
                border-left: 1px solid $tabs-info-border-color;
                border-top: 5px solid transparent;
                border-right: 1px solid $tabs-info-border-color;
                border-bottom: 1px solid $tabs-info-border-color-active;
                margin-right: 0.25rem;
                min-width: 100px;
                border-radius: 2px;

                &:hover {
                    background: $tabs-info-tab-bg-color;
                    color: $tabs-info-border-mark-color-active;
                    padding: calc(1rem + 4px) 1rem 1rem;
                    border-left: 1px solid $tabs-info-border-color;
                    border-top: 1px solid $tabs-info-border-color;
                    border-right: 1px solid $tabs-info-border-color;
                    border-bottom: 1px solid $tabs-info-border-color-active;
                    box-shadow: none;
                }
            }
        }
    }

    &__content {
        border-top: 1px solid $tabs-info-border-color-active;
    }
}

.tabs-info {
    display: flex;
    flex-direction: column;

    &__content {
        display: flex;
        flex-direction: column;

        @include media-breakpoint-up(1024px) {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
                'one .'
                '. two'
                'three .'
                '. four';
            padding: 2em;
            grid-gap: 0.5em;
        }

        @include media-breakpoint-up(1400px) {
            display: flex !important;
            flex-direction: row;
            justify-content: space-around;
            padding: 0 2em 2em;
        }
    }

    &__header {
        display: grid;
        grid-area: header;
        margin: 2em auto 1em;

        &-text {
            font-size: $tabs-info-title-font-size;
            font-weight: bold;
        }

        &-subline {
            font-size: $tabs-info-subline-font-size;
        }

        @include media-breakpoint-up(1400px) {
            margin: 2em;
        }
    }

    &__step {
        padding: 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;

        &-title,
        &-description,
        &-text {
            text-align: center;
        }

        &-description,
        &-text {
            text-align: center;
            font-size: 0.85em;
        }

        &-title {
            font-size: 1em;
            font-weight: bold;
            margin-bottom: 1em;
        }

        &-text {
            margin-top: 2em;

            a {
                text-decoration: underline;

                &:hover {
                    text-decoration: none;
                }
            }
        }

        &-description {
            padding: 0 3em;
        }

        &-image {
            max-width: 350px;
            align-self: center;

            @include media-breakpoint-up(1400px) {
                max-width: 180px;
            }
        }
    }

    &__step--one {
        grid-area: one;
    }

    &__step--two {
        grid-area: two;
    }

    &__step--three {
        grid-area: three;
    }

    &__step--four {
        grid-area: four;
    }
}

.tabs-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;

    &__title {
        font-weight: bold;
        font-size: $tabs-info-title-font-size;
    }

    &__subline {
        font-size: calc(#{$tabs-info-subline-font-size} - 1px);

        @include media-breakpoint-up(640px) {
            text-align: center;
        }

        @include media-breakpoint-up(1400px) {
            font-size: $tabs-info-subline-font-size;
        }
    }

    &__note {
        font-size: calc(#{$tabs-info-subline-font-size} - 2px);

        @include media-breakpoint-up(640px) {
            text-align: center;
        }
    }

    &__table {
        margin-top: 2em;
        font-size: 0.7em;
        text-align: center;

        @include media-breakpoint-up(640px) {
            font-size: 0.72em;
        }

        thead {
            th {
                background-color: $tabs-table-header-bg-color;
                font-weight: bold;
                border: 1px solid $tabs-table-border-color;
                vertical-align: middle;
            }
        }

        th[aria-colindex='1'],
        td[aria-colindex='1'] {
            width: $tabs-table-first-col-width;
        }

        td {
            border: 1px solid $tabs-table-border-color;
        }
    }
}

.should-know {
    text-align: center;
    margin-top: 4em;

    &__header {
        padding: 0.3em;
        font-size: $tabs-info-title-font-size;
        font-weight: bold;
    }

    &__title {
        display: inline-block;
        font-weight: bold;
        font-size: 0.9em;
        margin-bottom: 0.4em;
    }

    &__text {
        font-size: 0.85em;

        @include media-breakpoint-up(1024px) {
            max-width: 70%;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;

        &--underlined,
        &--italic {
            font-style: italic;
        }
    }

    &__item--underlined &__title {
        text-decoration: underline;
    }
}
</style>
