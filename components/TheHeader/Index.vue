<template>
    <header class="header">
        <the-header-discount-label />
        <lazy-the-header-logo-section />
        <the-header-toolbar-component @toggleSidebar="toggleSidebar" />
        <the-header-breadcrumbs-component />
    </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            toggleSidebar: 'sidebar/TOGGLE_SIDEBAR_MOBILE',
        }),
    },
}
</script>
