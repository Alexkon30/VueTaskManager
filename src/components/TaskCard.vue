<script setup>
import { defineProps } from 'vue'
defineProps(['title', 'description', 'id', 'status'])
</script>

<template>
  <router-link :to="`/task/${id}`">
    <b-card :title="title">
      <b-card-text>
        {{ description }}
      </b-card-text>
      <b-card-text>
        {{ status }}
      </b-card-text>
    </b-card>
  </router-link>
</template>
