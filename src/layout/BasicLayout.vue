<template>
  <div id="Basiclayout">
   <a-menu  v-model:selectedKeys="current" mode="horizontal" :items="items" @click="handleMenuclick"/>
    <router-view />
  </div>
</template>
<script setup>
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import {useRouter} from "vue-router";

const router = useRouter();
// const current = ref(['Index']);
const current = ref(['googleMap']);
const items = ref([
  {
    key: 'googleMap',
    icon: () => h(MailOutlined),
    label: 'Google Map',
    title: 'Google Map',
  },
  {
    key: 'Index',
    icon: () => h(MailOutlined),
    label: 'Apify Model',
    title: 'Apify Model',
  },
  {
    key: 'webResultTaskHouse',
    icon: () => h(MailOutlined),
    label: 'WebResult TaskHouse',
    title: 'WebResult TaskHouse',
  },
  {
    key: 'webResultTask',
    icon: () => h(MailOutlined),
    label: 'WebResult Task',
    title: 'WebResult Task',
  },
  {
    key: 'webResult',
    icon: () => h(AppstoreOutlined),
    label: 'Web Result',
    title: 'Web Result',
  },
  {
    key: 'webResultUrls',
    icon: () => h(AppstoreOutlined),
    label: 'Web Result Urls',
    title: 'Web Result Urls',
  },
  {
    key: 'systemManage',
    icon: () => h(AppstoreOutlined),
    label: 'System Manage',
    title: 'System Manage',
  },
  // {
  //   key: 'sub1',
  //   icon: () => h(SettingOutlined),
  //   label: 'Navigation Three - Submenu',
  //   title: 'Navigation Three - Submenu',
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1',
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3',
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4',
  //         },
  //       ],
  //     },
  //   ],
  // },
  /*{*/
  //   key: 'alipay',
  //   label: h(
  //       'a',
  //       {
  //         href: 'https://antdv.com',
  //         target: '_blank',
  //       },
  //       'Navigation Four - Link',
  //   ),
  //   title: 'Navigation Four - Link',
  // },
]);



const handleMenuclick = (e) => {
  current.value = [e.key];
  router.push({ name: e.key });
};
</script>

<style scoped>
.Basiclayout {
  height: 100vh;
  width: 100vh;
}
</style>
