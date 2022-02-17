<template>
    <span v-if="isHome"></span>
    <a v-else :href="href" :alt="alt" :title="title"></a>
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
        alt: {
            type: String,
            default: `Logo`,
        },
        title: {
            type: String,
            default: `Logo`,
        },
    },
    computed: {
        isHome() {
            return this.$route.path === '/'
        },
    },
}
</script>
