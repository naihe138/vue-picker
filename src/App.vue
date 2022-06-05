<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MyComponent msg="Component Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
  import MyComponent from './components/index';
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
