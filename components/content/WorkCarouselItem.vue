<template>
  <BaseLink link="/works/">
    <div class="work-carousel-item">
      <BaseImage v-for="image in images" class="image" :image="image" />
      <BaseTitle3 class="white-background">
        {{ workTitle }}
      </BaseTitle3>
      <BaseText> </BaseText>
    </div>
  </BaseLink>
</template>

<script setup lang="ts">
defineProps<{ images: string[]; workTitle: string }>()
</script>

<style scoped lang="scss">
.image {
  min-width: 240px;
  max-width: 600px;
  object-fit: contain;
}
.work-carousel-item {
  display: flex;
  flex-direction: column;
}
</style>
