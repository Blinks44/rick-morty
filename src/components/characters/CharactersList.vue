<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useCharactersQuery } from "@/composables/useCharactersQuery";
import CharactersCard from "@/components/characters/CharactersCard.vue";

const { data: characters, currentPage } = useCharactersQuery();
</script>

<template>
  <div class="container">
    <h2 class="text-center text-3xl font-black sm:text-5xl">
      <span class="bg-gradient-to-r from-pelorous-600 to-conifer-400 bg-clip-text text-transparent">
        Персонажи
      </span>
    </h2>

    <div class="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <CharactersCard v-for="character in characters?.results" :character="character" :key="character.id" />
    </div>

    <Pagination
      class="mt-8"
      v-slot="{ page }"
      :total="characters?.info.count"
      :sibling-count="1"
      :items-per-page="20"
      :default-page="1"
      v-model:page="currentPage"
      show-edges
    >
      <PaginationList v-slot="{ items }" class="flex items-center justify-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="h-10 w-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>

<style scoped></style>
