<template>
  <el-tag shape="round" theme="success">
    <CheckCircleFilledIcon />
    {{props.tagValue}}
  </el-tag>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['tagValue']);
</script>

<style scoped>

</style>
