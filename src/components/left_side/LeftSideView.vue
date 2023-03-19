<script setup>
    import MenuTheme from './MenuTheme.vue'
    import ComponentsFront from './ComponentsFront.vue'
</script>

<template>
  <section class="left_side_view">
    <MenuTheme />
    <ComponentsFront />
  </section>
</template>

<style scoped>
    .left_side_view{
        width: 15%;
        height: 100%;
        background-color: var(--gray);
        display: flex;
        flex-direction: column;
    }
</style>
