<script setup>

import startupSound from "./assets/sounds/startup.mp3"
import navSound from "./assets/sounds/nav.mp3"

</script>

<template>

  <audio id="startup" :src="startupSound" type="audio/mp3"></audio>
    
  <audio id="nav" :src="navSound" type="audio/mpeg"></audio>

  <RouterView />
</template>

<style scoped>



</style>
