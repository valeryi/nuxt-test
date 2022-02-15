<template>
    <b-navbar toggleable="md" variant="info" class="toolbar">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target @click="toggleSidebar" />
    </b-navbar>
</template>

<script>
export default {
    methods: {
        toggleSidebar() {
            this.$emit('toggleSidebar')
        },
    },
}
</script>

<style lang="scss" scoped>
.toolbar {
    padding: 10px;
}
</style>
