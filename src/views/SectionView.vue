<script setup></script>

<template>
  <div class="right_side_view">
    <h1><span>Section</span></h1>
  </div>
</template>

<style lang="scss" scoped>
.right_side_view {
  width: 85%;
  height: 100%;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 5vw;
    font-weight: bold;
    color: var(--black);
    font-family: var(--font-primary);
    span {
      color: var(--orange);
    }
  }
}


</style>
