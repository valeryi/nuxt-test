<template>
    <b-container :fluid="isFluid">
        <slot />
    </b-container>
</template>

<script>
export default {
    name: `CustomContainer`,
    data() {
        return {
            isFluid: false,
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.sizeHandler)
    },
    mounted() {
        this.sizeHandler()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.sizeHandler)
    },
    methods: {
        sizeHandler() {
            if (window.innerWidth < 1400) {
                this.isFluid = true
            } else {
                this.isFluid = false
            }
        },
    },
}
</script>
