<template><ContentDisplay :content-item="`projects/${slug}`" /></template>

<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
const slug = route.params.slug

onMounted(() => {
  console.log(slug)
  // Fetch data, run animations, or perform any side effects here
})
</script>
