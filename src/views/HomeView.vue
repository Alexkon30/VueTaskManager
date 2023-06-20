<script setup>
import store from '@/store'
import TaskCard from '@/components/TaskCard.vue'
import { ACTIVE, COMPLETED } from '@/store/mutation-types'
</script>

<template>
  <div class="d-grid container gap-3">
    <div>
      <TaskCard
        v-for="task in store.getters.getTasks(ACTIVE)"
        :key="`task_${task.id}`"
        :title="task.title"
        :id="task.id"
        :description="task.description"
        :status="task.status"
      />
    </div>
    <div>
      <TaskCard
        v-for="task in store.getters.getTasks(COMPLETED)"
        :key="`task_${task.id}`"
        :title="task.title"
        :id="task.id"
        :description="task.description"
        :status="task.status"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  grid-template-columns: 1fr 1fr;
}
</style>
