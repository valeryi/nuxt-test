<template>
    <div class="breadcrumb">
        <custom-container>
            <b-breadcrumb :items="breadcrumbList" />
        </custom-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbList: [
                {
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'LENS REPLACEMENT & REGLAZE SERVICE',
                    href: '#',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
$breadcrumbs-font-size: 0.65rem;
$breadcrumbs-font-xolor: #b0b0b0;

.breadcrumb {
    font-size: $breadcrumbs-font-size;
    background-color: transparent;
    text-transform: uppercase;
    padding: 0.3rem 0;

    &-item {
        a {
            font-weight: bold;
            color: $breadcrumbs-font-xolor;
        }

        &.active {
            color: $breadcrumbs-font-xolor;
        }
    }
}
</style>
