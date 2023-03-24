<script setup></script>

<template>
  <div class="right_side_view">
    <h1><span>Section</span></h1>
  </div>
</template>

<style lang="scss" scoped>
.right_side_view {
  position: absolute;
    right: 0;
    top: 0;
    width: 85%;
    height: auto;
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
