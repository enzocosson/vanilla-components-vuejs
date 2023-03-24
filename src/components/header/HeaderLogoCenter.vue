<script setup>
import { ref } from 'vue'
const selCode = ref(false)
const setSelCode = (code) => {
  selCode.value = code
}
</script>

<template>
  <div class="header__container">
    <h1>1. Logo Center</h1>
    <div class="desktop">
      <h2>Desktop</h2>
      <img class="header_img" src="../../assets/img/header_logo_center/desktop.png" alt="" />
    </div>
    <div class="tablet">
      <h2>Tablet</h2>
      <img class="header_img" src="../../assets/img/header_logo_center/tablet.png" alt="" />
    </div>
    <div class="mobile">
      <h2>Mobile</h2>
      <img class="header_img" src="../../assets/img/header_logo_center/mobile.png" alt="" />
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
          <pre>
            <div class="title">
               <span>HTML</span>
               <v-btn>copy</v-btn>
             </div>
             <div class="container__code">
                  <code class="html">
  &lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="UTF-8" /&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
      &lt;title&lt;Document&lt;/title&lt;
      &lt;link rel="stylesheet" href="./styles.css" /&gt;
    &lt;/head&gt;
      &lt;body&gt;
        &lt;header&gt;
          &lt;a href="index.html" class="logo"&gt;LOGO&lt;/a&gt;
          &lt;nav class="menu"&lt;
            &lt;ul&lt;
              &lt;li&gt;&lt;a href="index.html"&lt;Home&gt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="about.html"&lt;About&gt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="contact.html"&lt;Contact&gt;/a&gt;&lt;/li&gt;
            &lt;/ul&lt;
          &lt;/nav&lt;

          &lt;div class="burger"&gt;
            &lt;div class="line1"&gt;&lt;/div&gt;
            &lt;div class="line2"&gt;&lt;/div&gt;
            &lt;div class="line3"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/header&gt;
      &lt;/body&gt;
    &lt;script src="app.js"&gt;&lt;/script&gt;
    &lt;/html&gt;

                  </code>
             </div>
          </pre>
        </div>
        <div class="scss">
          <pre>
            <div class="title">
               <span>SCSS</span>
               <v-btn>copy</v-btn>
             </div>
             <div class="container__code">
                  <code class="scss">
@import url(https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:200,300,regular,500,600,700,800,200italic,300italic,italic,500italic,600italic,700italic,800italic);
@import url(https://fonts.googleapis.com/css?family=Bebas+Neue:regular);

* {
  font-family: "Bebas Neue", cursive;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --black: #232323;
  --white: #f5f5f5;
}

body {
  background-color: var(--black);
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh 2vw;
    background-color: var(--white);

    .logo {
      font-size: 3.5rem;
      font-weight: 700;
      color: var(--black);
      text-decoration: none;
    }

    .menu {
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        column-gap: 2vw;
        li {
          a {
            font-size: 1.5rem;
            font-weight: 500;
            padding: 0.5vw 1vw;
            color: var(--black);
            text-decoration: none;
            font-family: "Plus Jakarta Sans", sans-serif;
            transition: 0.3s ease-in-out;

            &:hover {
              background-color: var(--black);
              color: #fff;
              border-radius: 5px;
            }
          }
        }
      }
    }

    .burger {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  body {
    header {
      .menu {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transition: 0.5s ease-in-out;
        transform: translateY(-100%);

        ul {
          flex-direction: column;
          column-gap: 0;
          row-gap: 2vh;
          align-items: center;
          li {
            a {
              font-size: 2rem;
            }
          }
        }
      }
      .menu_active {
        transform: translateY(0);
      }
      .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 8vw;
        height: 5vw;
        font-size: 2rem;
        cursor: pointer;
        z-index: 2;

        .line1,
        .line2,
        .line3 {
          height: 0.3vh;
          width: 100%;
          background-color: var(--black);
          transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .line1_active {
          transform: rotate(45deg) translate(0.5vw, 2.9vw);
        }
        .line2_active {
          opacity: 0;
        }
        .line3_active {
          transform: rotate(-45deg) translate(0.5vw, -2.9vw);
        }
      }
    }
  }
}


                  </code>
             </div>
          </pre>
        </div>
      </div>
      <div class="js">
        <pre>
            <div class="title">
               <span>HTML</span>
               <v-btn>copy</v-btn>
             </div>
             <div class="container__code">
                  <code class="js">
function toggleMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
    line1.classList.toggle("line1_active");
    line2.classList.toggle("line2_active");
    line3.classList.toggle("line3_active");
  });
}
toggleMenu();

                  </code>
             </div>
          </pre>
      </div>
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
  .header_img {
    height: 7vh;
    box-shadow: rgba(0, 0, 0, 0.054) 0px 1px 16px;
    transition: 0.3s ease-in-out;

    &:hover {
      box-shadow: rgba(222, 92, 53, 0.108) 0px 1px 16px;
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
      position: relative;
      width: 100%;
      height: 50vh;

      display: flex;
      justify-content: space-between;
      align-items: center;

      pre {
        width: 100%;
        height: 100%;
        white-space: pre;
        background-color: transparent;
        border: 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .title {
          width: 100%;
          height: 5vh;
          background-color: var(--orange);
          padding: 1vw;

          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            color: var(--white);
            font-family: var(--font-primary);
            font-size: 1.2vw;
            font-weight: 500;
          }
          button {
            color: var(--black);
            font-family: var(--font-secondary);
            font-size: 0.8vw;
            font-weight: bold;
          }
        }
        .container__code {
          width: 100%;
          height: 90%;
          overflow: scroll;

          code {
            width: 100%;
            height: 100%;
            font-size: inherit;
            color: #212529;
            word-wrap: normal;
          }
        }
      }

      .html,
      .scss {
        width: 49%;
        height: 100%;
        background-color: var(--gray);
      }
    }
    .js {
      position: relative;
      width: 100%;
      height: 40vh;
      background-color: var(--gray);

      pre {
        width: 100%;
        height: 100%;
        white-space: pre;
        background-color: transparent;
        border: 0;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .title {
          width: 100%;
          height: 5vh;
          background-color: var(--orange);
          padding: 1vw;

          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            color: var(--white);
            font-family: var(--font-primary);
            font-size: 1.2vw;
            font-weight: 500;
          }
          button {
            color: var(--black);
            font-family: var(--font-secondary);
            font-size: 0.8vw;
            font-weight: bold;
          }
        }
        .container__code {
          width: 100%;
          height: 90%;
          overflow: scroll;

          code {
            width: 100%;
            height: 100%;
            font-size: inherit;
            color: #212529;
            word-wrap: normal;
          }
        }
      }
    }
  }
}
</style>
