<template>
    <div>
      <div class="page-content">
        <TheNav />
        <Nuxt />
      </div>
      <Snackbar />
    </div>
  </template>
  
  <style lang="scss">
  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    @media (min-width: $min-tablet) and (max-width: $max-tablet) {
      font-size: 14px;
    }
    @media (max-width: $max-mobile) {
      font-size: 12px;
    }
  }
  
  body {
    background: #f7f7f7;
  }
  
  </style>
  