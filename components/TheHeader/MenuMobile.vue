<template>
    <div class="sidebar-mobile">
        <the-header-menu-mobile-group
            :menu="menu"
            group-name="Menu"
            show-close
            @close="onClose"
        />
        <the-header-menu-mobile-group
            :menu="accountMenu"
            group-name="Your account"
        />
        <the-header-menu-mobile-group
            :menu="saleMenu"
            group-name="Sales & Support"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            menu: 'menu/getSidebarMenu',
            accountMenu: 'menu/getAccountMenu',
            saleMenu: 'menu/getSaleMenu',
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
