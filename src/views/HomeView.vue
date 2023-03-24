<script setup></script>

<template>
  <div class="right_side_view">
    <h1>Plug And <span>Code</span></h1>
    <p>
      Envie de coder plus <span>rapidement</span>  sans passer par un framwork ? <br />Ce site est fait pour vous
      :)
    </p>
   <img class="illustration" src="../assets/img/web-dev.svg" alt="">
   <p>Parcourez les différents composants précrées pour aller plus vite, que ce soit en <span>Front-End</span> ou en <span>Back-End</span></p>
  </div>
</template>

<style lang="scss" scoped>
.right_side_view {
  position: absolute;
  right: 0;
  top: 0;
  width: 85%;
  height: 100vh;
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

p{
  width: 65%;
  font-size: 1.5vw;
  font-weight: 400;
  color: var(--black);
  font-family: var(--font-secondary);
  text-align: center;
  margin: 2vw;

  span{
    color: var(--orange);
  }
}
  .illustration{
    width: 40vw;
  }
}
</style>
