<script setup>
import Navigation from './Navigation.vue'
</script>

<template>
  <div class="mb-3">
    <header class="header bg-secondary p-3">
      <b-button v-b-toggle.sidebar-1 variant="primary">
        <b-icon-list />
      </b-button>
    </header>
    <b-sidebar id="sidebar-1" backdrop backdrop-variant="dark" no-header>
      <Navigation />
    </b-sidebar>
  </div>
</template>
