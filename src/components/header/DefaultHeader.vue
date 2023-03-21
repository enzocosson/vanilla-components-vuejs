<script setup>
import { ref } from 'vue'
const selCode = ref(false)
const setSelCode = (code) => {
  selCode.value = code
}
</script>

<template>
    <div class="header__container">
      <h1>1. Default</h1>
      <div class="desktop">
        <h2>Desktop</h2>
        <img class="header_img" src="../../assets/img/header_default/desktop.png" alt="">
      </div>
      <div class="tablet">
        <h2>Tablet</h2>
        <img class="header_img" src="../../assets/img/header_default/tablet.png" alt="">
      </div>
      <div class="mobile">
        <h2>Mobile</h2>
        <img class="header_img" src="../../assets/img/header_default/mobile.png" alt="">
      </div>
  
      <v-btn
        @click="setSelCode(!selCode)"
        :class="[selCode ? 'selected' : 'notSelected', 'btn']"
        type="button"
      >
        {{ selCode ? 'Hide Code' : 'Reveal Code' }}
      </v-btn>
  
      <section v-if="selCode" class="code">
        <div class="html-scss">
          <div class="html">
            <code>
              
            </code>
          </div>
          <div class="scss"></div>
        </div>
        <div class="js"></div>
      </section>
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
  .header_img{
    height: 7vh;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 4px;
    transition: 0.3s ease-in-out;

    &:hover{
      box-shadow: rgba(0, 0, 0, 0.206) 0px 1px 4px;
    }
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
