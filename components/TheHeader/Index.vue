<template>
    <header class="header">
        <the-header-discount-label />
        <lazy-the-header-logo-section @sidebar:toggle="toggleSidebar" />
        <the-header-toolbar-component @sidebar:toggle="toggleSidebar" />
        <the-header-breadcrumbs-component />
    </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            toggleSidebar: 'menu/TOGGLE_SIDEBAR_MOBILE',
        }),
    },
}
</script>
