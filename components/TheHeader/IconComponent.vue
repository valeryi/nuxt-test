<template>
    <a class="header-icon" @click="onClick">
        <span v-if="showText" class="header-icon__text">{{ text }}</span>
        <b-icon :icon="icon" :scale="scale" class="header-icon__icon" />
    </a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: `Icon Link`,
        },
        scale: {
            type: Number,
            default: 1.8,
        },
        showText: {
            type: Boolean,
        },
        icon: {
            type: String,
            default: `signpost-split`,
        },
    },
    methods: {
        onClick() {
            this.$emit('click')
        },
    },
}
</script>

<style lang="scss">
$header-icon-font-size: 0.65rem;
$header-icon-font-color: #222;
$header-icon-color: #2f4258;
$header-icon-color-hovered: #fc4c02;

.header-icon {
    display: flex;
    align-items: center;
    margin: 0.4em;
    color: $header-icon-font-color;
    font-size: $header-icon-font-size;
    user-select: none;
    cursor: pointer;

    &__icon {
        margin-left: 1.5em;
        color: $header-icon-color;

        &:hover {
            color: $header-icon-color-hovered;
        }
    }

    &__text {
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transform: translateY(0.1em);
    }

    &:hover {
        text-decoration: none;
        color: $typography-link-hover-color;
    }
}
</style>
