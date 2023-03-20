<script setup></script>

<template>
  <div class="menu_components">
    <ul>
      <li>
        <router-link to="/header" class="link">Header</router-link>
      </li>


      <!-- <v-menu 
      class="link">
      <template v-slot:activator="{ props }" >
        <v-btn
          color="primary"
          v-bind="props"
        >
          Activator slot
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
      <li><router-link to="/section" class="link">Section</router-link></li>
      <li><router-link to="/card" class="link">Card</router-link></li>
      <li><router-link to="/carousel" class="link">Carousel</router-link></li>
      <li><router-link to="/footer" class="link">Footer</router-link></li>
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

    li {
      .link {
        text-decoration: none;
        color: var(--orange);
        font-size: 1.8vw;
        font-weight: 400;
        font-family: var(--font-primary);
        padding: 0.2vh 0.5vw;
        border-radius: 0.2vw;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: var(--dark-gray);
        }
      }
    }
  }
}
</style>
