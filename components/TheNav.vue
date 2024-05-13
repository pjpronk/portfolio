<template>
  <nav class="nav">
    <BaseLink :link="'/'">
      <BaseTitle2 class="white-background ptb-1-0 plr-1-0 font-size-2-0">
        Paco Pronk
      </BaseTitle2>
    </BaseLink>
    <BaseTitle2 class="white-text underlined"> Source Code </BaseTitle2>
    <BaseTitle2 class="white-background ptb-1-0 plr-1-0 font-size-2-0">
      About
    </BaseTitle2>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
}
</style>
