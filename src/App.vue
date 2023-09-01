<script setup>
import { createApp } from 'vue';
import App from "./App.vue";  // your App component
import { VueWindowSizePlugin } from 'vue-window-size/plugin';
const app = createApp(App);
app.use(VueWindowSizePlugin);
</script>


<template>
  <div class="center">
    <img alt="question_box" src="./assets/silence_sounds_question_box_blank_pink.png" />
  </div>
</template>
<style scoped>



.center {
    display: flex;
    max-width: 200%;
    max-height: 200%;
    justify-content: center;
    align-items: center;
    border: 555px solid green;
  } 

  .center img {
    /* width: 100%; */
  }

  .zoom-img {
  width: 500px;
  height: 500px;
  overflow: scroll;
}

.zoom-img img {
  width: 100%;
  transition: width 0.25s ease;
}

.zoom-img img:hover {
  width: 3000px;
}
  </style>




<!-- --------- IGNORE --------- -->
/* @media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

   /* .center {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 15px solid green;
    padding: 0px;
    margin-right: auto; /* 1 */
  /* margin-left:  auto;
  margin: 0px;
width:100%;
height:100%;  */ */
    /* place-items: flex-start; */
    /* flex-wrap: wrap; */
  /* }
} */
<!-- </style> */ */ -->
