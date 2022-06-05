<template>
  <div class="list" ref="list">
    <ul :style="ulStyle">
      <li v-for="(item, index) in column" :key="'item' + index">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import { getClient, START_EVENT, MOVE_EVENT, END_EVENT, isPC } from './utils.js'
  const DEFAULT_DURATION = 200
  // 惯性滑动思路:
  // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `LIMIT_TIME` 且 move
  // 距离大于 `LIMIT_DISTANCE` 时，执行惯性滑动
  const LIMIT_TIME = 300
  const LIMIT_DISTANCE = 15
  const IS_PC = isPC()
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
      itemHeight: Number,
      rowNumber: Number
    },
    data() {
      return {
        ulStyle: {
          transform: `translate3d(0px, 0px, 0px)`,
          transitionDuration: `0ms`,
          transitionProperty: `none`,
          lineHeight: `${this.itemHeight}px`
        }
      }
    },
    computed: {
      count() {
        return this.column.length
      },
      getRoNumber() {
        return Math.floor(this.rowNumber / 2)
      }
    },
    methods: {
      init () {
        this.setTop(this.defaultIndex)
        const halfBox = (this.boxHeight - this.itemHeight) / 2
        this.bottom = halfBox + this.itemHeight
        this.top = halfBox - this.count * this.itemHeight
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
        this.touchStartTime = Date.now()
        // ----
        this.startY = getClient(e).y
        this.momentumTop = this.startTop

        this.ulStyle.transitionDuration = `0ms`
        this.ulStyle.transitionProperty = `none`
        if (IS_PC) {
          document.addEventListener(MOVE_EVENT, this.handleMove, false)
          document.addEventListener(END_EVENT, this.handleEnd, false)
        }
      },
      handleMove (e) {
        e.preventDefault()
        e.stopPropagation()
        this.disY = getClient(e).y - this.startY
        this.startY = getClient(e).y
        if (this.startTop >= this.bottom) {
          this.startTop = this.bottom
        } else if (this.startTop <= this.top) {
          this.startTop = this.top
        } else {
          this.startTop += this.disY
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
        const now = Date.now()

        if (now - this.touchStartTime > LIMIT_TIME) {
          this.touchStartTime = now
          this.momentumTop = this.startTop
        }
      },
      handleEnd () {
        if (IS_PC) {
          document.removeEventListener(MOVE_EVENT, this.handleMove, false)
          document.removeEventListener(END_EVENT, this.handleEnd, false)
        }
        const distance = this.startTop - this.momentumTop
        const duration = Date.now() - this.touchStartTime
        const allowMomentum = duration < LIMIT_TIME && Math.abs(distance) > LIMIT_DISTANCE
        if (allowMomentum) {
          this.toMove(distance, duration)
        } else {
          this.setTranfromTop()
        }
      },
      setTranfromTop () {
        this.ulStyle.transitionProperty = `all`
        this.ulStyle.transitionDuration = `${DEFAULT_DURATION}ms`
        if (this.startTop >= this.bottom - this.itemHeight) {
          this.setTop()
        } else if (this.startTop <= this.top + this.itemHeight) {
          this.setTop(this.count - 1)
        } else {
          let index = Math.round((this.startTop) / this.itemHeight)
          this.startTop = index * this.itemHeight
          if (this.startTop > this.bottom) {
            this.startTop = this.bottom - this.itemHeight
            index = -this.getRoNumber
          } else if (this.startTop < this.top) {
            this.startTop = this.top + this.itemHeight
            index = this.count + 1
          }
          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
          index = this.getRoNumber - index
          if (this.selectIndex !== index) {
            this.selectIndex = index
            this.change()
          }
        }
      },
      toMove (distance, duration) {
        const speed = Math.abs(distance / duration)
        distance = this.startTop + (speed / 0.002) * (distance < 0 ? -1 : 1)
        this.ulStyle.transitionProperty = `all`
        this.ulStyle.transitionDuration = `1000ms`
        this.setTop(Math.min(Math.max(Math.round(-distance / this.itemHeight), 0), this.count - 1))
      },
      change () {
        this.$emit('change', this.column[this.selectIndex])
      },
      mousewheel (e) {
        e.preventDefault()
        e.stopPropagation()
        this.ulStyle.transitionDuration = `0ms`
        this.ulStyle.transitionProperty = `none`
        const { deltaX, deltaY } = e
        if (Math.abs(deltaX) < Math.abs(deltaY)) {
          this.startTop = this.startTop - deltaY
          let b = this.bottom - this.itemHeight
          let t = this.top + this.itemHeight
          let shouldMove = true
          if (this.startTop > b ) {
            this.startTop = b
            shouldMove = false
          } else if (this.startTop < t) {
            this.startTop = t
            shouldMove = false
          }
          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`
          if (shouldMove) {
            clearInterval(this.wheelTimer)
            this.wheelTimer = setTimeout(this.setTranfromTop, 100)
          }
        }
      }
    },
    mounted () {
      this.init()
      // 监听开始事件
      this.$el.addEventListener(START_EVENT, this.handleStart, false)
      if (IS_PC) {
        this.$el.addEventListener('wheel', this.mousewheel, false)
      } else {
        this.$el.addEventListener(MOVE_EVENT, this.handleMove, false)
        this.$el.addEventListener(END_EVENT, this.handleEnd, false)
      }
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
      this.$el.removeEventListener(START_EVENT, this.handleStart, false)
      if (IS_PC) {
        this.$el.removeEventListener('wheel', this.mousewheel, false)
        this.$el.removeEventListener(MOVE_EVENT, this.handleMove, false)
        this.$el.removeEventListener(END_EVENT, this.handleEnd, false)
      }
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
