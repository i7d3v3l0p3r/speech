<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
body {
  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #272727;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f5f5f5;
}

#app {
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
