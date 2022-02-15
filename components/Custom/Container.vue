<template>
    <b-container :fluid="!$screen.xl">
        <slot />
    </b-container>
</template>

<script>
export default {
    name: `CustomContainer`,
}
</script>
