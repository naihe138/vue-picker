<template>
  <div class="example">{{ message }}</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .example {
    color: red;
    transform: translate3d(0px, 1px, 0px);
    box-sizing: border-box;
  }
</style>