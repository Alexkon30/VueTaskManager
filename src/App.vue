<script setup>
import { onMounted } from 'vue'
import store from '@/store'
import Navigation from '@/components/Navigation.vue'

onMounted(() => {
  let tasks = localStorage.getItem('data')
  if (tasks !== null) {
    store.replaceState(JSON.parse(tasks))
  }
})
</script>

<template>
  <b-container>
    <Navigation />
    <router-view />
  </b-container>
</template>
