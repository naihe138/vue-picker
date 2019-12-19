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
    inject("data-v-a77db35a_0", { source: ".header[data-v-a77db35a] {\n  height: 44px;\n  line-height: 44px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n.header[data-v-a77db35a]::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  border-width: 1px 0;\n}\n.title[data-v-a77db35a] {\n  max-width: 50%;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.btn[data-v-a77db35a] {\n  padding: 0 16px;\n  color: #1989fa;\n  font-size: 14px;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=header.vue.map */", map: {"version":3,"sources":["/Users/naice/my-projects/vue-picker/src/header.vue","header.vue"],"names":[],"mappings":"AAuCA;EACA,YAAA;EACA,iBAAA;EACA,oBAAA;EAAA,aAAA;EACA,yBAAA;UAAA,8BAAA;EACA,kBAAA;ACtCA;ADuCA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,mBAAA;ACrCA;ADwCA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;ACrCA;ADuCA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,6BAAA;ACpCA;;AAEA,qCAAqC","file":"header.vue","sourcesContent":["<template>\n  <div class=\"header\">\n    <div class=\"left\">\n      <span class=\"btn\" @click=\"cancel\">{{cancelText}}</span>\n    </div>\n    <div class=\"title\">{{title}}</div>\n    <div class=\"right\">\n      <span class=\"btn\" @click=\"confirm\">{{confirmText}}</span>\n    </div>\n  </div>\n</template>\n\n<script>\n  // TODO： 支持自定义的render渲染\n  // import textRender from './render'\n  export default {\n    props: {\n      cancelText: {\n        type: String\n      },\n      confirmText: {\n        type: String\n      },\n      title: {\n        type: String\n      }\n    },\n    methods: {\n      cancel () {\n        this.$emit('cancel')\n      },\n      confirm () {\n        this.$emit('confirm')\n      }\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .header {\n    height: 44px;\n    line-height: 44px;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    &::after {\n      position: absolute;\n      box-sizing: border-box;\n      content: ' ';\n      pointer-events: none;\n      top: -50%;\n      right: -50%;\n      bottom: -50%;\n      left: -50%;\n      border: 0 solid #ebedf0;\n      transform: scale(0.5);\n      border-width: 1px 0;\n    }\n  }\n  .title {\n    max-width: 50%;\n    font-weight: 500;\n    font-size: 16px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .btn {\n    padding: 0 16px;\n    color: #1989fa;\n    font-size: 14px;\n    background-color: transparent;\n  }\n</style>\n",".header {\n  height: 44px;\n  line-height: 44px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.header::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n.title {\n  max-width: 50%;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.btn {\n  padding: 0 16px;\n  color: #1989fa;\n  font-size: 14px;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=header.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-a77db35a";
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

//
const MoveTime = 300;
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
      this.setTop(this.defaultIndex);
      const halfBox = (this.boxHeight - this.itemHeight) / 2;
      this.bottom = halfBox + this.itemHeight;
      this.top = halfBox - this.column.length * this.itemHeight;
      // 惯性运动相关
      this.distStartTop = 0;
      this.distStartTime = 0;
      this.timer = 0;
      // 监听开始时间
      this.$refs.list.addEventListener(START_EVENT, this.handleStart, false);
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
      this.distStartTime = new Date().getTime();
      this.timer = 0;
      // ----
      this.startY = getClient(e).y;
      this.ulStyle.transitionDuration = `0ms`;
      this.ulStyle.transitionProperty = `none`;
      // --
      document.addEventListener(MOVE_EVENT, this.handleMove, false);
      document.addEventListener(END_EVENT, this.handleEnd, false);
    },
    handleMove (e) {
      this.deltaY = getClient(e).y - this.startY;
      this.startY = getClient(e).y;
      if (this.startTop > this.bottom) {
        this.startTop = this.bottom;
      } else if (this.startTop < this.top) {
        this.startTop = this.top;
      } else {
        this.startTop += this.deltaY;
      }
      this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
    },
    handleEnd (e) {
      document.removeEventListener(MOVE_EVENT, this.handleMove, false);
      document.removeEventListener(END_EVENT, this.handleEnd, false);
      // --
      this.ulStyle.transitionProperty = `all`;
      this.ulStyle.transitionDuration = `${MoveTime}ms`;
      if (this.startTop >= this.bottom - this.itemHeight) {
        this.setTop();
      } else if (this.startTop <= this.top + this.itemHeight) {
        this.setTop(this.column.length - 1);
      } else {
        this.ulStyle.transitionDuration = `0ms`;
        this.ulStyle.transitionProperty = `none`;
        this.toMove(e);
      }
    },
    toMove (e) {
      let endTime = new Date().getTime();
      if(endTime - this.distStartTime > 300) {
        let index = Math.round((this.startTop) / this.itemHeight);
        this.startTop = index * this.itemHeight;
        if (this.startTop > this.bottom) {
          this.startTop = this.bottom - this.itemHeight;
          index = -2;
        } else if (this.startTop < this.top) {
          this.startTop = this.top + this.itemHeight;
          index = this.column.length + 1;
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
        index = 2 - index;
        if (this.selectIndex !== index) {
          this.selectIndex = index;
          this.change();
        }
        return
      }
      let endTop = getClient(e).y;
      let speed = ((endTop - this.distStartTop) / (endTime - this.distStartTime)) * 16;
      let f = 0;
      this.timer = true;
      const show = () => {
        this.timer && requestAnimationFrame(show);
        f = Math.min(Math.abs(speed) / 32, 1);
        if(speed > 0.5){
          speed -= f;
        } else if(speed < -0.5){
          speed += f;
        } else {
          speed = 0;
          this.timer = false;
          let index = Math.round(this.startTop / this.itemHeight);
          this.startTop = index * this.itemHeight;
          if (this.startTop >= this.bottom) {
            this.startTop = this.bottom - this.itemHeight;
            this.ulStyle.transitionProperty = `all`;
            this.ulStyle.transitionDuration = `${MoveTime}ms`;
            index = -2;
          } else if (this.startTop <= this.top) {
            this.ulStyle.transitionProperty = `all`;
            this.ulStyle.transitionDuration = `${MoveTime}ms`;
            this.startTop = this.top + this.itemHeight;
            index = this.column.length + 1;
          }
          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
          index = 2 - index;
          if (this.selectIndex !== index) {
            this.selectIndex = index;
            this.change();
          }
          return
        }
        this.startTop += speed;
        if (this.startTop > this.bottom + this.itemHeight) {
          speed = 0;
          this.timer = false;
          this.startTop = this.bottom - this.itemHeight;
          this.ulStyle.transitionProperty = `all`;
          this.ulStyle.transitionDuration = `${MoveTime}ms`;
          if (this.selectIndex !== 0) {
            this.selectIndex = 0;
            this.change();
          }
        } else if (this.startTop < this.top - this.itemHeight) {
          speed = 0;
          this.timer = false;
          this.ulStyle.transitionProperty = `all`;
          this.ulStyle.transitionDuration = `${MoveTime}ms`;
          this.startTop = this.top + this.itemHeight;
          if (this.selectIndex !== (this.column.length - 1)) {
            this.selectIndex = this.column.length - 1;
            this.change();
          }
        }
        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`;
      };
      show();
    },
    change () {
      this.$emit('change', this.column[this.selectIndex]);
    }
  },
  mounted () {
    this.init();
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
    this.$refs.list.removeEventListener(START_EVENT, this.handleStart, false);
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
    inject("data-v-4f0bd5a4_0", { source: ".list[data-v-4f0bd5a4] {\n  margin: 0;\n  padding: 0;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.list ul[data-v-4f0bd5a4] {\n  margin: 0;\n  padding: 0;\n  -webkit-transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n          transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n  line-height: 44px;\n}\n.list li[data-v-4f0bd5a4] {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  color: #000;\n}\n\n/*# sourceMappingURL=list.vue.map */", map: {"version":3,"sources":["/Users/naice/my-projects/vue-picker/src/list.vue","list.vue"],"names":[],"mappings":"AAsMA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;UAAA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;ACrMA;ADsMA;EACA,SAAA;EACA,UAAA;EACA,kEAAA;UAAA,0DAAA;EACA,iBAAA;ACpMA;ADsMA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;ACpMA;;AAEA,mCAAmC","file":"list.vue","sourcesContent":["<template>\n  <div class=\"list\" ref=\"list\">\n    <ul :style=\"ulStyle\">\n      <li v-for=\"(item, index) in column\" :key=\"'item' + index\">{{item.label}}</li>\n    </ul>\n  </div>\n</template>\n\n<script>\n  import { getClient, START_EVENT, MOVE_EVENT, END_EVENT } from './utils.js'\n  const MoveTime = 300\n  export default {\n    props: {\n      defaultIndex: {\n        type: Number,\n        default: 0\n      },\n      column: {\n        type: Array,\n        default: () => ([])\n      },\n      boxHeight: Number,\n      itemHeight: Number\n    },\n    data() {\n      return {\n        ulStyle: {\n          transform: `translate3d(0px, 0px, 0px)`,\n          transitionDuration: `0ms`,\n          transitionProperty: `none`,\n          lineHeight: `44px`\n        }\n      }\n    },\n    methods: {\n      init () {\n        this.setTop(this.defaultIndex)\n        const halfBox = (this.boxHeight - this.itemHeight) / 2\n        this.bottom = halfBox + this.itemHeight\n        this.top = halfBox - this.column.length * this.itemHeight\n        // 惯性运动相关\n        this.distStartTop = 0\n        this.distStartTime = 0\n        this.timer = 0\n        // 监听开始时间\n        this.$refs.list.addEventListener(START_EVENT, this.handleStart, false)\n      },\n      // 根据index 设置滚动位置\n      setTop (index = 0) {\n        const { boxHeight, itemHeight } = this\n        this.startTop = ((boxHeight - itemHeight) / 2) - (index * itemHeight)\n        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n        this.selectIndex = index\n        this.change()\n      },\n      handleStart (e) {\n        this.distStartTop = getClient(e).y\n        this.distStartTime = new Date().getTime()\n        this.timer = 0\n        // ----\n        this.startY = getClient(e).y\n        this.ulStyle.transitionDuration = `0ms`\n        this.ulStyle.transitionProperty = `none`\n        // --\n        document.addEventListener(MOVE_EVENT, this.handleMove, false)\n        document.addEventListener(END_EVENT, this.handleEnd, false)\n      },\n      handleMove (e) {\n        this.deltaY = getClient(e).y - this.startY\n        this.startY = getClient(e).y\n        if (this.startTop > this.bottom) {\n          this.startTop = this.bottom\n        } else if (this.startTop < this.top) {\n          this.startTop = this.top\n        } else {\n          this.startTop += this.deltaY\n        }\n        this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n      },\n      handleEnd (e) {\n        document.removeEventListener(MOVE_EVENT, this.handleMove, false)\n        document.removeEventListener(END_EVENT, this.handleEnd, false)\n        // --\n        this.ulStyle.transitionProperty = `all`\n        this.ulStyle.transitionDuration = `${MoveTime}ms`\n        if (this.startTop >= this.bottom - this.itemHeight) {\n          this.setTop()\n        } else if (this.startTop <= this.top + this.itemHeight) {\n          this.setTop(this.column.length - 1)\n        } else {\n          this.ulStyle.transitionDuration = `0ms`\n          this.ulStyle.transitionProperty = `none`\n          this.toMove(e)\n        }\n      },\n      toMove (e) {\n        let endTime = new Date().getTime()\n        if(endTime - this.distStartTime > 300) {\n          let index = Math.round((this.startTop) / this.itemHeight)\n          this.startTop = index * this.itemHeight\n          if (this.startTop > this.bottom) {\n            this.startTop = this.bottom - this.itemHeight\n            index = -2\n          } else if (this.startTop < this.top) {\n            this.startTop = this.top + this.itemHeight\n            index = this.column.length + 1\n          }\n          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n          index = 2 - index\n          if (this.selectIndex !== index) {\n            this.selectIndex = index\n            this.change()\n          }\n          return\n        }\n        let endTop = getClient(e).y\n        let speed = ((endTop - this.distStartTop) / (endTime - this.distStartTime)) * 16\n        let f = 0\n        this.timer = true\n        const show = () => {\n          this.timer && requestAnimationFrame(show)\n          f = Math.min(Math.abs(speed) / 32, 1)\n          if(speed > 0.5){\n            speed -= f\n          } else if(speed < -0.5){\n            speed += f\n          } else {\n            speed = 0\n            this.timer = false\n            let index = Math.round(this.startTop / this.itemHeight)\n            this.startTop = index * this.itemHeight\n            if (this.startTop >= this.bottom) {\n              this.startTop = this.bottom - this.itemHeight\n              this.ulStyle.transitionProperty = `all`\n              this.ulStyle.transitionDuration = `${MoveTime}ms`\n              index = -2\n            } else if (this.startTop <= this.top) {\n              this.ulStyle.transitionProperty = `all`\n              this.ulStyle.transitionDuration = `${MoveTime}ms`\n              this.startTop = this.top + this.itemHeight\n              index = this.column.length + 1\n            }\n            this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n            index = 2 - index\n            if (this.selectIndex !== index) {\n              this.selectIndex = index\n              this.change()\n            }\n            return\n          }\n          this.startTop += speed\n          if (this.startTop > this.bottom + this.itemHeight) {\n            speed = 0\n            this.timer = false\n            this.startTop = this.bottom - this.itemHeight\n            this.ulStyle.transitionProperty = `all`\n            this.ulStyle.transitionDuration = `${MoveTime}ms`\n            if (this.selectIndex !== 0) {\n              this.selectIndex = 0\n              this.change()\n            }\n          } else if (this.startTop < this.top - this.itemHeight) {\n            speed = 0\n            this.timer = false\n            this.ulStyle.transitionProperty = `all`\n            this.ulStyle.transitionDuration = `${MoveTime}ms`\n            this.startTop = this.top + this.itemHeight\n            if (this.selectIndex !== (this.column.length - 1)) {\n              this.selectIndex = this.column.length - 1\n              this.change()\n            }\n          }\n          this.ulStyle.transform = `translate3d(0px, ${this.startTop}px, 0px)`\n        }\n        show()\n      },\n      change () {\n        this.$emit('change', this.column[this.selectIndex])\n      }\n    },\n    mounted () {\n      this.init()\n    },\n    watch: {\n      column () {\n        this.init()\n      },\n      defaultIndex () {\n        this.setTop(this.defaultIndex)\n      }\n    },\n    beforeDestroy () {\n      this.$refs.list.removeEventListener(START_EVENT, this.handleStart, false)\n    }\n  }\n</script>\n\n<style lang=\"scss\" scoped>\n  .list {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    ul {\n      margin: 0;\n      padding: 0;\n      transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n      line-height: 44px;\n    }\n    li {\n      margin: 0;\n      padding: 0;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      padding: 0 5px;\n      color: #000;\n    }\n  }\n</style>\n",".list {\n  margin: 0;\n  padding: 0;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.list ul {\n  margin: 0;\n  padding: 0;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);\n  line-height: 44px;\n}\n.list li {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 5px;\n  color: #000;\n}\n\n/*# sourceMappingURL=list.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-4f0bd5a4";
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
      return itemHeight * 5
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
        this.dIndex2 = defaultIndex[1] || 0;
        this.column2 = this.data[this.dIndex1].children || [];
      }
    },
    setLinkLayer3 () {
      const { defaultIndex } = this;
      if (typeof defaultIndex === 'number') {
        this.dIndex3 = 0;
        if (this.column2.length > 1 && this.column2[0].children) {
          this.column3 = this.column2[0].children || [];
        }
      } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){
        this.dIndex3 = defaultIndex[2] || 0;
        this.column3 = this.column2[this.dIndex2].children || [];
      }
    },
    setLinkLayer4 () {
      const { defaultIndex } = this;
      if (typeof defaultIndex === 'number') {
        this.dIndex4 = 0;
        if (this.column3.length > 1 && this.column3[0].children) {
          this.column4 = this.column3[0].children || [];
        }
      } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){
        this.dIndex4 = defaultIndex[3] || 0;
        this.column4 = this.column3[this.dIndex3].children || [];
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
        clearTimeout(this.linktimer);
        this.linktimer = setTimeout(() => {
          this[key] = res.children || [];
        }, 100);
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
    }
  },
  created () {
    this.result = [];
    this.indexArr = [
      () => this.dIndex1 = this.defaultIndex[0] || 0,
      () => this.dIndex2 = this.defaultIndex[1] || 0,
      () => this.dIndex3 = this.defaultIndex[2] || 0,
      () => this.dIndex4 = this.defaultIndex[3] || 0
    ];
    this.formateData();
  },
  mounted () {
    this.$refs.picker.addEventListener('click', this.stopPropagation);
  },
  watch: {
    visible (v) {
      if (v) {
        this.fixedBody();
      }
    },
    defaultIndex () {
      this.formateData();
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
                          defaultIndex: _vm.dIndex1
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
                              defaultIndex: _vm.dIndex2
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
                              defaultIndex: _vm.dIndex3
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
                              defaultIndex: _vm.dIndex4
                            },
                            on: { change: _vm.change4 }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask" }),
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
    inject("data-v-5fb94fb4_0", { source: ".pickerbox[data-v-5fb94fb4] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  overflow: hidden;\n}\n.fade-enter-active[data-v-5fb94fb4], .fade-leave-active[data-v-5fb94fb4] {\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n.fade-enter[data-v-5fb94fb4], .fade-leave-to[data-v-5fb94fb4] {\n  opacity: 0;\n}\n.toup-enter-active[data-v-5fb94fb4], .toup-leave-active[data-v-5fb94fb4] {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.toup-enter[data-v-5fb94fb4], .toup-leave-to[data-v-5fb94fb4] {\n  -webkit-transform: translate3d(0, 100px, 0);\n          transform: translate3d(0, 100px, 0);\n}\n.vue-picker[data-v-5fb94fb4] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n.content[data-v-5fb94fb4] {\n  overflow: hidden;\n  height: 220px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n.colums[data-v-5fb94fb4] {\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  font-size: 16px;\n  text-align: center;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.mask[data-v-5fb94fb4] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0.4))), -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0.9)), to(rgba(255, 255, 255, 0.4)));\n  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n  background-repeat: no-repeat;\n  background-position: top, bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  pointer-events: none;\n  background-size: 100% 88px;\n}\n.hairline[data-v-5fb94fb4] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  pointer-events: none;\n  height: 44px;\n}\n.hairline[data-v-5fb94fb4]::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["/Users/naice/my-projects/vue-picker/src/index.vue","index.vue"],"names":[],"mappings":"AAmTA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,MAAA;EACA,8BAAA;EACA,aAAA;EACA,gBAAA;AClTA;ADoTA;EACA,gCAAA;EAAA,wBAAA;ACjTA;ADmTA;EACA,UAAA;AChTA;ADkTA;EACA,0CAAA;EAAA,kCAAA;EAAA,0BAAA;EAAA,kDAAA;AC/SA;ADiTA;EACA,2CAAA;UAAA,mCAAA;AC9SA;ADiTA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,sBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,8BAAA;EACA,wCAAA;AC9SA;ADgTA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,oBAAA;EAAA,aAAA;AC7SA;AD+SA;EACA,oBAAA;EAAA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;UAAA,OAAA;AC5SA;AD8SA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,8OAAA;EAAA,wKAAA;EACA,4BAAA;EACA,gCAAA;EACA,mCAAA;UAAA,2BAAA;EACA,oBAAA;EACA,0BAAA;AC3SA;AD6SA;EACA,kBAAA;EACA,QAAA;EACA,OAAA;EACA,UAAA;EACA,WAAA;EACA,mCAAA;UAAA,2BAAA;EACA,oBAAA;EACA,YAAA;AC1SA;AD2SA;EACA,kBAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,uBAAA;EACA,6BAAA;EACA,qBAAA;EACA,mBAAA;ACzSA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["<template>\n  <transition name=\"fade\">\n    <div class=\"pickerbox\" v-show=\"visible\" @click=\"clickMask\">\n      <transition name=\"toup\">\n        <div class=\"vue-picker\" ref=\"picker\" v-show=\"visible\">\n          <Header v-if=\"showToolbar\"\n            :cancelText=\"cancelText\"\n            :confirmText=\"confirmText\"\n            :title=\"title\"\n            @cancel=\"cancel\"\n            @confirm=\"confirm\" />\n          <div class=\"content\" :style=\"{height: boxHeight + 'px'}\">\n            <div class=\"colums\">\n              <List :column=\"column1\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex1\"\n                @change=\"change1\" />\n              <List v-if=\"column2.length > 0\"\n                :column=\"column2\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex2\"\n                @change=\"change2\" />\n              <List v-if=\"column3.length > 0\"\n                :column=\"column3\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex3\"\n                @change=\"change3\" />\n              <List v-if=\"column4.length > 0\"\n                :column=\"column4\"\n                :boxHeight=\"boxHeight\"\n                :itemHeight=\"itemHeight\"\n                :defaultIndex=\"dIndex4\"\n                @change=\"change4\" />\n            </div>\n            <div class=\"mask\"></div>\n            <div class=\"hairline\"></div>\n          </div>\n        </div>\n      </transition>\n    </div>\n  </transition>\n</template>\n<script>\n  import Header from './header.vue'\n  import List from './list.vue'\n  import { DEFTAULT_ITEM_HEIGHT } from './utils.js'\n  export default {\n    name: 'VuePicker',\n    props: {\n      visible: {\n        type: Boolean,\n        default: false\n      },\n      data: {\n        type: Array,\n        default: () => []\n      },\n      layer: {\n        type: Number,\n        default: 0\n      },\n      itemHeight: {\n        type: [Number, String],\n        default: DEFTAULT_ITEM_HEIGHT\n      },\n      defaultIndex: {\n        type: [Number, Array],\n        default: 0\n      },\n      cancelText: {\n        type: String,\n        default: '取消'\n      },\n      confirmText: {\n        type: String,\n        default: '确认'\n      },\n      title: {\n        type: String,\n        default: ''\n      },\n      showToolbar: {\n        type: Boolean,\n        default: false\n      },\n      maskClick: {\n        type: Boolean,\n        default: false\n      }\n    },\n    components: {\n      Header,\n      List\n    },\n    data () {\n      return {\n        column1: [],\n        column2: [],\n        column3: [],\n        column4: [],\n        dIndex1: 0,\n        dIndex2: 0,\n        dIndex3: 0,\n        dIndex4: 0\n      }\n    },\n    computed: {\n      boxHeight () {\n        let itemHeight = parseInt(this.itemHeight)\n        itemHeight = itemHeight ? itemHeight : DEFTAULT_ITEM_HEIGHT\n        return itemHeight * 5\n      }\n    },\n    methods: {\n      clickMask () {\n        if (this.maskClick) {\n          this.looseBody()\n          this.$emit('update:visible', false)\n        }\n      },\n      formateData () {\n        if (this.layer > 1) {\n          this.setLinkColumn()\n        } else {\n          this.column1 = this.data[0] || []\n          this.column2 = this.data[1] || []\n          this.column3 = this.data[2] || []\n          this.column4 = this.data[3] || []\n          this.setNormalIndex()\n        }\n      },\n      setLinkColumn () {\n        if (this.layer === 2) {\n          this.setLinkLayer2()\n        } else if (this.layer === 3) {\n          this.setLinkLayer2()\n          this.setLinkLayer3()\n        } else if (this.layer === 4) {\n          this.setLinkLayer2()\n          this.setLinkLayer3()\n          this.setLinkLayer4()\n        }\n      },\n      setLinkLayer2 () {\n        const { defaultIndex } = this\n        this.column1 = this.data || []\n        if (typeof defaultIndex === 'number') {\n          this.dIndex1 = defaultIndex\n          this.dIndex2 = 0\n          if (this.data.length > 1 && this.data[0].children) {\n            this.column2 = this.data[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){\n          this.dIndex1 = defaultIndex[0] || 0\n          this.dIndex2 = defaultIndex[1] || 0\n          this.column2 = this.data[this.dIndex1].children || []\n        }\n      },\n      setLinkLayer3 () {\n        const { defaultIndex } = this\n        if (typeof defaultIndex === 'number') {\n          this.dIndex3 = 0\n          if (this.column2.length > 1 && this.column2[0].children) {\n            this.column3 = this.column2[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){\n          this.dIndex3 = defaultIndex[2] || 0\n          this.column3 = this.column2[this.dIndex2].children || []\n        }\n      },\n      setLinkLayer4 () {\n        const { defaultIndex } = this\n        if (typeof defaultIndex === 'number') {\n          this.dIndex4 = 0\n          if (this.column3.length > 1 && this.column3[0].children) {\n            this.column4 = this.column3[0].children || []\n          }\n        } else if (Array.isArray(defaultIndex) && defaultIndex.length > 0){\n          this.dIndex4 = defaultIndex[3] || 0\n          this.column4 = this.column3[this.dIndex3].children || []\n        }\n      },\n      setNormalIndex () {\n        this.$nextTick(() => {\n          const { defaultIndex } = this\n          if (Array.isArray(defaultIndex)) {\n            this.setDefaultIndex()\n          } else {\n            this.dIndex1 = Number(defaultIndex) || 0\n          }\n        })\n      },\n      setDefaultIndex () {\n        const { indexArr } = this\n        const self = this\n        function next() {\n          let promise = Promise.resolve()\n          let index = 0\n          while (index < self.data.length) {\n            promise = promise.then(indexArr[index])\n            index++\n          }\n        }\n        next()\n      },\n      change (index, res) {\n        this.result[index] = res\n        this.$emit('change', this.result)\n      },\n      change1 (res) {\n        if (res) {\n          this.change(0, res)\n          if (this.layer > 1) {\n            this.dIndex2 = 0\n            this.changeLink('column2', res)\n          }\n        }\n      },\n      change2 (res) {\n        if (res) {\n          this.change(1, res)\n          if (this.layer > 2) {\n            this.dIndex3 = 0\n            this.changeLink('column3', res)\n          }\n        }\n      },\n      change3 (res) {\n        if (res) {\n          this.change(2, res)\n          if (this.layer > 3) {\n            this.dIndex4 = 0\n            this.changeLink('column4', res)\n          }\n        }\n      },\n      change4 (res) {\n        if (res) {\n          this.change(3, res)\n        }\n      },\n      changeLink (key, res) {\n        if (this.layer) {\n          clearTimeout(this.linktimer)\n          this.linktimer = setTimeout(() => {\n            this[key] = res.children || []\n          }, 100)\n        }\n      },\n      cancel () {\n        this.looseBody()\n        this.$emit('cancel')\n        this.$emit('update:visible', false)\n      },\n      confirm () {\n        this.looseBody()\n        this.$emit('confirm', this.result)\n        this.$emit('update:visible', false)\n      },\n      stopPropagation (e) {\n        e.stopPropagation()\n      },\n      fixedBody() {\n        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop\n        this.prevBodyCss = document.body.style.cssText\n        document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'\n      },\n      looseBody() {\n        const body = document.body\n        const top = body.style.top\n        body.style.cssText = this.prevBodyCss\n        body.scrollTop = document.documentElement.scrollTop = -parseInt(top)\n        body.style.top = ''\n      }\n    },\n    created () {\n      this.result = []\n      this.indexArr = [\n        () => this.dIndex1 = this.defaultIndex[0] || 0,\n        () => this.dIndex2 = this.defaultIndex[1] || 0,\n        () => this.dIndex3 = this.defaultIndex[2] || 0,\n        () => this.dIndex4 = this.defaultIndex[3] || 0\n      ]\n      this.formateData()\n    },\n    mounted () {\n      this.$refs.picker.addEventListener('click', this.stopPropagation)\n    },\n    watch: {\n      visible (v) {\n        if (v) {\n          this.fixedBody()\n        }\n      },\n      defaultIndex () {\n        this.formateData()\n      }\n    },\n    beforeDestroy () {\n      this.$refs.picker.removeEventListener('click', this.stopPropagation)\n    }\n  }\n</script>\n<style lang=\"scss\" scoped>\n  .pickerbox {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 9999;\n    overflow: hidden;\n  }\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .2s;\n  }\n  .fade-enter, .fade-leave-to {\n    opacity: 0;\n  }\n  .toup-enter-active, .toup-leave-active {\n    transition: transform .3s;\n  }\n  .toup-enter, .toup-leave-to {\n    transform: translate3d(0, 100px, 0);\n  }\n  // ----\n  .vue-picker {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #fff;\n    user-select: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .content {\n    overflow: hidden;\n    height: 220px;\n    position: relative;\n    display: flex;\n  }\n  .colums {\n    display: flex;\n    overflow: hidden;\n    font-size: 16px;\n    text-align: center;\n    flex: 1;\n  }\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    backface-visibility: hidden;\n    pointer-events: none;\n    background-size: 100% 88px;\n  }\n  .hairline {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    z-index: 3;\n    width: 100%;\n    transform: translateY(-50%);\n    pointer-events: none;\n    height: 44px;\n    &::after {\n      position: absolute;\n      box-sizing: border-box;\n      content: ' ';\n      pointer-events: none;\n      top: -50%;\n      right: -50%;\n      bottom: -50%;\n      left: -50%;\n      border: 0 solid #ebedf0;\n      -webkit-transform: scale(0.5);\n      transform: scale(0.5);\n      border-width: 1px 0;\n    }\n  }\n</style>\n",".pickerbox {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  overflow: hidden;\n}\n\n.fade-enter-active, .fade-leave-active {\n  transition: opacity 0.2s;\n}\n\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n\n.toup-enter-active, .toup-leave-active {\n  transition: transform 0.3s;\n}\n\n.toup-enter, .toup-leave-to {\n  transform: translate3d(0, 100px, 0);\n}\n\n.vue-picker {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #fff;\n  user-select: none;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.content {\n  overflow: hidden;\n  height: 220px;\n  position: relative;\n  display: flex;\n}\n\n.colums {\n  display: flex;\n  overflow: hidden;\n  font-size: 16px;\n  text-align: center;\n  flex: 1;\n}\n\n.mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n  background-repeat: no-repeat;\n  background-position: top, bottom;\n  backface-visibility: hidden;\n  pointer-events: none;\n  background-size: 100% 88px;\n}\n\n.hairline {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  height: 44px;\n}\n.hairline::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  pointer-events: none;\n  top: -50%;\n  right: -50%;\n  bottom: -50%;\n  left: -50%;\n  border: 0 solid #ebedf0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-width: 1px 0;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-5fb94fb4";
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
