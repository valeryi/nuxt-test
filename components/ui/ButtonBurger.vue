<template>
    <div
        :style="buttonStyles"
        :tabindex="tabindex"
        class="header-button-burger"
        @click="onClick"
    >
        <span v-for="i of 3" :key="i" class="header-button-burger__line"></span>
    </div>
</template>

<script>
export default {
    name: `TheHeaderButtonBurger`,
    props: {
        zIndex: {
            type: Number,
            default: 99999,
        },
        tabindex: {
            type: Boolean,
            default: true,
        },
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 17,
        },
    },
    computed: {
        buttonStyles() {
            return {
                width: this.width ? `${this.width}px` : null,
                height: this.height ? `${this.height}px` : null,
                zIndex: this.zIndex,
            }
        },
    },
    methods: {
        onClick() {
            this.$emit('toggle')
        },
    },
}
</script>

<style lang="scss">
$header-button-burger-width: 24px;
$header-button-burger-height: 17px;
$header-button-burger-line-height: 3px;
$header-button-burger-bg-color: #333;

.header-button-burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: $header-button-burger-width;
    height: $header-button-burger-height;
    margin: 0.2rem 0.4rem;
    position: relative;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }

    &__line {
        display: block;
        width: 100%;
        height: $header-button-burger-line-height;
        background-color: $header-button-burger-bg-color;
        border-radius: 1px;
    }
}
</style>
