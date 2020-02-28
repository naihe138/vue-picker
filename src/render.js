'use strict'
import Vue from 'vue'

const textRender = Vue.component('text-render', {
  functional: true,
  props: {
    crender: {
      type: Function,
      default: function () {}
    },
    value: {
      type: [Object, Number, String, Boolean, Array],
      default: function () {
        return {}
      }
    },
    column: {
      type: Object,
      default: function () {
        return {}
      }
    },
    index: {
      type: [Number, String],
      default: 0
    },
    row: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  render (h, self) {
    return self.props.crender(h, { index: self.props.index, value: self.props.value, column: self.props.column, row: self.props.row })
  }
})

export default textRender
