<template>
  <div class="list" ref="list">
    <ul :style="ulStyle">
      <li v-for="(item, index) in column" :key="'item' + index">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import { getClient, START_EVENT, MOVE_EVENT, END_EVENT } from './utils.js'
  const MoveTime = 300
  export default {
    props: {
      defaultIndex: {
        type: Number,
        default: 0
      },
      column: {
        type: Array,
        default: () => ([])
      },
      boxHeight: Number,
      itemHeight: Number
    },
    data() {
      return {
        ulStyle: {
          transform: `translate3d(0px, 0px, 0px)`,
          transitionDuration: `0ms`,
          transitionProperty: `none`,
          lineHeight: `44px`
        }
      }
    },
    methods: {
      init () {
        this.setTop(this.defaultIndex)
        const halfBox = (this.boxHeight - this.itemHeight) / 2
        this.bottom = halfBox + this.itemHeight
        this.top = halfBox - this.column.length * this.itemHeight
        // 惯性运动相关
        this.distStartTop = 0
        this.distStartTime = 0
        this.timer = 0
        // 监听开始时间
        this.$refs.list.addEventListener(START_EVENT, this.handleStart, false)
      },
      // 根据index 设置滚动位置
      setTop (index = 0) {
        const { boxHeight, itemHeight } = this
        this.startTop = ((boxHeight - itemHeight) / 2) - (index * itemHeight)
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
        this.selectIndex = index
        this.change()
      },
      handleStart (e) {
        this.distStartTop = getClient(e).y
        this.distStartTime = new Date().getTime()
        this.timer = 0
        // ----
        this.startY = getClient(e).y
        this.ulStyle.transitionDuration = `0ms`
        this.ulStyle.transitionProperty = `none`
        // --
        document.addEventListener(MOVE_EVENT, this.handleMove, false)
        document.addEventListener(END_EVENT, this.handleEnd, false)
      },
      handleMove (e) {
        this.deltaY = getClient(e).y - this.startY
        this.startY = getClient(e).y
        if (this.startTop > this.bottom) {
          this.startTop = this.bottom
        } else if (this.startTop < this.top) {
          this.startTop = this.top
        } else {
          this.startTop += this.deltaY
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
      },
      handleEnd (e) {
        document.removeEventListener(MOVE_EVENT, this.handleMove, false)
        document.removeEventListener(END_EVENT, this.handleEnd, false)
        // --
        this.ulStyle.transitionProperty = `all`
        this.ulStyle.transitionDuration = `${MoveTime}ms`
        if (this.startTop >= this.bottom - this.itemHeight) {
          this.setTop()
        } else if (this.startTop <= this.top + this.itemHeight) {
          this.setTop(this.column.length - 1)
        } else {
          this.ulStyle.transitionDuration = `0ms`
          this.ulStyle.transitionProperty = `none`
          this.toMove(e)
        }
      },
      toMove (e) {
        let endTime = new Date().getTime()
        if(endTime - this.distStartTime > 300) {
          let index = Math.round((this.startTop) / this.itemHeight)
          this.startTop = index * this.itemHeight
          if (this.startTop > this.bottom) {
            this.startTop = this.bottom - this.itemHeight
            index = -2
          } else if (this.startTop < this.top) {
            this.startTop = this.top + this.itemHeight
            index = this.column.length + 1
          }
          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
          index = 2 - index
          if (this.selectIndex !== index) {
            this.selectIndex = index
            this.change()
          }
          return
        }
        let endTop = getClient(e).y
        let speed = ((endTop - this.distStartTop) / (endTime - this.distStartTime)) * 16
        let f = 0
        this.timer = true
        const show = () => {
          this.timer && requestAnimationFrame(show)
          f = Math.min(Math.abs(speed) / 32, 1)
          if(speed > 0.5){
            speed -= f
          } else if(speed < -0.5){
            speed += f
          } else {
            speed = 0
            this.timer = false
            let index = Math.round(this.startTop / this.itemHeight)
            this.startTop = index * this.itemHeight
            if (this.startTop >= this.bottom) {
              this.startTop = this.bottom - this.itemHeight
              this.ulStyle.transitionProperty = `all`
              this.ulStyle.transitionDuration = `${MoveTime}ms`
              index = -2
            } else if (this.startTop <= this.top) {
              this.ulStyle.transitionProperty = `all`
              this.ulStyle.transitionDuration = `${MoveTime}ms`
              this.startTop = this.top + this.itemHeight
              index = this.column.length + 1
            }
            this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
            index = 2 - index
            if (this.selectIndex !== index) {
              this.selectIndex = index
              this.change()
            }
            return
          }
          this.startTop += speed
          if (this.startTop > this.bottom + this.itemHeight) {
            speed = 0
            this.timer = false
            this.startTop = this.bottom - this.itemHeight
            this.ulStyle.transitionProperty = `all`
            this.ulStyle.transitionDuration = `${MoveTime}ms`
            if (this.selectIndex !== 0) {
              this.selectIndex = 0
              this.change()
            }
          } else if (this.startTop < this.top - this.itemHeight) {
            speed = 0
            this.timer = false
            this.ulStyle.transitionProperty = `all`
            this.ulStyle.transitionDuration = `${MoveTime}ms`
            this.startTop = this.top + this.itemHeight
            if (this.selectIndex !== (this.column.length - 1)) {
              this.selectIndex = this.column.length - 1
              this.change()
            }
          }
          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
        }
        show()
      },
      change () {
        this.$emit('change', this.column[this.selectIndex])
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      column () {
        this.init()
      },
      defaultIndex () {
        this.setTop(this.defaultIndex)
      }
    },
    beforeDestroy () {
      this.$refs.list.removeEventListener(START_EVENT, this.handleStart, false)
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    margin: 0;
    padding: 0;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    ul {
      margin: 0;
      padding: 0;
      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
      line-height: 44px;
    }
    li {
      margin: 0;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 5px;
      color: #000;
    }
  }
</style>
