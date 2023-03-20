<script setup>
import { ref } from 'vue'
const selTheme = ref('front')
// const setSelTheme = (theme) => {
//   selTheme.value = theme
// }
</script>

<template>
  <div class="menu">
    <v-btn
      @click="setSelTheme('front')"
      :class="[selTheme === 'front' ? 'selected' : 'notSelected', 'btn']"
      type="button"
    >
      Front-End
    </v-btn>
    <v-btn
      @click="setSelTheme('back')"
      :class="[selTheme === 'back' ? 'selected' : 'notSelected', 'btn']"
      type="button"
    >
      Back-End
    </v-btn>
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
  .selected {
    background-color: var(--white);
    border: 0.2vw solid var(--white);
    color: var(--orange);
  }
  .notSelected {
    background-color: var(--orange);
    border: 0.2vw solid var(--white);
    color: var(--white);
  }
}
</style>
