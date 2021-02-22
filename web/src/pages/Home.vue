<template>
  <button class="btn">New room</button>
  <button class="btn">Scan qr</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
@layer components {
  .btn {
    @apply mb-5 px-5 py-3 border border-transparent text-3xl font-normal rounded-2xl text-white bg-indigo-600 focus:outline-none hover:bg-indigo-700 active:bg-indigo-800 uppercase;
  }
}
</style>
