<script setup lang="ts">
import type { Character } from "@/lib/types";

interface Props {
  character: Character;
}

const props = defineProps<Props>();
</script>

<template>
  <article
    class="cursor-pointer rounded bg-white shadow-md transition hover:scale-105 hover:shadow-pelorous-600"
  >
    <figure class="h-40 w-full overflow-hidden rounded-t sm:h-52">
      <img :src="character.image" :alt="character.name" class="h-full w-full object-cover" />
    </figure>
    <div class="p-2">
      <h3 class="text-lg font-bold">{{ character.name }}</h3>
      <p>{{ character.origin.name }}</p>
    </div>
  </article>
</template>

<style scoped></style>
