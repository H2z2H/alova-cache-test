<script setup>
import {getWeather, } from "@/apis/methods/demo.js";
import {useRequest} from "alova/client";

const { send, data } = useRequest(() => getWeather({name:'北京市'}), {
  immediate: true,
})

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
