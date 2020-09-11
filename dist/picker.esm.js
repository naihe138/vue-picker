import { normalizeComponent, createInjector } from 'vue-runtime-helpers';

//
//
//
//
//
//
//
//
//
//
//
//

// TODO： 支持自定义的render渲染
// import textRender from './render'
var script = {
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
      this.$emit('cancel');
    },
    confirm () {
      this.$emit('confirm');
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "header" }, [
    _c("div", { staticClass: "left" }, [
      _c("span", { staticClass: "btn", on: { click: _vm.cancel } }, [
        _vm._v(_vm._s(_vm.cancelText))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c("div", { staticClass: "right" }, [
      _c("span", { staticClass: "btn", on: { click: _vm.confirm } }, [
        _vm._v(_vm._s(_vm.confirmText))
      ])
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-6ffe26b0_0", { source: ".header[data-v-6ffe26b0] {\n  height: 44px;\n  line-height: 44px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n.header[data-v-6ffe26b0]::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  border-width: 1px 0;\n}\n.title[data-v-6ffe26b0] {\n  max-width: 50%;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.btn[data-v-6ffe26b0] {\n  padding: 0 16px;\n  color: #1989fa;\n  font-size: 14px;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=header.vue.map */", map: {"version":3,"sources":["/Users/naice/my-project/vue-picker/src/header.vue","header.vue"],"names":[],"mappings":"AAuCA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;EAAA,aAAA;EACA,yBAAA;UAAA,8BAAA;EACA,kBAAA;ACtCA;ADuCA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,mBAAA;ACrCA;ADwCA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;ACrCA;ADuCA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,6BAAA;ACpCA;;AAEA,qCAAqC","file":"header.vue","sourcesContent":["<template>\n  <div class=\"header\">\n    <div class=\"left\">\n      <span class=\"btn\" @click=\"cancel\">{{cancelText}}</span>\n    </div>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"right\">\n      <span class=\"btn\" @click=\"confirm\">{{confirmText}}</span>\n    </div>\n  </div>\n</template>\n\n<script>\n  // TODO： 支持自定义的render渲染\n  // import textRender from './render'\n  export default {\n    props: {\n      cancelText: {\n        type: String\n      },\n      confirmText: {\n        type: String\n      },\n      title: {\n        type: String\n      }\n    },\n    methods: {\n      cancel () {\n        this.$emit('cancel')\n      },\n      confirm () {\n        this.$emit('confirm')\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .header {\n    height: 44px;\n    line-height: 44px;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    &::after {\n      position: absolute;\n      box-sizing: border-box;\n      content: ' ';\n      pointer-events: none;\n      top: -50%;\n      right: -50%;\n      bottom: -50%;\n      left: -50%;\n      border: 0 solid #ebedf0;\n      transform: scale(0.5);\n      border-width: 1px 0;\n    }\n  }\n  .title {\n    max-width: 50%;\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .btn {\n    padding: 0 16px;\n    color: #1989fa;\n    font-size: 14px;\n    background-color: transparent;\n  }\n</style>\n",".header {\n  height: 44px;\n  line-height: 44px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.header::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n.title {\n  max-width: 50%;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.btn {\n  padding: 0 16px;\n  color: #1989fa;\n  font-size: 14px;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=header.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-6ffe26b0";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Header = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

const DEFTAULT_ITEM_HEIGHT = 44;

// 兼容pc 移动端
const HAS_TOUCH = 'ontouchstart' in window;
const START_EVENT = HAS_TOUCH ? 'touchstart' : 'mousedown';
const MOVE_EVENT = HAS_TOUCH ? 'touchmove' : 'mousemove';
const END_EVENT = HAS_TOUCH ? 'touchend' : 'mouseup';

const getClient = e => {
  let clientX = HAS_TOUCH ? e.changedTouches[0].clientX : e.clientX;
  let clientY = HAS_TOUCH ? e.changedTouches[0].clientY : e.clientY;
  return {
    x: clientX,
    y: clientY
  }
};
const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break
    }
  }
  return flag
};

//
const DEFAULT_DURATION = 200;
// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `LIMIT_TIME` 且 move
// 距离大于 `LIMIT_DISTANCE` 时，执行惯性滑动
const LIMIT_TIME = 300;
const LIMIT_DISTANCE = 15;
const IS_PC = isPC();
var script$1 = {
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
      this.setTop(this.defaultIndex);
      const halfBox = (this.boxHeight - this.itemHeight) / 2;
      this.bottom = halfBox + this.itemHeight;
      this.top = halfBox - this.count * this.itemHeight;
    },
    // 根据index 设置滚动位置
    setTop (index = 0) {
      const { boxHeight, itemHeight } = this;
      this.startTop = ((boxHeight - itemHeight) / 2) - (index * itemHeight);
      this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
      this.selectIndex = index;
      this.change();
    },
    handleStart (e) {
      this.distStartTop = getClient(e).y;
      this.touchStartTime = Date.now();
      // ----
      this.startY = getClient(e).y;
      this.momentumTop = this.startTop;

      this.ulStyle.transitionDuration = `0ms`;
      this.ulStyle.transitionProperty = `none`;
      if (IS_PC) {
        document.addEventListener(MOVE_EVENT, this.handleMove, false);
        document.addEventListener(END_EVENT, this.handleEnd, false);
      }
    },
    handleMove (e) {
      e.preventDefault();
      e.stopPropagation();
      this.disY = getClient(e).y - this.startY;
      this.startY = getClient(e).y;
      if (this.startTop >= this.bottom) {
        this.startTop = this.bottom;
      } else if (this.startTop <= this.top) {
        this.startTop = this.top;
      } else {
        this.startTop += this.disY;
      }
      this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
      const now = Date.now();

      if (now - this.touchStartTime > LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumTop = this.startTop;
      }
    },
    handleEnd () {
      if (IS_PC) {
        document.removeEventListener(MOVE_EVENT, this.handleMove, false);
        document.removeEventListener(END_EVENT, this.handleEnd, false);
      }
      const distance = this.startTop - this.momentumTop;
      const duration = Date.now() - this.touchStartTime;
      const allowMomentum = duration < LIMIT_TIME && Math.abs(distance) > LIMIT_DISTANCE;
      if (allowMomentum) {
        this.toMove(distance, duration);
      } else {
        this.setTranfromTop();
      }
    },
    setTranfromTop () {
      this.ulStyle.transitionProperty = `all`;
      this.ulStyle.transitionDuration = `${DEFAULT_DURATION}ms`;
      if (this.startTop >= this.bottom - this.itemHeight) {
        this.setTop();
      } else if (this.startTop <= this.top + this.itemHeight) {
        this.setTop(this.count - 1);
      } else {
        let index = Math.round((this.startTop) / this.itemHeight);
        this.startTop = index * this.itemHeight;
        if (this.startTop > this.bottom) {
          this.startTop = this.bottom - this.itemHeight;
          index = -this.getRoNumber;
        } else if (this.startTop < this.top) {
          this.startTop = this.top + this.itemHeight;
          index = this.count + 1;
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
        index = this.getRoNumber - index;
        if (this.selectIndex !== index) {
          this.selectIndex = index;
          this.change();
        }
      }
    },
    toMove (distance, duration) {
      const speed = Math.abs(distance / duration);
      distance = this.startTop + (speed / 0.002) * (distance < 0 ? -1 : 1);
      this.ulStyle.transitionProperty = `all`;
      this.ulStyle.transitionDuration = `1000ms`;
      this.setTop(Math.min(Math.max(Math.round(-distance / this.itemHeight), 0), this.count - 1));
    },
    change () {
      this.$emit('change', this.column[this.selectIndex]);
    },
    mousewheel (e) {
      e.preventDefault();
      e.stopPropagation();
      this.ulStyle.transitionDuration = `0ms`;
      this.ulStyle.transitionProperty = `none`;
      const { deltaX, deltaY } = e;
      if (Math.abs(deltaX) < Math.abs(deltaY)) {
        this.startTop = this.startTop - deltaY;
        let b = this.bottom - this.itemHeight;
        let t = this.top + this.itemHeight;
        let shouldMove = true;
        if (this.startTop > b ) {
          this.startTop = b;
          shouldMove = false;
        } else if (this.startTop < t) {
          this.startTop = t;
          shouldMove = false;
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
        if (shouldMove) {
          clearInterval(this.wheelTimer);
          this.wheelTimer = setTimeout(this.setTranfromTop, 100);
        }
      }
    }
  },
  mounted () {
    this.init();
    // 监听开始事件
    this.$el.addEventListener(START_EVENT, this.handleStart, false);
    if (IS_PC) {
      this.$el.addEventListener('wheel', this.mousewheel, false);
    } else {
      this.$el.addEventListener(MOVE_EVENT, this.handleMove, false);
      this.$el.addEventListener(END_EVENT, this.handleEnd, false);
    }
  },
  watch: {
    column () {
      this.init();
    },
    defaultIndex () {
      this.setTop(this.defaultIndex);
    }
  },
  beforeDestroy () {
    this.$el.removeEventListener(START_EVENT, this.handleStart, false);
    if (IS_PC) {
      this.$el.removeEventListener('wheel', this.mousewheel, false);
      this.$el.removeEventListener(MOVE_EVENT, this.handleMove, false);
      this.$el.removeEventListener(END_EVENT, this.handleEnd, false);
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "list", staticClass: "list" }, [
    _c(
      "ul",
      { style: _vm.ulStyle },
      _vm._l(_vm.column, function(item, index) {
        return _c("li", { key: "item" + index }, [_vm._v(_vm._s(item.label))])
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-ec129ff4_0", { source: ".list[data-v-ec129ff4] {\n  margin: 0;\n  padding: 0;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.list ul[data-v-ec129ff4] {\n  margin: 0;\n  padding: 0;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n  line-height: 44px;\n}\n.list li[data-v-ec129ff4] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  color: #000;\n}\n\n/*# sourceMappingURL=list.vue.map */", map: {"version":3,"sources":["/Users/naice/my-project/vue-picker/src/list.vue","list.vue"],"names":[],"mappings":"AA4MA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;UAAA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AC3MA;AD4MA;EACA,SAAA;EACA,UAAA;EACA,kEAAA;UAAA,0DAAA;EACA,iBAAA;AC1MA;AD4MA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;AC1MA;;AAEA,mCAAmC","file":"list.vue","sourcesContent":["<template>\n  <div class=\"list\" ref=\"list\">\n    <ul :style=\"ulStyle\">\n      <li v-for=\"(item, index) in column\" :key=\"'item' + index\">{{item.label}}</li>\n    </ul>\n  </div>\n</template>\n\n<script>\n  import { getClient, START_EVENT, MOVE_EVENT, END_EVENT, isPC } from './utils.js'\n  const DEFAULT_DURATION = 200\n  // 惯性滑动思路:\n  // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `LIMIT_TIME` 且 move\n  // 距离大于 `LIMIT_DISTANCE` 时，执行惯性滑动\n  const LIMIT_TIME = 300\n  const LIMIT_DISTANCE = 15\n  const IS_PC = isPC()\n  export default {\n    props: {\n      defaultIndex: {\n        type: Number,\n        default: 0\n      },\n      column: {\n        type: Array,\n        default: () => ([])\n      },\n      boxHeight: Number,\n      itemHeight: Number,\n      rowNumber: Number\n    },\n    data() {\n      return {\n        ulStyle: {\n          transform: `translate3d(0px, 0px, 0px)`,\n          transitionDuration: `0ms`,\n          transitionProperty: `none`,\n          lineHeight: `${this.itemHeight}px`\n        }\n      }\n    },\n    computed: {\n      count() {\n        return this.column.length\n      },\n      getRoNumber() {\n        return Math.floor(this.rowNumber / 2)\n      }\n    },\n    methods: {\n      init () {\n        this.setTop(this.defaultIndex)\n        const halfBox = (this.boxHeight - this.itemHeight) / 2\n        this.bottom = halfBox + this.itemHeight\n        this.top = halfBox - this.count * this.itemHeight\n      },\n      // 根据index 设置滚动位置\n      setTop (index = 0) {\n        const { boxHeight, itemHeight } = this\n        this.startTop = ((boxHeight - itemHeight) / 2) - (index * itemHeight)\n        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n        this.selectIndex = index\n        this.change()\n      },\n      handleStart (e) {\n        this.distStartTop = getClient(e).y\n        this.touchStartTime = Date.now()\n        // ----\n        this.startY = getClient(e).y\n        this.momentumTop = this.startTop\n\n        this.ulStyle.transitionDuration = `0ms`\n        this.ulStyle.transitionProperty = `none`\n        if (IS_PC) {\n          document.addEventListener(MOVE_EVENT, this.handleMove, false)\n          document.addEventListener(END_EVENT, this.handleEnd, false)\n        }\n      },\n      handleMove (e) {\n        e.preventDefault()\n        e.stopPropagation()\n        this.disY = getClient(e).y - this.startY\n        this.startY = getClient(e).y\n        if (this.startTop >= this.bottom) {\n          this.startTop = this.bottom\n        } else if (this.startTop <= this.top) {\n          this.startTop = this.top\n        } else {\n          this.startTop += this.disY\n        }\n        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n        const now = Date.now()\n\n        if (now - this.touchStartTime > LIMIT_TIME) {\n          this.touchStartTime = now\n          this.momentumTop = this.startTop\n        }\n      },\n      handleEnd () {\n        if (IS_PC) {\n          document.removeEventListener(MOVE_EVENT, this.handleMove, false)\n          document.removeEventListener(END_EVENT, this.handleEnd, false)\n        }\n        const distance = this.startTop - this.momentumTop\n        const duration = Date.now() - this.touchStartTime\n        const allowMomentum = duration < LIMIT_TIME && Math.abs(distance) > LIMIT_DISTANCE\n        if (allowMomentum) {\n          this.toMove(distance, duration)\n        } else {\n          this.setTranfromTop()\n        }\n      },\n      setTranfromTop () {\n        this.ulStyle.transitionProperty = `all`\n        this.ulStyle.transitionDuration = `${DEFAULT_DURATION}ms`\n        if (this.startTop >= this.bottom - this.itemHeight) {\n          this.setTop()\n        } else if (this.startTop <= this.top + this.itemHeight) {\n          this.setTop(this.count - 1)\n        } else {\n          let index = Math.round((this.startTop) / this.itemHeight)\n          this.startTop = index * this.itemHeight\n          if (this.startTop > this.bottom) {\n            this.startTop = this.bottom - this.itemHeight\n            index = -this.getRoNumber\n          } else if (this.startTop < this.top) {\n            this.startTop = this.top + this.itemHeight\n            index = this.count + 1\n          }\n          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n          index = this.getRoNumber - index\n          if (this.selectIndex !== index) {\n            this.selectIndex = index\n            this.change()\n          }\n        }\n      },\n      toMove (distance, duration) {\n        const speed = Math.abs(distance / duration)\n        distance = this.startTop + (speed / 0.002) * (distance < 0 ? -1 : 1)\n        this.ulStyle.transitionProperty = `all`\n        this.ulStyle.transitionDuration = `1000ms`\n        this.setTop(Math.min(Math.max(Math.round(-distance / this.itemHeight), 0), this.count - 1))\n      },\n      change () {\n        this.$emit('change', this.column[this.selectIndex])\n      },\n      mousewheel (e) {\n        e.preventDefault()\n        e.stopPropagation()\n        this.ulStyle.transitionDuration = `0ms`\n        this.ulStyle.transitionProperty = `none`\n        const { deltaX, deltaY } = e\n        if (Math.abs(deltaX) < Math.abs(deltaY)) {\n          this.startTop = this.startTop - deltaY\n          let b = this.bottom - this.itemHeight\n          let t = this.top + this.itemHeight\n          let shouldMove = true\n          if (this.startTop > b ) {\n            this.startTop = b\n            shouldMove = false\n          } else if (this.startTop < t) {\n            this.startTop = t\n            shouldMove = false\n          }\n          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n          if (shouldMove) {\n            clearInterval(this.wheelTimer)\n            this.wheelTimer = setTimeout(this.setTranfromTop, 100)\n          }\n        }\n      }\n    },\n    mounted () {\n      this.init()\n      // 监听开始事件\n      this.$el.addEventListener(START_EVENT, this.handleStart, false)\n      if (IS_PC) {\n        this.$el.addEventListener('wheel', this.mousewheel, false)\n      } else {\n        this.$el.addEventListener(MOVE_EVENT, this.handleMove, false)\n        this.$el.addEventListener(END_EVENT, this.handleEnd, false)\n      }\n    },\n    watch: {\n      column () {\n        this.init()\n      },\n      defaultIndex () {\n        this.setTop(this.defaultIndex)\n      }\n    },\n    beforeDestroy () {\n      this.$el.removeEventListener(START_EVENT, this.handleStart, false)\n      if (IS_PC) {\n        this.$el.removeEventListener('wheel', this.mousewheel, false)\n        this.$el.removeEventListener(MOVE_EVENT, this.handleMove, false)\n        this.$el.removeEventListener(END_EVENT, this.handleEnd, false)\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .list {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    ul {\n      margin: 0;\n      padding: 0;\n      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n      line-height: 44px;\n    }\n    li {\n      margin: 0;\n      padding: 0;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 5px;\n      color: #000;\n    }\n  }\n</style>\n",".list {\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.list ul {\n  margin: 0;\n  padding: 0;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n  line-height: 44px;\n}\n.list li {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  color: #000;\n}\n\n/*# sourceMappingURL=list.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-ec129ff4";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var List = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

//
var script$2 = {
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
      let itemHeight = parseInt(this.itemHeight);
      itemHeight = itemHeight ? itemHeight : DEFTAULT_ITEM_HEIGHT;
      return itemHeight * this.getRowNumber
    },
    getRowNumber () {
      if (this.rowNumber < 3) {
        return 3
      }
      return this.rowNumber % 2 === 0 ? this.rowNumber + 1 : this.rowNumber
    },
    maskStyle() {
      let style = { backgroundSize: '100% 88px' };
      if (this.getRowNumber === 3) {
        style = { backgroundSize: '100% 44px' };
      }
      return style
    }
  },
  methods: {
    clickMask () {
      if (this.maskClick) {
        this.looseBody();
        this.$emit('update:visible', false);
      }
    },
    formateData () {
      if (this.layer > 1) {
        this.setLinkColumn();
      } else {
        this.column1 = this.data[0] || [];
        this.column2 = this.data[1] || [];
        this.column3 = this.data[2] || [];
        this.column4 = this.data[3] || [];
        this.setNormalIndex();
      }
    },
    setLinkColumn () {
      if (this.layer === 2) {
        this.setLinkLayer2();
      } else if (this.layer === 3) {
        this.setLinkLayer2();
        this.setLinkLayer3();
      } else if (this.layer === 4) {
        this.setLinkLayer2();
        this.setLinkLayer3();
        this.setLinkLayer4();
      }
    },
    setLinkLayer2 () {
      const { defaultIndex } = this;
      this.column1 = this.data || [];
      if (typeof defaultIndex === 'number') {
        this.dIndex1 = defaultIndex;
        this.dIndex2 = 0;
        if (this.data.length > 1 && this.data[0].children) {
          this.column2 = this.data[0].children || [];
        }
      } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){
        this.dIndex1 = defaultIndex[0] || 0;
        this.column2 = this.data[this.dIndex1].children || [];
        this.$nextTick(() => {
          if (this.column2.length - 1 < defaultIndex[1]) {
            this.dIndex2 = this.column2.length - 1;
          } else {
            this.dIndex2 = defaultIndex[1] || 0;
          }
        });
      }
    },
    setLinkLayer3 () {
      const { defaultIndex } = this;
      if (typeof defaultIndex === 'number') {
        this.dIndex3 = 0;
        if (this.column2.length > 1 && this.column2[0].children) {
          this.column3 = this.column2[0].children || [];
        }
      } else if (Array.isArray(defaultIndex) && defaultIndex.length > 1){
        this.$nextTick(() => {
          this.column3 = this.column2[this.dIndex2].children || [];
          this.$nextTick(() => {
            if (this.column3.length - 1 < defaultIndex[2]) {
              this.dIndex3 = this.column3.length - 1;
            } else {
              this.dIndex3 = defaultIndex[2] || 0;
            }
          });
        });
      }
    },
    setLinkLayer4 () {
      const { defaultIndex } = this;
      if (typeof defaultIndex === 'number') {
        this.dIndex4 = 0;
        if (this.column3.length > 1 && this.column3[0].children) {
          this.column4 = this.column3[0].children || [];
        }
      } else if (Array.isArray(defaultIndex) && defaultIndex.length > 2){
        setTimeout(() => {
          this.column4 = this.column3[this.dIndex3].children || [];
          this.$nextTick(() => {
            if (this.column4.length - 1 < defaultIndex[3]) {
              this.dIndex4 = this.column4.length - 1;
            } else {
              this.dIndex4 = defaultIndex[3] || 0;
            }
          });
        });
      }
    },
    setNormalIndex () {
      this.$nextTick(() => {
        const { defaultIndex } = this;
        if (Array.isArray(defaultIndex)) {
          this.setDefaultIndex();
        } else {
          this.dIndex1 = Number(defaultIndex) || 0;
        }
      });
    },
    setDefaultIndex () {
      const { indexArr } = this;
      const self = this;
      function next() {
        let promise = Promise.resolve();
        let index = 0;
        while (index < self.data.length) {
          promise = promise.then(indexArr[index]);
          index++;
        }
      }
      next();
    },
    change (index, res) {
      this.result[index] = res;
      this.$emit('change', this.result);
    },
    change1 (res) {
      if (res) {
        this.change(0, res);
        if (this.layer > 1) {
          this.dIndex2 = 0;
          this.changeLink('column2', res);
        }
      }
    },
    change2 (res) {
      if (res) {
        this.change(1, res);
        if (this.layer > 2) {
          this.dIndex3 = 0;
          this.changeLink('column3', res);
        }
      }
    },
    change3 (res) {
      if (res) {
        this.change(2, res);
        if (this.layer > 3) {
          this.dIndex4 = 0;
          this.changeLink('column4', res);
        }
      }
    },
    change4 (res) {
      if (res) {
        this.change(3, res);
      }
    },
    changeLink (key, res) {
      if (this.layer) {
        // clearTimeout(this.linktimer)
        this.linktimer = setTimeout(() => {
          this[key] = res.children || [];
        }, 1000 / 60);
      }
    },
    cancel () {
      this.looseBody();
      this.$emit('cancel');
      this.$emit('update:visible', false);
    },
    confirm () {
      this.looseBody();
      this.$emit('confirm', this.result);
      this.$emit('update:visible', false);
    },
    stopPropagation (e) {
      e.stopPropagation();
    },
    fixedBody() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      this.prevBodyCss = document.body.style.cssText;
      document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;';
    },
    looseBody() {
      const body = document.body;
      const top = body.style.top;
      body.style.cssText = this.prevBodyCss;
      body.scrollTop = document.documentElement.scrollTop = -parseInt(top);
      body.style.top = '';
    },
    init() {
      this.result = [];
      this.indexArr = [
        () => this.dIndex1 = this.defaultIndex[0] || 0,
        () => this.dIndex2 = this.defaultIndex[1] || 0,
        () => this.dIndex3 = this.defaultIndex[2] || 0,
        () => this.dIndex4 = this.defaultIndex[3] || 0
      ];
      this.formateData();
    }
  },
  created () {
    this.init();
  },
  mounted () {
    this.$refs.picker.addEventListener('click', this.stopPropagation);
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }
  },
  watch: {
    visible (v) {
      if (v) {
        this.fixedBody();
      }
    },
    defaultIndex () {
      this.init();
    },
    data() {
      this.init();
    }
  },
  beforeDestroy () {
    this.$refs.picker.removeEventListener('click', this.stopPropagation);
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "pickerbox",
        on: { click: _vm.clickMask }
      },
      [
        _c("transition", { attrs: { name: "toup" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              ref: "picker",
              staticClass: "vue-picker"
            },
            [
              _vm.showToolbar
                ? _c("Header", {
                    attrs: {
                      cancelText: _vm.cancelText,
                      confirmText: _vm.confirmText,
                      title: _vm.title
                    },
                    on: { cancel: _vm.cancel, confirm: _vm.confirm }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "content",
                  style: { height: _vm.boxHeight + "px" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "colums" },
                    [
                      _c("List", {
                        attrs: {
                          column: _vm.column1,
                          boxHeight: _vm.boxHeight,
                          itemHeight: _vm.itemHeight,
                          defaultIndex: _vm.dIndex1,
                          rowNumber: _vm.getRowNumber
                        },
                        on: { change: _vm.change1 }
                      }),
                      _vm._v(" "),
                      _vm.column2.length > 0
                        ? _c("List", {
                            attrs: {
                              column: _vm.column2,
                              boxHeight: _vm.boxHeight,
                              itemHeight: _vm.itemHeight,
                              defaultIndex: _vm.dIndex2,
                              rowNumber: _vm.getRowNumber
                            },
                            on: { change: _vm.change2 }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.column3.length > 0
                        ? _c("List", {
                            attrs: {
                              column: _vm.column3,
                              boxHeight: _vm.boxHeight,
                              itemHeight: _vm.itemHeight,
                              defaultIndex: _vm.dIndex3,
                              rowNumber: _vm.getRowNumber
                            },
                            on: { change: _vm.change3 }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.column4.length > 0
                        ? _c("List", {
                            attrs: {
                              column: _vm.column4,
                              boxHeight: _vm.boxHeight,
                              itemHeight: _vm.itemHeight,
                              defaultIndex: _vm.dIndex4,
                              rowNumber: _vm.getRowNumber
                            },
                            on: { change: _vm.change4 }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask", style: _vm.maskStyle }),
                  _vm._v(" "),
                  _c("div", { staticClass: "hairline" })
                ]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-200a1302_0", { source: ".pickerbox[data-v-200a1302] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-200a1302], .fade-leave-active[data-v-200a1302] {\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-200a1302], .fade-leave-to[data-v-200a1302] {\n  opacity: 0;\n}\n.toup-enter-active[data-v-200a1302], .toup-leave-active[data-v-200a1302] {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.toup-enter[data-v-200a1302], .toup-leave-to[data-v-200a1302] {\n  -webkit-transform: translate3d(0, 100px, 0);\n          transform: translate3d(0, 100px, 0);\n}\n.vue-picker[data-v-200a1302] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n.content[data-v-200a1302] {\n  overflow: hidden;\n  height: 220px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n.colums[data-v-200a1302] {\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  font-size: 16px;\n  text-align: center;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.mask[data-v-200a1302] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0.4))), -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0.4)));\n  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n  background-repeat: no-repeat;\n  background-position: top, bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  pointer-events: none;\n  background-size: 100% 88px;\n}\n.hairline[data-v-200a1302] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  pointer-events: none;\n  height: 44px;\n}\n.hairline[data-v-200a1302]::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["/Users/naice/my-project/vue-picker/src/index.vue","index.vue"],"names":[],"mappings":"AA2WA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,SAAA;EACA,8BAAA;EACA,aAAA;EACA,gBAAA;AC1WA;AD4WA;EACA,gCAAA;EAAA,wBAAA;ACzWA;AD2WA;EACA,UAAA;ACxWA;AD0WA;EACA,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;ACvWA;ADyWA;EACA,2CAAA;UAAA,mCAAA;ACtWA;ADyWA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,8BAAA;EACA,wCAAA;ACtWA;ADwWA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;EAAA,aAAA;ACrWA;ADuWA;EACA,oBAAA;EAAA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;UAAA,OAAA;ACpWA;ADsWA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,8OAAA;EAAA,wKAAA;EACA,4BAAA;EACA,gCAAA;EACA,mCAAA;UAAA,2BAAA;EACA,oBAAA;EACA,0BAAA;ACnWA;ADqWA;EACA,kBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,mCAAA;UAAA,2BAAA;EACA,oBAAA;EACA,YAAA;AClWA;ADmWA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,6BAAA;EACA,qBAAA;EACA,mBAAA;ACjWA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <transition name=\"fade\">\n    <div class=\"pickerbox\" v-show=\"visible\" @click=\"clickMask\">\n      <transition name=\"toup\">\n        <div class=\"vue-picker\" ref=\"picker\" v-show=\"visible\">\n          <Header v-if=\"showToolbar\"\n            :cancelText=\"cancelText\"\n            :confirmText=\"confirmText\"\n            :title=\"title\"\n            @cancel=\"cancel\"\n            @confirm=\"confirm\" />\n          <div class=\"content\" :style=\"{height: boxHeight + 'px'}\">\n            <div class=\"colums\">\n              <List :column=\"column1\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex1\"\n                :rowNumber=\"getRowNumber\"\n                @change=\"change1\" />\n              <List v-if=\"column2.length > 0\"\n                :column=\"column2\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex2\"\n                :rowNumber=\"getRowNumber\"\n                @change=\"change2\" />\n              <List v-if=\"column3.length > 0\"\n                :column=\"column3\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex3\"\n                :rowNumber=\"getRowNumber\"\n                @change=\"change3\" />\n              <List v-if=\"column4.length > 0\"\n                :column=\"column4\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex4\"\n                :rowNumber=\"getRowNumber\"\n                @change=\"change4\" />\n            </div>\n            <div class=\"mask\" :style=\"maskStyle\"></div>\n            <div class=\"hairline\"></div>\n          </div>\n        </div>\n      </transition>\n    </div>\n  </transition>\n</template>\n<script>\n  import Header from './header.vue'\n  import List from './list.vue'\n  import { DEFTAULT_ITEM_HEIGHT } from './utils.js'\n  export default {\n    name: 'VuePicker',\n    props: {\n      visible: {\n        type: Boolean,\n        default: false\n      },\n      data: {\n        type: Array,\n        default: () => []\n      },\n      layer: {\n        type: Number,\n        default: 0\n      },\n      itemHeight: {\n        type: [Number, String],\n        default: DEFTAULT_ITEM_HEIGHT\n      },\n      defaultIndex: {\n        type: [Number, Array],\n        default: 0\n      },\n      cancelText: {\n        type: String,\n        default: '取消'\n      },\n      confirmText: {\n        type: String,\n        default: '确认'\n      },\n      title: {\n        type: String,\n        default: ''\n      },\n      showToolbar: {\n        type: Boolean,\n        default: false\n      },\n      maskClick: {\n        type: Boolean,\n        default: false\n      },\n      rowNumber: {\n        type: Number,\n        default: 5\n      },\n      appendToBody: {\n        type: Boolean,\n        default: false\n      }\n    },\n    components: {\n      Header,\n      List\n    },\n    data () {\n      return {\n        column1: [],\n        column2: [],\n        column3: [],\n        column4: [],\n        dIndex1: 0,\n        dIndex2: 0,\n        dIndex3: 0,\n        dIndex4: 0\n      }\n    },\n    computed: {\n      boxHeight () {\n        let itemHeight = parseInt(this.itemHeight)\n        itemHeight = itemHeight ? itemHeight : DEFTAULT_ITEM_HEIGHT\n        return itemHeight * this.getRowNumber\n      },\n      getRowNumber () {\n        if (this.rowNumber < 3) {\n          return 3\n        }\n        return this.rowNumber % 2 === 0 ? this.rowNumber + 1 : this.rowNumber\n      },\n      maskStyle() {\n        let style = { backgroundSize: '100% 88px' }\n        if (this.getRowNumber === 3) {\n          style = { backgroundSize: '100% 44px' }\n        }\n        return style\n      }\n    },\n    methods: {\n      clickMask () {\n        if (this.maskClick) {\n          this.looseBody()\n          this.$emit('update:visible', false)\n        }\n      },\n      formateData () {\n        if (this.layer > 1) {\n          this.setLinkColumn()\n        } else {\n          this.column1 = this.data[0] || []\n          this.column2 = this.data[1] || []\n          this.column3 = this.data[2] || []\n          this.column4 = this.data[3] || []\n          this.setNormalIndex()\n        }\n      },\n      setLinkColumn () {\n        if (this.layer === 2) {\n          this.setLinkLayer2()\n        } else if (this.layer === 3) {\n          this.setLinkLayer2()\n          this.setLinkLayer3()\n        } else if (this.layer === 4) {\n          this.setLinkLayer2()\n          this.setLinkLayer3()\n          this.setLinkLayer4()\n        }\n      },\n      setLinkLayer2 () {\n        const { defaultIndex } = this\n        this.column1 = this.data || []\n        if (typeof defaultIndex === 'number') {\n          this.dIndex1 = defaultIndex\n          this.dIndex2 = 0\n          if (this.data.length > 1 && this.data[0].children) {\n            this.column2 = this.data[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){\n          this.dIndex1 = defaultIndex[0] || 0\n          this.column2 = this.data[this.dIndex1].children || []\n          this.$nextTick(() => {\n            if (this.column2.length - 1 < defaultIndex[1]) {\n              this.dIndex2 = this.column2.length - 1\n            } else {\n              this.dIndex2 = defaultIndex[1] || 0\n            }\n          })\n        }\n      },\n      setLinkLayer3 () {\n        const { defaultIndex } = this\n        if (typeof defaultIndex === 'number') {\n          this.dIndex3 = 0\n          if (this.column2.length > 1 && this.column2[0].children) {\n            this.column3 = this.column2[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 1){\n          this.$nextTick(() => {\n            this.column3 = this.column2[this.dIndex2].children || []\n            this.$nextTick(() => {\n              if (this.column3.length - 1 < defaultIndex[2]) {\n                this.dIndex3 = this.column3.length - 1\n              } else {\n                this.dIndex3 = defaultIndex[2] || 0\n              }\n            })\n          })\n        }\n      },\n      setLinkLayer4 () {\n        const { defaultIndex } = this\n        if (typeof defaultIndex === 'number') {\n          this.dIndex4 = 0\n          if (this.column3.length > 1 && this.column3[0].children) {\n            this.column4 = this.column3[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 2){\n          setTimeout(() => {\n            this.column4 = this.column3[this.dIndex3].children || []\n            this.$nextTick(() => {\n              if (this.column4.length - 1 < defaultIndex[3]) {\n                this.dIndex4 = this.column4.length - 1\n              } else {\n                this.dIndex4 = defaultIndex[3] || 0\n              }\n            })\n          })\n        }\n      },\n      setNormalIndex () {\n        this.$nextTick(() => {\n          const { defaultIndex } = this\n          if (Array.isArray(defaultIndex)) {\n            this.setDefaultIndex()\n          } else {\n            this.dIndex1 = Number(defaultIndex) || 0\n          }\n        })\n      },\n      setDefaultIndex () {\n        const { indexArr } = this\n        const self = this\n        function next() {\n          let promise = Promise.resolve()\n          let index = 0\n          while (index < self.data.length) {\n            promise = promise.then(indexArr[index])\n            index++\n          }\n        }\n        next()\n      },\n      change (index, res) {\n        this.result[index] = res\n        this.$emit('change', this.result)\n      },\n      change1 (res) {\n        if (res) {\n          this.change(0, res)\n          if (this.layer > 1) {\n            this.dIndex2 = 0\n            this.changeLink('column2', res)\n          }\n        }\n      },\n      change2 (res) {\n        if (res) {\n          this.change(1, res)\n          if (this.layer > 2) {\n            this.dIndex3 = 0\n            this.changeLink('column3', res)\n          }\n        }\n      },\n      change3 (res) {\n        if (res) {\n          this.change(2, res)\n          if (this.layer > 3) {\n            this.dIndex4 = 0\n            this.changeLink('column4', res)\n          }\n        }\n      },\n      change4 (res) {\n        if (res) {\n          this.change(3, res)\n        }\n      },\n      changeLink (key, res) {\n        if (this.layer) {\n          // clearTimeout(this.linktimer)\n          this.linktimer = setTimeout(() => {\n            this[key] = res.children || []\n          }, 1000 / 60)\n        }\n      },\n      cancel () {\n        this.looseBody()\n        this.$emit('cancel')\n        this.$emit('update:visible', false)\n      },\n      confirm () {\n        this.looseBody()\n        this.$emit('confirm', this.result)\n        this.$emit('update:visible', false)\n      },\n      stopPropagation (e) {\n        e.stopPropagation()\n      },\n      fixedBody() {\n        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop\n        this.prevBodyCss = document.body.style.cssText\n        document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'\n      },\n      looseBody() {\n        const body = document.body\n        const top = body.style.top\n        body.style.cssText = this.prevBodyCss\n        body.scrollTop = document.documentElement.scrollTop = -parseInt(top)\n        body.style.top = ''\n      },\n      init() {\n        this.result = []\n        this.indexArr = [\n          () => this.dIndex1 = this.defaultIndex[0] || 0,\n          () => this.dIndex2 = this.defaultIndex[1] || 0,\n          () => this.dIndex3 = this.defaultIndex[2] || 0,\n          () => this.dIndex4 = this.defaultIndex[3] || 0\n        ]\n        this.formateData()\n      }\n    },\n    created () {\n      this.init()\n    },\n    mounted () {\n      this.$refs.picker.addEventListener('click', this.stopPropagation)\n      if (this.appendToBody) {\n        document.body.appendChild(this.$el)\n      }\n    },\n    watch: {\n      visible (v) {\n        if (v) {\n          this.fixedBody()\n        }\n      },\n      defaultIndex () {\n        this.init()\n      },\n      data() {\n        this.init()\n      }\n    },\n    beforeDestroy () {\n      this.$refs.picker.removeEventListener('click', this.stopPropagation)\n    }\n  }\n</script>\n<style lang=\"scss\" scoped>\n  .pickerbox {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 9999;\n    overflow: hidden;\n  }\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .2s;\n  }\n  .fade-enter, .fade-leave-to {\n    opacity: 0;\n  }\n  .toup-enter-active, .toup-leave-active {\n    transition: transform .3s;\n  }\n  .toup-enter, .toup-leave-to {\n    transform: translate3d(0, 100px, 0);\n  }\n  // ----\n  .vue-picker {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #fff;\n    user-select: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .content {\n    overflow: hidden;\n    height: 220px;\n    position: relative;\n    display: flex;\n  }\n  .colums {\n    display: flex;\n    overflow: hidden;\n    font-size: 16px;\n    text-align: center;\n    flex: 1;\n  }\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    backface-visibility: hidden;\n    pointer-events: none;\n    background-size: 100% 88px;\n  }\n  .hairline {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    z-index: 3;\n    width: 100%;\n    transform: translateY(-50%);\n    pointer-events: none;\n    height: 44px;\n    &::after {\n      position: absolute;\n      box-sizing: border-box;\n      content: ' ';\n      pointer-events: none;\n      top: -50%;\n      right: -50%;\n      bottom: -50%;\n      left: -50%;\n      border: 0 solid #ebedf0;\n      -webkit-transform: scale(0.5);\n      transform: scale(0.5);\n      border-width: 1px 0;\n    }\n  }\n</style>\n",".pickerbox {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  overflow: hidden;\n}\n\n.fade-enter-active, .fade-leave-active {\n  transition: opacity 0.2s;\n}\n\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n\n.toup-enter-active, .toup-leave-active {\n  transition: transform 0.3s;\n}\n\n.toup-enter, .toup-leave-to {\n  transform: translate3d(0, 100px, 0);\n}\n\n.vue-picker {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  user-select: none;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.content {\n  overflow: hidden;\n  height: 220px;\n  position: relative;\n  display: flex;\n}\n\n.colums {\n  display: flex;\n  overflow: hidden;\n  font-size: 16px;\n  text-align: center;\n  flex: 1;\n}\n\n.mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n  background-repeat: no-repeat;\n  background-position: top, bottom;\n  backface-visibility: hidden;\n  pointer-events: none;\n  background-size: 100% 88px;\n}\n\n.hairline {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  height: 44px;\n}\n.hairline::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-200a1302";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var index = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );

export default index;
