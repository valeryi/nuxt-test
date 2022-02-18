<template>
    <b-tab :title="`Reviews (${reviews.length})`"></b-tab>
</template>

<script>
export default {
    data() {
        return {
            reviews: ['', '', '', '', ''],
        }
    },
}
</script>
