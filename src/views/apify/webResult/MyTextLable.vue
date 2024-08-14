<!--爬虫text数据展示-->
<template>
  <div v-if="props.textValue">{{props.textValue}}</div>
  <el-tag v-else shape="round" theme="success">
    <CheckCircleFilledIcon />
    无
  </el-tag>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['textValue']);
</script>

<style scoped>

</style>
