<template>
    <div class="partner-logo flex-column">
        <div class="partner-logo__logo">
            <slot name="logo" />
        </div>

        <div
            class="d-flex flex-column align-items-center partner-logo__description"
        >
            <a
                :href="href"
                :alt="alt"
                :title="title"
                class="partner-logo__description-link"
                >{{ linkText }}</a
            >
            <slot name="description" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: `#`,
            validator(value) {
                return /(http|https)(:\/\/).+/.test(value) || value === `#`
            },
        },
        linkText: {
            type: String,
            default: 'Link',
        },
        alt: {
            type: String,
            default() {
                return this.linkText
            },
        },
        title: {
            type: String,
            default() {
                return this.linkText
            },
        },
    },
}
</script>

<style lang="scss">
$partner-logo-text-color: $typography-font-color-primary;
$partner-logo-font-size: 0.7rem;
$partner-logo-link-hover-color: $typography-link-hover-color;

.partner-logo {
    &__description {
        line-height: 1;
        font-size: $partner-logo-font-size;
        color: $partner-logo-text-color;

        &-link {
            color: $partner-logo-text-color;
            font-weight: bold;
            margin-bottom: 0.1rem;

            &:hover {
                color: $partner-logo-link-hover-color;
                text-decoration: none;
            }
        }
    }
}
</style>
