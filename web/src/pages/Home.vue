<template>
  <button class="btn" @click="newRoom">New room</button>
  <button class="btn">Scan qr</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { nanoid } from 'nanoid';

export default defineComponent({
  setup() {
    const router = useRouter();

    const newRoom = () => {
      router.push({
        name: 'room',
        params: {
          id: nanoid(),
        },
      });
    };

    return {
      newRoom,
    };
  },
});
</script>

<style lang="scss" scoped>
@layer components {
  .btn {
    @apply mb-5 px-5 py-3 border border-transparent text-3xl font-normal rounded-2xl text-white bg-indigo-600 focus:outline-none hover:bg-indigo-700 active:bg-indigo-800 uppercase;
  }
}
</style>
