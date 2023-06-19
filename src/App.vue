<script setup>
import { onMounted } from 'vue'
import store from './store'
import Sidebar from './components/SideBar.vue'
import { SET_TASKS } from './store/mutation-types'

onMounted(() => {
  let tasks = localStorage.getItem('tasks')
  if (tasks !== null) {
    tasks = JSON.parse(tasks)
    store.commit(SET_TASKS, tasks)
  }
})
</script>

<template>
  <b-container>
    <Sidebar />
    <router-view />
  </b-container>
</template>
