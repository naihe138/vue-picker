English | [中文](https://github.com/naihe138/vue-picker)

A picker componemt for vue2.0
------
![vue-pick.gif][1]


## Demo

[https://naihe138.github.io/vue-picker/index.html][3]


## Install

`npm install vue-pickers --save` or `yarn add vue-pickers`

## Use

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
      label: 'The' + i + 'row',
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

## Attributes

Attribute | Description | require | Type | Default
---- | --- | --- | --- | ---
visible | show/hide picker | yes | Boolean | false
data | pickerData，colums[data1, data2]  | yes | Array | []
layer | linkage column  | no | Number | 0
defaultIndex | default index  | no | Number/Array(for more colums) | 无
cancelText | cancel text  | no | String | '取消'
confirmText | confirm text  | no | String | '确认'
title | picker title  | no | String | ''
showToolbar | show toolbar  | no | Boolean | false
maskClick | click mask  | no | Boolean | false
itemHeight | height of each row | no | Number, String | '44px'
rowNumber | how many lines to display (singular number recommended) | no | Number | 5
appendToBody | Insert into body | no | Boolean | false

## Events

Event Name | Description | require | Type | Default
---- | --- | --- | --- | ---
change | select change | no | function(val) | -
cancel | cancel button click | no | function | -
confirm | confirm button click  | no | function(val) | -


[1]: http://ypimg.naice.me/vue-picker.gif
[3]: https://naihe138.github.io/vue-picker/index.html
