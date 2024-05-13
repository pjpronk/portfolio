<template>
  <div>
    <article v-for="content in data" :key="content._id">
      <div class="page-content">
        <ContentRenderer :value="content" />
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const { contentItem } = defineProps<{ contentItem: string }>()

const { data } = await useAsyncData(`${contentItem}-content`, async () => {
  return queryContent(contentItem).find()
})
</script>

<style lang="scss" scoped>
.page-content {
  padding-top: 4rem;

  @include for-tablet-landscape-up {
    padding-top: 8rem;
  }
}
</style>
