<template>
  <div class="work-carousel">
    <BaseLink link="work">
      <BaseTitle2> Works </BaseTitle2>
    </BaseLink>
    <div class="work-carousel-inner">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-carousel-inner {
  display: flex;
}
</style>
