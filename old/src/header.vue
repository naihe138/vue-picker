<template>
  <div class="header">
    <div class="left">
      <span class="btn" @click="cancel">{{cancelText}}</span>
    </div>
    <div class="title">{{title}}</div>
    <div class="right">
      <span class="btn" @click="confirm">{{confirmText}}</span>
    </div>
  </div>
</template>

<script>
  // TODO： 支持自定义的render渲染
  // import textRender from './render'
  export default {
    props: {
      cancelText: {
        type: String
      },
      confirmText: {
        type: String
      },
      title: {
        type: String
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ebedf0;
      transform: scale(0.5);
      border-width: 1px 0;
    }
  }
  .title {
    max-width: 50%;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn {
    padding: 0 16px;
    color: #1989fa;
    font-size: 14px;
    background-color: transparent;
  }
</style>
