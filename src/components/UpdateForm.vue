<script setup>
import { ref, onMounted } from 'vue'
import store from '@/store'
import router from '@/router'
import { UPDATE_TASK } from '@/store/mutation-types'

const updateTask = () => {
  const payload = {
    id: +router.currentRoute.params.id,
    title: task.value.title,
    description: task.value.description,
  }
  store.commit(UPDATE_TASK, payload)
  router.push('/')
}

onMounted(() => {
  task.value = { ...store.getters.getTaskById(+router.currentRoute.params.id) }
})

const task = ref({
  title: '',
  description: '',
})
</script>

<template>
  <div>
    <b-form class="d-flex flex-column align-items-center">
      <b-form-group
        label="Title:"
        class="w-50 mb-3"
        valid-feedback="Great title!"
      >
        <b-form-input v-model="task.title" required></b-form-input>
      </b-form-group>
      <b-form-group
        label="Description:"
        class="w-50"
        valid-feedback="Great description!"
      >
        <b-form-textarea
          v-model="task.description"
          required
          rows="3"
          max-rows="5"
        ></b-form-textarea>
      </b-form-group>
      <div class="mt-3 d-flex justify-content-center">
        <b-button variant="primary" @click="updateTask">Save</b-button>
      </div>
    </b-form>
  </div>
</template>
