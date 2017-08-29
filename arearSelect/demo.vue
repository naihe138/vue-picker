/**
* @file
* @author 何文林
* @date 2017/8/29
*/
<template>
	<div id="">
		<div>
			<p class="btn" @click="example1">单列picker</p>
			<p class="btn" @click="example2">双列 picker</p>
			<p class="btn" @click="example5">三列 picker</p>
			<p class="btn" @click="example3">联动picker</p>
			<p class="btn" @click="example4">地区联动picker</p>
			<p style="padding: 30px 0">选择的结果：<span style="color: red;">{{selectStr}}</span></p>
		</div>
		<vue-pickers :show="show1"
								:selectData="pickData1"
								v-on:cancel="close"
								v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show2"
								 :selectData="pickData4"
								 v-on:cancel="close"
								 v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show3"
								 :selectData="pickData2"
								 v-on:cancel="close"
								 v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show4"
								 :selectData="pickData3"
								 v-on:cancel="close"
								 v-on:confirm="confirmFn"></vue-pickers>
		<vue-pickers :show="show5"
								 :selectData="pickData5"
								 v-on:cancel="close"
								 v-on:confirm="confirmFn"></vue-pickers>
	</div>
</template>

<script>
  import VuePickers from 'vue-pickers'
//  import VuePickers from './components/allSelect.vue'
  import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
  export default{
    components: {
      VuePickers
    },
    data () {
      return {
        selectStr: '',
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        pickData1: {
          columns: 1,
          pData1: [
            {
              text: 1999,
              value: 1999
            },
            {
              text: 2001,
              value: 2001
            },
            {
              text: 2002,
              value: 2002
            },
            {
              text: 2003,
              value: 2003
            },
            {
              text: 2004,
              value: 2004
            },
            {
              text: 2005,
              value: 2005
            },
          ]
        },
        pickData2: {
          columns: 2,
          link: true,
          pData1: [
            {
              text: '数码',
              value: 1999
            },
            {
              text: '水果',
              value: 2001
            },
            {
              text: '衣服',
              value: 2002
            }
          ],
          pData2: {
            '1999': [
              {
                text: '相机',
                value: 101
              },
              {
                text: '手机',
                value: 102
              },
              {
                text: '音箱',
                value: 103
              }
            ],
            '2001': [
              {
                text: '苹果',
                value: 104
              },
              {
                text: '香蕉',
                value: 105
              },
              {
                text: '西红柿',
                value: 106
              }
            ],
            '2002': [
              {
                text: '衬衫',
                value: 107
              },
              {
                text: '短裤',
                value: 108
              },
              {
                text: '上衣',
                value: 109
              }
            ]
          }
        },
        pickData3: {
          columns: 3,
          link: true,
          pData1: provs_data,
          pData2: citys_data,
          pData3: dists_data,
        },
        pickData4: {
          columns: 2,
          pData1: [
            {
              text: '上午',
              value: 1999
            },
            {
              text: '下午',
              value: 2001
            }
          ],
          pData2: [
            {
              text: '1',
              value: 1
            },
            {
              text: '2',
              value: 2
            },
            {
              text: '3',
              value: 3
            },
            {
              text: '4',
              value: 4
            },
            {
              text: '5',
              value: 5
            },
            {
              text: '6',
              value: 6
            }
          ]
        },
        pickData5: {
          columns: 3,
          pData1: [
            {
              text: '1999年',
              value: 1999
            },
            {
              text: '2001年',
              value: 2001
            },
            {
              text: '2002年',
              value: 2002
            },
            {
              text: '2003年',
              value: 2003
            },
            {
              text: '2004年',
              value: 2004
            },
            {
              text: '2005年',
              value: 2005
            },
          ],
          pData2: [
            {
              text: '01月',
              value: 1
            },
            {
              text: '02月',
              value: 2
            },
            {
              text: '03月',
              value: 3
            },
            {
              text: '04月',
              value: 4
            },
            {
              text: '05月',
              value: 5
            },
            {
              text: '06月',
              value: 6
            },
          ],
          pData3: [
            {
              text: '01',
              value: 1
            },
            {
              text: '02',
              value: 2
            },
            {
              text: '03',
              value: 3
            },
            {
              text: '04',
              value: 4
            },
            {
              text: '05',
              value: 5
            },
            {
              text: '06',
              value: 6
            },
          ]
        }
      }
    },
    methods: {
      close() {
        this.show1 = false
        this.show2 = false
        this.show3 = false
        this.show4 = false
        this.show5 = false
      },
      confirmFn(data) {
				this.selectStr = data.select1.text
				console.log(data)
				if (data.select2) {
          this.selectStr +=  '-' + data.select2.text
				}
        if (data.select3) {
          this.selectStr += '-' + data.select3.text
        }
        this.close()
      },
      example1() {
        this.show1 = true
			},
      example2() {
        this.show2 = true
      },
      example3() {
        this.show3 = true
      },
      example4() {
        this.show4 = true
      },
      example5() {
        this.show5 = true
			}
    }
  }
</script>

<style scoped>
	.btn{
		width: 80%;
		height: 34px;
		line-height: 34px;
		text-align: center;
		color: #fff;
		background: #0575f2;
		margin: 10px auto;
		border-radius: 4px;
	}
</style>
