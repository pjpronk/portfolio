<template>
  <BaseLink link="/works/">
    <div class="work-carousel-item">
      <BaseImage class="image" :image="image" />
      <BaseTitle3 class="white-background">
        {{ workTitle }}
      </BaseTitle3>
      <BaseText> </BaseText>
    </div>
  </BaseLink>
</template>

<script setup lang="ts">
defineProps<{ image: string; workTitle: string }>()
</script>

<style scoped lang="scss">
.image {
  max-width: 240px;
}
</style>
