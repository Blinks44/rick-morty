<script setup lang="ts">
import logo from "@/assets/images/logo.png";
</script>

<template>
  <header class="border-b bg-white py-4">
    <div class="container flex items-center justify-between">
      <div class="flex items-center gap-2">
        <figure>
          <img :src="logo" alt="Логотип мультфильма" class="h-10" />
        </figure>
        <span>Rick & Morty</span>
      </div>

      <nav>
        <ul class="flex items-center gap-4">
          <li>
            <a
              class="relative w-fit py-4 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#"
            >
              Персонажи
            </a>
          </li>
          <li>
            <a
              class="relative w-fit py-4 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-black after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
              href="#"
            >
              Эпизоды
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
