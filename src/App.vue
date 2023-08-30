<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <!-- <main> -->
    <!-- <center><img alt="Vue logo" class="logo" src="./assets/silence_sounds_question_box_blank_pink.png" width="1500" height="1500" /></center> -->
    <!-- <img alt="Vue logo" src="./assets/silence_sounds_box_question_mark_black_pink.png" width="2500" height="2500" /> -->
  <main> 
    <div class = "wrapper"> 
      <img alt="Vue logo" src="./assets/trace.svg" width="2500" height="2500" />
    </div>
  </main>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  <!-- </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
