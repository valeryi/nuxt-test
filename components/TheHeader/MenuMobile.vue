<template>
    <div class="sidebar-mobile">
        <the-header-menu-mobile-group
            :menu="menu"
            group-name="Menu"
            show-close
            @close="close"
        />
    </div>
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
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style lang="scss">
.sidebar-mobile {
    user-select: none;
    width: 200px;
}
</style>
