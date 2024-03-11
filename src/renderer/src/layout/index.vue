<template>
  <div class="layout">
    <router-view />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
