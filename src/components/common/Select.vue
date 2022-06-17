<!--
 * @Description: 
 * @Author: songlin
 * @Date: 2022-06-15 15:28:54
 * @LastEditTime: 2022-06-17 16:44:24
 * @LastEditors: songlin
-->
<template>
 <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  {{value}}
  <button ref="btnRef" @click="onclick" >{{value}}</button>
  <slot></slot>  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '../../util/common/fetch';
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
onMounted(()=>{
  console.log('select mounted');
})
const btnRef = ref(null);
function onclick(e){
  console.log(e);
  console.log(btnRef.value);
}
const res = useFetch('https://developer.mozilla.org/api/v1/whoami');
console.log(res);
</script>

<style lang="scss" scoped></style>
