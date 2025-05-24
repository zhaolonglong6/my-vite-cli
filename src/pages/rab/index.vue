<template>
  <div>{{ age }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '.'

const age = ref<User>({
  id: 1,
  age: 19
})
</script>
