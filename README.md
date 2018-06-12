# vue-picker
a picker componemt for vue2.0

------
走了一圈 `github` 都没有找到自己想要的移动端的 `vue-picker`的组件，于是自己就下手，撸了一个出来，感受下效果图。
![vue-pick.gif][1]


#### demo

[demo 地址：http://gitblog.naice.me/vue-picker/example/index.html][3]


#### install

`npm install vue-pickers --save`


#### 使用

````javascript

<template>
  <div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"></vue-pickers>
  </div>
</template>

<script>
import vuePickers from 'vue-pickers'
export default {
  components: {
    vuePickers
  },
  data() {
    return {
      show: false,
      columns: 1,
      defaultData: [
        {
          text: 1999,
          value: 1999
        }
      ],
      pickData: {
        // 第一列的数据结构
        data1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          }
        ]
      }
    }
  },
  methods: {
    close() {
      this.show = false
    },
    confirmFn(val) {
      this.show = false
      this.defaultData = [val.select1]
    },
    toShow() {
      this.show = true
    }
  }
}
</script>
````

### 属性参数说明

参数 | 说明 | 是否必须 | 类型 |默认值
---- | --- | --- | --- | ---
show | 显示隐藏picker | 是 | Boolean | false
columns | 列数设置  | 是 | Number | 1 
defaultData | 默认显示设置  | 否 | Array<object> | []
link | 是否开启联动数据  | 否 | Boolean | false
selectData | 数据设置，分别对应列（data1: [], data2: [], data3: [],）  | 是 | Object | {}

### 事件说明

参数 | 说明 | 是否必须 | 类型 |默认值
---- | --- | --- | --- | ---
cancel | 取消选择 | 否 | function | 无
confirm | 确认选择  | 否 | function(val) | 无


[1]: http://img.store.naice.me/vue-picker22.gif
[3]: http://gitblog.naice.me/vue-picker/example/index.html
