中文 | [English](https://github.com/naihe138/vue-picker/blob/master/README-en.md)

A picker componemt for vue2.0

------

走了一圈 `github` 都没有找到自己想要的移动端的 `vue-picker`的组件，于是自己就下手，撸了一个出来，感受下效果图。


![vue-pick.gif][1]


#### Demo

[http://gitblog.naice.me/vue-picker/example/index.html#/][3]


#### Install

`npm install vue-pickers --save` or `yarn add vue-pickers`


#### 使用

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
link | 是否开启联动数据  | 否 | Boolean | false
defaultIndex | 默认显示的index  | 否 | Number/[](多列用数组) | 无
cancelText | 取消按钮文字  | 否 | String | '取消'
confirmText | 去确认按钮文字  | 否 | String | '确认'
title | picker标题  | 否 | String | ''
showToolbar | 显示头部  | 否 | Boolean | false
maskClick | 遮罩层是否可以点击关闭  | 否 | Boolean | false


## 事件说明

参数 | 说明 | 是否必须 | 类型 |默认值
---- | --- | --- | --- | ---
change | 数据变化事件 | 否 | function(val) | 无
cancel | 取消选择 | 否 | function | 无
confirm | 确认选择  | 否 | function(val) | 无


[1]: http://ypimg.naice.me/vue-picker.gif
[3]: http://gitblog.naice.me/vue-picker/index.html#/
