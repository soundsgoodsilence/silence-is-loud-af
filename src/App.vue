<script setup>
import { createApp } from 'vue';
import App from "./App.vue";  // your App component
import { VueWindowSizePlugin } from 'vue-window-size/plugin';
// import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'; 
const app = createApp(App);
// const [wrapperEl] = useAutoAnimate()
app.use(VueWindowSizePlugin).use(autoAnimatePlugin)
//.mount('#app');
</script>


<template>
  <div autoAnimatePlugin class="parent">
    <div ref="wrapperEl" class="parent">
      <h2 @click="isOpen = !isOpen" class="text-xl font-bold">
      
        <img alt="question_box" src="./assets/good_black_pink.png" />
        <img alt="question_box" src="./assets/Better_black_pink.png" />
        <img alt="question_box" src="./assets/best_black_pink.png" />
      </h2>
      <!-- <p>window width: {{ $windowWidth }}</p> -->
      <hr>
      <!-- <img alt="question_box" src="./assets/silence_sounds_question_box_blank_pink.png" /> -->
      <!-- <img alt="question_box" src="./assets/good_black_pink.png" /> -->
      <!-- <img alt="question_box" src="./assets/Better_black_pink.png" /> -->
      <!-- <img alt="question_box" src="./assets/best_black_pink.png" /> -->
    </div>
  </div>
</template>




<style scoped>

.parent {
  /* border: 555px solid green; */
  max-width: 100%;
  max-height: 100%;
  /* margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px; */
  padding: 0px 0px;
  margin: 0px 0px;
  /* border: 0px 0px; */

}

.center {
  /* background: linear-gradient(to right, red, blue); */
    display: flex;
    max-width: 100%;
    max-height: 40%;
    justify-content: center;
    align-items: center;
    /* padding: 0%; */
    /* margin: 50px 50px; */
    /* border: 100px solid green ; */
  } 

  .center img {
    width: 100%;
    height: 80%;
    /* border: 10px solid black ; */
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
