<script setup>
import ComponentsFront from './ComponentsFront.vue'
import ComponentsBack from './ComponentsBack.vue'
import LogoComponant from './LogoComponant.vue'

import { ref } from 'vue'
const selTheme = ref('front')
const setSelTheme = (theme) => {
  selTheme.value = theme
}
</script>

<template>
  <section class="left_side_view">
    <LogoComponant />
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
    <ComponentsFront v-if="selTheme === 'front'" />
    <ComponentsBack v-else />
  </section>
</template>

<style lang="scss" scoped>
.left_side_view {
  position: fixed;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;

  .menu {
    width: 100%;
    height: 10%;
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.8vw;

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
}
</style>
