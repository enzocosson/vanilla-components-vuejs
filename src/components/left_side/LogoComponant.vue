<script setup></script>

<template>
  <div class="logo__container">
    <router-link to="/" class="logo__link">
      <img class="logo__img" src="../../assets/img/logo.png" alt="" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo__container {
  width: 100%;
  height: 10%;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  .logo__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo__img {
      height: 70%;
    }
  }
}
</style>
