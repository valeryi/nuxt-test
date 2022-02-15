<template>
    <div class="header-logo-section">
        <custom-container>
            <b-row class="justify-content-between align-items-center">
                <b-col>
                    <ui-button-burger @toggle="toggleSidebar" />
                </b-col>
                <b-col>
                    <a href class="header-logo-section__logo"></a>
                </b-col>
            </b-row>
        </custom-container>
    </div>
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

<style lang="scss">
$header-logo-section: #fefefe;

.header-logo-section {
    display: flex;
    background-color: $header-logo-section;

    &__logo {
        @extend %logo-small;
    }
}
</style>
