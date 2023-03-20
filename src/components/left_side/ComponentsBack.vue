<script setup></script>

<template>
  <div class="menu_components">
    <ul>
      <li>
        <router-link to="/php" class="link">PHP</router-link>
      </li>
      <li><router-link to="/mysql" class="link">MySQL</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu_components {
  position: relative;
  width: 100%;
  height: 70%;
  background-color: var(--gray);
  padding: 0.8vw;

  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 2vh;

    li{
      .link{
        text-decoration: none;
        color: var(--orange);
        font-size: 1.8vw;
        font-weight: 400;
        font-family: var(--font-primary);
        padding: 0.2vh 0.5vw;
        border-radius: 0.2vw;
        transition: all 0.2s ease-in-out;
        &:hover{
          background-color: var(--dark-gray);
        }
      }
    }

  }
}
</style>
