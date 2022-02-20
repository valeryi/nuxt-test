<template>
    <header class="header">
        <the-header-discount-label />
        <lazy-the-header-logo-section @sidebar:toggle="toggleSidebar" />
        <the-header-toolbar-component @sidebar:toggle="toggleSidebar" />
        <the-header-breadcrumbs-component />
    </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            toggleSidebar: 'menu/toggleSideBarMobile',
        }),
    },
}
</script>
