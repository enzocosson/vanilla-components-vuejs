<script setup></script>

<template>
  <div class="menu">
    <v-btn class="btn"> Front-End </v-btn>
    <v-btn class="btn"> Back-End </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 10%;
  background-color: var(--orange);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .btn {
    height: 4vh;
    background-color: var(--white);
    color: var(--orange);
    font-family: var(--font-primary);
    font-size: 1vw;
    font-weight: bold;
    border-radius: 0.2vw;
  }
}
</style>
