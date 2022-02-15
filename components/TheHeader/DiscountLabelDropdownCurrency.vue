<template>
    <the-header-discount-label-dropdown
        :button-underlined="false"
        :placement="$screen.lg ? `bottom-end` : null"
        fix-prevent-overflow
        align-center
        class="discount-dropdown-currency"
    >
        <b-dropdown-form class="discount-dropdown-currency__form">
            <span class="discount-dropdown-currency__currency-label"
                >Change currency</span
            >

            <b-form-select
                v-model="currentCurrency"
                class="discount-dropdown-currency__form-select"
            >
                <b-form-select-option
                    v-for="(currency, index) of currencyList"
                    :key="index"
                    :value="currency"
                    >{{ currency }}</b-form-select-option
                >
            </b-form-select>
        </b-dropdown-form>

        <span class="discount-dropdown-currency__lang-label"
            >Other country sites</span
        >

        <b-dropdown-item
            v-for="(link, index) of langList"
            :key="index"
            class="discount-dropdown-currency__item"
            @click="pickLang"
        >
            <img
                :src="link.src"
                width="20px"
                height="20px"
                class="discount-dropdown-currency__flag"
            />
            {{ link.text }}
        </b-dropdown-item>

        <template #button-content>
            <span class="discount-dropdown-currency__button">
                <img
                    :src="getCurrentFlag"
                    width="17px"
                    height="17px"
                    class="discount-dropdown-currency__current-flag mx-1"
                />
                {{ currentCurrency }}
            </span>
        </template>
    </the-header-discount-label-dropdown>
</template>

<script>
export default {
    props: {
        fixPreventOverflow: {
            type: Boolean,
        },
    },
    data() {
        return {
            currentLang: null,
            currentCurrency: '₴ UAH',
            langList: [
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/uk.png`,
                    text: `English`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/de.png`,
                    text: `Deutsch`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/cn.png`,
                    text: `中国 (Chinese)`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/ca.png`,
                    text: `Canadian`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/au.png`,
                    text: `Australian`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/es.png`,
                    text: `Espanol`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/it.png`,
                    text: `Italiano`,
                    title: `Link title`,
                },
                {
                    src: `https://d9qzjwuieyamt.cloudfront.net/5.6.1.36/res/images/_png/flags/us.png`,
                    text: `American`,
                    title: `Link title`,
                },
            ],
            currencyList: [
                `£ GBP`,
                `€ EUR`,
                `$ USD`,
                `£ GBP`,
                `¥ JPY`,
                `$ AUD`,
                `$ CAD`,
                `₴ UAH`,
                `₽ RUB`,
                `$ NZD`,
                `¥ CNY`,
                `₹ INR`,
            ],
        }
    },
    computed: {
        getCurrentFlag() {
            return this.currentLang || this.langList[0].src
        },
    },
    methods: {
        pickLang(event) {
            const src = event.target.querySelector('img').src
            this.currentLang = src
        },
    },
}
</script>

<style lang="scss">
$discount-dropdown-currency-border-color: #e6e6e6;
$discount-dropdown-currency-select-border-color: #cacaca;
$discount-dropdown-currency-color-hovered: #2ba6cb;

.discount-dropdown-currency {
    min-width: 130px;

    &__form {
        margin: 0 0 1em;
    }

    &__form-select {
        margin: 0 0.8em;
        width: calc(100% - (0.8em * 2));
        border: 1px solid $discount-dropdown-currency-select-border-color;
        font-size: 0.8em;
        padding: 0 0.5rem;

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    &__item {
        margin: 0 0.8em;

        &:first-child {
            margin-top: 40px;
        }

        .dropdown-item {
            padding: 0;
            margin: 0.4em 0;
            font-size: 0.8em;

            &:hover {
                background-color: transparent;
                color: $discount-dropdown-currency-color-hovered;
            }
        }

        &:not(:last-child) {
            border-bottom: 1px solid $discount-dropdown-currency-border-color;
        }
    }

    &__lang-label,
    &__currency-label {
        font-size: 0.75em;
        font-weight: bold;
        margin: 0 0.8em;
        padding-left: 1px;
    }

    &__button {
        text-decoration: none;
    }

    &__current-flag,
    &__flag {
        transform: translateY(-2px);
    }

    &__flag {
        margin-right: 0.5em;
    }
}
</style>
