<template>
    <the-header-menu-mobile-group
        :menu="menu"
        group-name="Menu"
        show-close
        class="sidebar-mobile"
        @close="onClose"
    />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            menu: 'menu/getMenu',
        }),
    },
    methods: {
        onClose() {
            this.$emit('close')
        },
    },
}
</script>

<style lang="scss">
$sidebar-width: 250px;

.sidebar-mobile {
    user-select: none;
    width: $sidebar-width;
}
</style>
