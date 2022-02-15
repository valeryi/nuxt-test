<template>
    <b-breadcrumb :items="breadcrumbList"></b-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbList: [
                {
                    text: 'Admin',
                    href: '#',
                },
                {
                    text: 'Manage',
                    href: '#',
                },
            ],
        }
    },
}
</script>
