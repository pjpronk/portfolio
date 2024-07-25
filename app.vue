<template>
  <div class="layout">
    <TheNav />
    <NuxtPage class="content" />
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
  line-height: 24px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @include for-tablet-landscape-down {
    font-size: 14px;
  }
  @include for-phone-only {
    font-size: 12px;
  }
}

body {
  background: $white;
}

.layout {
  display: flex;
}

.content {
  width: 100%;
  height: 100%;
}
</style>
