<script setup>
import { onMounted } from 'vue'
import store from './store'
import Sidebar from './components/SideBar.vue'

onMounted(() => {
  let tasks = localStorage.getItem('data')
  if (tasks !== null) {
    store.replaceState(JSON.parse(tasks))
  }
})
</script>

<template>
  <b-container>
    <Sidebar />
    <router-view />
  </b-container>
</template>
