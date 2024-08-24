<template>
  <v-app>
    <div class="layout">
      <TheHeader />
      <div class="page-wrapper">
        <slot />
      </div>
      <TheFooter />
    </div>
  </v-app>
</template>

<style lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-wrapper {
  flex: 1;
}
</style>
