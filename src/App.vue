<script setup>
import {getWeather, } from "@/apis/methods/demo.js";
import {useRequest} from "alova/client";

const { send, data } = useRequest(() => getWeather({name:'北京市'}), {
  immediate: true,
})
// 请求完成后点击change按钮改变data的某个属性后再次send请求，会发现缓存被修改，缓存日志也有体现
function onchange() {
  data.value.city = '123'
}
</script>

<template>
  <div>
    {{data}}
  </div>
  <div>
    <button @click="send">Send</button>
    <button @click="onchange">change</button>
  </div>
</template>

<style scoped>

</style>
