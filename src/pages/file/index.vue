<template>
  <div>{{ name }}</div>
  <img
    :src="vueIcon"
    alt="Vue logo"
    class="w-20 h-20"
  />
  <div>{{ jsonData }}123{{ vueIcon }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vueIcon from '../../assets/vue.svg'
import jsonData from './index.json?url'

interface User {
  id: number
  name: string
}

const name = ref<User>({
  id: 1,
  name: 'John Doe'
})
</script>
