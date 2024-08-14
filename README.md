# 组件
## Google Map
https://vue3-google-map.com/getting-started/
### 1. 下载
```yaml
npm install vue3-google-map
```
### 2. 初始化
```vue
<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
</script>

<template>
  <GoogleMap
  api-key="YOUR_GOOGLE_MAPS_API_KEY"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
```
