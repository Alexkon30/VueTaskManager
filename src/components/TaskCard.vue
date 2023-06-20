<script setup>
import { defineProps, computed } from 'vue'
import store from '@/store'
import {
  UPDATE_TASK_STATUS,
  COMPLETED,
  ACTIVE,
  DELETE_TASK,
} from '@/store/mutation-types'

const props = defineProps(['title', 'description', 'id', 'status'])

const updateTaskStatus = (event, id, status) => {
  event.preventDefault()
  store.commit(UPDATE_TASK_STATUS, { id, status })
}

const deleteTask = (event, id) => {
  event.preventDefault()
  store.commit(DELETE_TASK, id)
}

const isCompleted = computed(() => {
  return props.status === COMPLETED
})

const isActive = computed(() => {
  return props.status === ACTIVE
})
</script>

<template>
  <b-card
    :title="title"
    class="position-relative mb-2"
    :class="{ completed: isCompleted, active: isActive }"
  >
    <router-link :to="`/task/${id}`">
      <b-card-text>
        {{ description }}
      </b-card-text>
      <b-card-text> Status: {{ status }} </b-card-text>
    </router-link>
    <div class="mt-3">
      <b-button
        variant="success"
        @click="updateTaskStatus($event, id, COMPLETED)"
        v-if="isActive"
      >
        Complete
      </b-button>
      <b-button
        @click="updateTaskStatus($event, id, ACTIVE)"
        v-if="isCompleted"
      >
        Return
      </b-button>
    </div>
    <span class="delete position-absolute p-1" @click="deleteTask($event, id)">
      <b-icon icon="x-lg"></b-icon>
    </span>
  </b-card>
</template>

<style scoped>
button {
  margin-right: 1rem;
}

.delete {
  top: 0.5rem;
  right: 1rem;

  &:hover {
    color: var(--bs-danger);
    transform: scale(1.2);
    cursor: pointer;
  }
}

.card {
  &:hover {
    background-color: var(--bs-gray-300);
  }

  &.completed {
    background-color: var(--bs-success-bg-subtle);
  }

  &.active {
    background-color: var(--bs-primary-bg-subtle);
  }
}
</style>
