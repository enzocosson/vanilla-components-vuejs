<script setup>
import { ref } from 'vue'
const selCode = ref(false)
const setSelCode = (code) => {
  selCode.value = code
}
console.log(selCode.value)
</script>

<template>
  <div class="header__container">
    <h1>1. Default</h1>
    <div class="desktop">
      <h2>Desktop</h2>
    </div>
    <div class="tablet">
      <h2>Tablet</h2>
    </div>
    <div class="mobile">
      <h2>Mobile</h2>
    </div>

    <v-btn
      @onClick="setSelCode(true)"
      :class="[selCode === true ? 'selected' : 'notSelected', 'btn']"
      type="button"
    >
      Reveal Code
    </v-btn>

    <section v-if="selCode === true" class="code">
      <div class="html-scss">
        <div class="html"></div>
        <div class="scss"></div>
      </div>
      <div class="js"></div>
    </section>
    <section v-else></section>
  </div>
</template>

<style lang="scss" scoped>
.header__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 3vw;
  row-gap: 2vh;

  h1 {
    color: var(--orange);
    font-family: var(--font-primary);
    font-size: 2vw;
  }
  h2 {
    color: var(--black);
    font-family: var(--font-secondary);
    font-size: 1vw;
  }
  .btn {
    height: 4vh;
    background-color: var(--orange);
    color: var(--white);
    font-family: var(--font-primary);
    font-size: 1vw;
    font-weight: bold;
    border-radius: 0.2vw;
  }

  .code {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 2vh;

    .html-scss {
      width: 100%;
      height: 50vh;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .html,
      .scss {
        width: 49%;
        height: 100%;
        background-color: var(--gray);
      }
    }
    .js {
      width: 100%;
      height: 30vh;
      background-color: var(--gray);
    }
  }
}
</style>
