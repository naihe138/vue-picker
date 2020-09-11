<template>
  <transition name="fade">
    <div class="pickerbox" v-show="visible" @click="clickMask">
      <transition name="toup">
        <div class="vue-picker" ref="picker" v-show="visible">
          <Header v-if="showToolbar"
            :cancelText="cancelText"
            :confirmText="confirmText"
            :title="title"
            @cancel="cancel"
            @confirm="confirm" />
          <div class="content" :style="{height: boxHeight + 'px'}">
            <div class="colums">
              <List :column="column1"
                :boxHeight="boxHeight"
                :itemHeight="itemHeight"
                :defaultIndex="dIndex1"
                :rowNumber="getRowNumber"
                @change="change1" />
              <List v-if="column2.length > 0"
                :column="column2"
                :boxHeight="boxHeight"
                :itemHeight="itemHeight"
                :defaultIndex="dIndex2"
                :rowNumber="getRowNumber"
                @change="change2" />
              <List v-if="column3.length > 0"
                :column="column3"
                :boxHeight="boxHeight"
                :itemHeight="itemHeight"
                :defaultIndex="dIndex3"
                :rowNumber="getRowNumber"
                @change="change3" />
              <List v-if="column4.length > 0"
                :column="column4"
                :boxHeight="boxHeight"
                :itemHeight="itemHeight"
                :defaultIndex="dIndex4"
                :rowNumber="getRowNumber"
                @change="change4" />
            </div>
            <div class="mask" :style="maskStyle"></div>
            <div class="hairline"></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  import Header from './header.vue'
  import List from './list.vue'
  import { DEFTAULT_ITEM_HEIGHT } from './utils.js'
  export default {
    name: 'VuePicker',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: () => []
      },
      layer: {
        type: Number,
        default: 0
      },
      itemHeight: {
        type: [Number, String],
        default: DEFTAULT_ITEM_HEIGHT
      },
      defaultIndex: {
        type: [Number, Array],
        default: 0
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确认'
      },
      title: {
        type: String,
        default: ''
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      maskClick: {
        type: Boolean,
        default: false
      },
      rowNumber: {
        type: Number,
        default: 5
      },
      appendToBody: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Header,
      List
    },
    data () {
      return {
        column1: [],
        column2: [],
        column3: [],
        column4: [],
        dIndex1: 0,
        dIndex2: 0,
        dIndex3: 0,
        dIndex4: 0
      }
    },
    computed: {
      boxHeight () {
        let itemHeight = parseInt(this.itemHeight)
        itemHeight = itemHeight ? itemHeight : DEFTAULT_ITEM_HEIGHT
        return itemHeight * this.getRowNumber
      },
      getRowNumber () {
        if (this.rowNumber < 3) {
          return 3
        }
        return this.rowNumber % 2 === 0 ? this.rowNumber + 1 : this.rowNumber
      },
      maskStyle() {
        let style = { backgroundSize: '100% 88px' }
        if (this.getRowNumber === 3) {
          style = { backgroundSize: '100% 44px' }
        }
        return style
      }
    },
    methods: {
      clickMask () {
        if (this.maskClick) {
          this.looseBody()
          this.$emit('update:visible', false)
        }
      },
      formateData () {
        if (this.layer > 1) {
          this.setLinkColumn()
        } else {
          this.column1 = this.data[0] || []
          this.column2 = this.data[1] || []
          this.column3 = this.data[2] || []
          this.column4 = this.data[3] || []
          this.setNormalIndex()
        }
      },
      setLinkColumn () {
        if (this.layer === 2) {
          this.setLinkLayer2()
        } else if (this.layer === 3) {
          this.setLinkLayer2()
          this.setLinkLayer3()
        } else if (this.layer === 4) {
          this.setLinkLayer2()
          this.setLinkLayer3()
          this.setLinkLayer4()
        }
      },
      setLinkLayer2 () {
        const { defaultIndex } = this
        this.column1 = this.data || []
        if (typeof defaultIndex === 'number') {
          this.dIndex1 = defaultIndex
          this.dIndex2 = 0
          if (this.data.length > 1 && this.data[0].children) {
            this.column2 = this.data[0].children || []
          }
        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){
          this.dIndex1 = defaultIndex[0] || 0
          this.column2 = this.data[this.dIndex1].children || []
          this.$nextTick(() => {
            if (this.column2.length - 1 < defaultIndex[1]) {
              this.dIndex2 = this.column2.length - 1
            } else {
              this.dIndex2 = defaultIndex[1] || 0
            }
          })
        }
      },
      setLinkLayer3 () {
        const { defaultIndex } = this
        if (typeof defaultIndex === 'number') {
          this.dIndex3 = 0
          if (this.column2.length > 1 && this.column2[0].children) {
            this.column3 = this.column2[0].children || []
          }
        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 1){
          this.$nextTick(() => {
            this.column3 = this.column2[this.dIndex2].children || []
            this.$nextTick(() => {
              if (this.column3.length - 1 < defaultIndex[2]) {
                this.dIndex3 = this.column3.length - 1
              } else {
                this.dIndex3 = defaultIndex[2] || 0
              }
            })
          })
        }
      },
      setLinkLayer4 () {
        const { defaultIndex } = this
        if (typeof defaultIndex === 'number') {
          this.dIndex4 = 0
          if (this.column3.length > 1 && this.column3[0].children) {
            this.column4 = this.column3[0].children || []
          }
        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 2){
          setTimeout(() => {
            this.column4 = this.column3[this.dIndex3].children || []
            this.$nextTick(() => {
              if (this.column4.length - 1 < defaultIndex[3]) {
                this.dIndex4 = this.column4.length - 1
              } else {
                this.dIndex4 = defaultIndex[3] || 0
              }
            })
          })
        }
      },
      setNormalIndex () {
        this.$nextTick(() => {
          const { defaultIndex } = this
          if (Array.isArray(defaultIndex)) {
            this.setDefaultIndex()
          } else {
            this.dIndex1 = Number(defaultIndex) || 0
          }
        })
      },
      setDefaultIndex () {
        const { indexArr } = this
        const self = this
        function next() {
          let promise = Promise.resolve()
          let index = 0
          while (index < self.data.length) {
            promise = promise.then(indexArr[index])
            index++
          }
        }
        next()
      },
      change (index, res) {
        this.result[index] = res
        this.$emit('change', this.result)
      },
      change1 (res) {
        if (res) {
          this.change(0, res)
          if (this.layer > 1) {
            this.dIndex2 = 0
            this.changeLink('column2', res)
          }
        }
      },
      change2 (res) {
        if (res) {
          this.change(1, res)
          if (this.layer > 2) {
            this.dIndex3 = 0
            this.changeLink('column3', res)
          }
        }
      },
      change3 (res) {
        if (res) {
          this.change(2, res)
          if (this.layer > 3) {
            this.dIndex4 = 0
            this.changeLink('column4', res)
          }
        }
      },
      change4 (res) {
        if (res) {
          this.change(3, res)
        }
      },
      changeLink (key, res) {
        if (this.layer) {
          // clearTimeout(this.linktimer)
          this.linktimer = setTimeout(() => {
            this[key] = res.children || []
          }, 1000 / 60)
        }
      },
      cancel () {
        this.looseBody()
        this.$emit('cancel')
        this.$emit('update:visible', false)
      },
      confirm () {
        this.looseBody()
        this.$emit('confirm', this.result)
        this.$emit('update:visible', false)
      },
      stopPropagation (e) {
        e.stopPropagation()
      },
      fixedBody() {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        this.prevBodyCss = document.body.style.cssText
        document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
      },
      looseBody() {
        const body = document.body
        const top = body.style.top
        body.style.cssText = this.prevBodyCss
        body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
        body.style.top = ''
      },
      init() {
        this.result = []
        this.indexArr = [
          () => this.dIndex1 = this.defaultIndex[0] || 0,
          () => this.dIndex2 = this.defaultIndex[1] || 0,
          () => this.dIndex3 = this.defaultIndex[2] || 0,
          () => this.dIndex4 = this.defaultIndex[3] || 0
        ]
        this.formateData()
      }
    },
    created () {
      this.init()
    },
    mounted () {
      this.$refs.picker.addEventListener('click', this.stopPropagation)
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    },
    watch: {
      visible (v) {
        if (v) {
          this.fixedBody()
        }
      },
      defaultIndex () {
        this.init()
      },
      data() {
        this.init()
      }
    },
    beforeDestroy () {
      this.$refs.picker.removeEventListener('click', this.stopPropagation)
    }
  }
</script>
<style lang="scss" scoped>
  .pickerbox {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    overflow: hidden;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .toup-enter-active, .toup-leave-active {
    transition: transform .3s;
  }
  .toup-enter, .toup-leave-to {
    transform: translate3d(0, 100px, 0);
  }
  // ----
  .vue-picker {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  .content {
    overflow: hidden;
    height: 220px;
    position: relative;
    display: flex;
  }
  .colums {
    display: flex;
    overflow: hidden;
    font-size: 16px;
    text-align: center;
    flex: 1;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
    background-repeat: no-repeat;
    background-position: top, bottom;
    backface-visibility: hidden;
    pointer-events: none;
    background-size: 100% 88px;
  }
  .hairline {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 3;
    width: 100%;
    transform: translateY(-50%);
    pointer-events: none;
    height: 44px;
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
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      border-width: 1px 0;
    }
  }
</style>
