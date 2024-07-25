<template>
  <div class="work-carousel">
    <div class="work-carousel-inner">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-carousel-inner {
  display: flex;
  flex-direction: column;
}
</style>
