<template>
    <transition
        name="slide-in-left"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
    >
        <slot />
    </transition>
</template>

<script>
export default {
    methods: {
        afterEnter() {
            this.$emit('after-enter')
        },
        beforeLeave() {
            this.$emit('before-leave')
        },
    },
}
</script>

<style lang="scss">
.slide-in-left-leave-active,
.slide-in-left-enter-active {
    transition: transform 0.5s ease-in-out;
}
.slide-in-left-enter,
.slide-in-left-leave-to {
    transform: translate(100%, 0);
}
</style>
