<template>
    <transition name="fade">
        <div
            v-if="show"
            :style="{ zIndex }"
            class="overlay"
            @click="onClick"
        ></div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
        },
        zIndex: {
            type: Number,
            default() {
                return this.defaultZIndex
            },
        },
    },
    data() {
        return {
            defaultZIndex: 9999,
        }
    },
    methods: {
        onClick() {
            this.$emit('hide')
        },
    },
}
</script>

<style lang="scss">
$layout-color: rgb(233, 233, 233);

.overlay {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $layout-color;
    opacity: 0.5;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
