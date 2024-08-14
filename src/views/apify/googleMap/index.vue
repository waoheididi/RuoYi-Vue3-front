<template>
  <div style="width: 100%;height: 100%; position: relative;">
    <div style="position: absolute; top: 0px; right: 10px; z-index: 99;opacity: 0.9;">
      <el-row>
        <div class="flex gap-4 mb-4">
          <el-input
              v-model="XData"
              style="width: 140px"
              placeholder="圆心的经度数值"
              clearable
          />
          <el-input
              v-model="YData"
              style="width: 140px"
              placeholder="圆心的纬度数值"
              clearable
          />
          <el-input
              v-model="RData"
              style="width: 140px"
              placeholder="半径数值(米)"
              clearable
          />
          <el-button v-if="!isHasPoint" type="primary" @click="onPoint">定位</el-button>
          <el-button v-if="isHasPoint" type="danger" @click="onClosePoint">取消</el-button>
        </div>
      </el-row>
    </div>
    <div id="map" style="z-index: 98"></div>
    <div style="position: absolute; top: 10px; right: 10px; z-index: 99; opacity: 0.9;">
    <el-dialog
      v-model="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
      :append-to-body="true"
      :style="{ position: 'absolute', right: '10px', margin: '0' }"
      @close="onDialogClose"
    >
      <p>bugInfoId: {{ selectedPoint.bugInfoId }}</p>
      <p>
        <span style="font-weight: bold">经度:</span>{{ selectedPoint.lng }},
        <span style="font-weight: bold">纬度:</span>{{ selectedPoint.lat }}
      </p>
    </el-dialog>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { googleMapPoints } from "../../../api/apify/bugInfo.js";

const XData = ref('');  // 经度
const YData = ref('');  // 纬度
const RData = ref('');  // 半径(米)

let circle; // 用于存储圆圈对象
const activeMarkerId = ref(null); //被点击的id
const isHasPoint = ref(false);    // 是否已经定位

// 点数组
const pointsList = ref([]);
const markers = ref([]); // 保存所有标记
const dialogVisible = ref(false); // 是否显示对话框
const selectedPoint = ref({ lat: null, lng: null, bugInfoId: null }); // 选中点的信息

// 定位方法
function onPoint() {
  isHasPoint.value = true
  drawCircle(XData.value, YData.value, RData.value)
}

// 取消定位
function onClosePoint() {
  XData.value = '';
  YData.value = '';
  RData.value = '';
  isHasPoint.value = false;
  if (circle) {
    map.remove(circle);
    circle = null; // 清除圆圈引用
  }
}

// 画出圆心
function drawCircle(X,Y,R) {
  // 如果已经存在圆圈，先移除它
  if (circle) {
    map.remove(circle);
  }
  const userPosition = new AMap.LngLat(X, Y);
  addMarker(userPosition, 'b','默认', '当前位置');
  circle = new AMap.Circle({
    center: new AMap.LngLat(X, Y),// 圆心位置
    radius: R, //半径
    strokeColor: "#ff333a", //线颜色
    strokeOpacity: 0.7, //线透明度
    strokeWeight: 3,    //线宽
    fillColor: "#ef6666", //填充色
    fillOpacity: 0.5//填充透明度
  });
  circle.setMap(map);

// 将地图中心设置为当前点击的标记位置
  map.setCenter(new AMap.LngLat(X, Y));
  // 增加地图的缩放级别
  map.setZoom(14); // 你可以根据需要调整这个值
}

// 创建一个函数来加载 Google Maps API
const loadGoogleMapsAPI = (callback) => {
  if (window.google) {
    callback(window.google);
  } else {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCcnykNz8vZkOCK0M7nAJ4mjVZKoe9aiLo&v=weekly";
    script.async = true;
    script.onload = () => callback(window.google);
    script.onerror = () => console.error('Google Maps API 加载失败');
    document.head.appendChild(script);
  }
};

/**
 * 获取初始化地图
 *
 * @param query
 */
function initBugInfoList(query) {
  return googleMapPoints(query).then(res => {
    pointsList.value = res.data;
  }).catch(error => console.error('数据加载失败：', error));
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => reject(error)
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

onMounted(() => {
  Promise.all([initBugInfoList(null), getUserLocation()])
    .then(([_, userLocation]) => {
      loadGoogleMapsAPI((google) => {
        // 请求所需的 Google Maps 库
        google.maps.importLibrary('maps').then(MapLib => {
          const { Map } = MapLib;

          google.maps.importLibrary('marker').then(MarkerLib => {
            const { AdvancedMarkerElement } = MarkerLib;

            // 初始化地图
            const map = new Map(document.getElementById('map'), {
              center: userLocation, // 使用用户的当前位置作为地图中心
              zoom: 10,
              mapId: '4504f8b37365c3d0',
            });

            // 创建用户当前位置的蓝色图标标记
            const userMarker = new google.maps.Marker({
              position: userLocation,
              map: map,
              title: '我的位置',
              icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png' // 蓝色图标URL
            });

            // 保存到 markers 数组
            markers.value.push(userMarker);

            // 创建并在地图上放置多个红色图标标记
            pointsList.value.forEach(point => {
              const marker = new google.maps.Marker({
                position: { lat: point.location.lat, lng: point.location.lng },
                map: map,
                title: '其他位置',
                icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png' // 红色图标URL
              });

              // 保存 bugInfoId 到标记对象
              marker.bugInfoId = point.bugInfoId;

              // 添加到 markers 数组
              markers.value.push(marker);

              // 添加点击事件
              marker.addListener('click', () => {
                // 将所有标记设为红色
                markers.value.forEach(m => {
                  m.setIcon('https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png');
                });

                // 将当前点击的标记设为蓝色
                marker.setIcon('https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png');

                // 设置地图中心为点击的标记位置
                map.setCenter(marker.getPosition());

                // 显示点击标记的信息
                selectedPoint.value = {
                  bugInfoId: marker.bugInfoId,
                  lng: marker.getPosition().lng(),
                  lat: marker.getPosition().lat()
                };
                dialogVisible.value = true;
              });
            });

            // 添加用户标记的点击事件
            userMarker.addListener('click', () => {
              // 将所有标记设为红色
              markers.value.forEach(m => {
                m.setIcon('https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png');
              });

              // 将用户标记设为蓝色
              userMarker.setIcon('https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png');

              // 设置地图中心为用户标记位置
              map.setCenter(userMarker.getPosition());

              // 显示用户标记的信息
              selectedPoint.value = {
                bugInfoId: '我的位置',
                lng: userMarker.getPosition().lng(),
                lat: userMarker.getPosition().lat()
              };
              dialogVisible.value = true;
            });
          }).catch(error => console.error('Marker library 加载失败：', error));
        }).catch(error => console.error('Maps library 加载失败：', error));
      });
    })
    .catch(error => console.error('获取用户位置失败：', error));
});
</script>

<style scoped>
/* 设置地图的高度 */
#map {
  height: 100vh; /* 视口高度的 100% */
}
</style>
