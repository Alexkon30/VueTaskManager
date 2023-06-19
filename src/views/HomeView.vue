<script setup>
import store from '@/store'
import TaskCard from '@/components/TaskCard.vue'
</script>

<template>
  <div>
    <TaskCard
      v-for="task in store.getters.getTasks"
      :key="`task_${task.id}`"
      :title="task.title"
      :id="task.id"
      :description="task.description"
      :status="task.status"
    />
  </div>
</template>
