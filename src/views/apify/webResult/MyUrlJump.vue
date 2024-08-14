<template>
  <a :href="hrefUrl" style="color:#1c84c6;" target="_blank">{{hrefUrl}}</a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['hrefUrl']);
</script>

<style scoped>

</style>
