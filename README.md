中文 | [English](https://github.com/naihe138/vue-picker/blob/master/README-en.md)


`vue-picker`的组件，囊括了（`普通选择`、`联动选择`、`中国地址选择`）等等常见的picker，兼容PC、移动端，通过简单配置就可以出现一个强大的picker，感受下效果图。


![vue-pick.gif][1]


## Demo(快点去复制代码体验一波吧)

[https://naihe138.github.io/vue-picker/index.html][3]


## Install

`npm install vue-pickers --save` or `yarn add vue-pickers`


## 使用

> 普通网页开发直接复制lib/vue-picker.js文件夹到项目即可直接使用

````javascript
<template>
  <div>
    <button @click="show">show picker</button>
    <VuePicker :data="pickData"
      :showToolbar="true"
      @cancel="cancel"
      @confirm="confirm"
      :visible.sync="pickerVisible"
    />
  </div>
</template>

<script>
  import VuePicker from 'vue-pickers'
  var tdata = []
  for (let i = 0; i < 20; i++) {
    tdata.push({
      label: '第' + i + '行',
      value: i
    })
  }
  export default {
    components: {
      VuePicker
    },
    data () {
      return {
        pickerVisible: false,
        pickData: [
          tdata
        ],
        result: ''
      }
    },
    methods: {
      show () {
        this.pickerVisible = true
      },
      cancel () {
        this.result = 'click cancel result: null'
      },
      confirm (res) {
        this.result = JSON.stringify(res)
      }
    }
  }
</script>
````

## 属性参数说明

参数 | 说明 | 是否必须 | 类型 |默认值
---- | --- | --- | --- | ---
visible | 显示/隐藏picker | 是 | Boolean | false
data | pickerData，多列[data1, data2]  | 是 | Array | []
layer | 联动显示列数  | 否 | Number | 0
defaultIndex | 默认显示的index  | 否 | Number/Array(多列用数组) | 无
cancelText | 取消按钮文字  | 否 | String | '取消'
confirmText | 去确认按钮文字  | 否 | String | '确认'
title | picker标题  | 否 | String | ''
showToolbar | 显示头部  | 否 | Boolean | false
maskClick | 遮罩层是否可以点击关闭  | 否 | Boolean | false
itemHeight | 每一行的高度 | 否 | Number, String | '44px'
rowNumber | 显示多少行(建议单数) | 否 | Number | 5
appendToBody | 是否插入到body中 | 否 | Boolean | false

## 事件说明

参数 | 说明 | 是否必须 | 类型 |默认值
---- | --- | --- | --- | ---
change | 数据变化事件 | 否 | function(val) | 无
cancel | 取消选择 | 否 | function | 无
confirm | 确认选择  | 否 | function(val) | 无


[1]: http://ypimg.naice.me/vue-picker.gif
[3]: https://naihe138.github.io/vue-picker/index.html
