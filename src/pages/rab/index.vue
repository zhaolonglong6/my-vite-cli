<template>
  <div class="flex gap-times-4">
    <div v-for="item in imgList" :key="item.id">
      <img :src="item.url" alt="cat" class="w-[100px] h-[100px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const imgList = ref<{ id: number; url: string }[]>([]);

const init = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
  imgList.value = await res.json();
};

init();
</script>
