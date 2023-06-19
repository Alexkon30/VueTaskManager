<script setup>
import { computed, ref } from 'vue'
import store from '@/store'
import { ADD_TASK } from '@/store/mutation-types'

const form = ref({
  title: '',
  description: '',
})

const onReset = (event) => {
  event.preventDefault()
  form.value.title = ''
  form.value.description = ''
}

const onSubmit = (event) => {
  event.preventDefault()
  store.commit(ADD_TASK, {
    title: form.value.title,
    description: form.value.description,
    id: store.getters.getMaxId + 1,
  })
}

const invalidTitle = computed(() => {
  if (form.value.title.length > 0) {
    return 'Enter at least 4 characters.'
  }
  return 'Need some title.'
})

const invalidDescription = computed(() => {
  if (form.value.description.length > 0) {
    return 'Enter at least 15 characters.'
  }
  return 'Need some description.'
})

const titleState = computed(() => {
  return form.value.title.length >= 4
})

const descriptionState = computed(() => {
  return form.value.description.length >= 15
})
</script>

<template>
  <div>
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      class="d-flex flex-column align-items-center"
    >
      <b-form-group
        id="fieldset-1"
        label="Title:"
        class="w-50 mb-3"
        valid-feedback="Great title!"
        :invalid-feedback="invalidTitle"
        :state="titleState"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          :state="titleState"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Description:"
        class="w-50"
        valid-feedback="Great description!"
        :invalid-feedback="invalidDescription"
        :state="descriptionState"
      >
        <b-form-textarea
          v-model="form.description"
          required
          rows="3"
          max-rows="5"
          :state="descriptionState"
        ></b-form-textarea>
      </b-form-group>
      <div class="mt-3 d-flex justify-content-around buttons">
        <b-button type="submit" variant="primary">Create</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<style>
@media (max-width: 767.98px) {
  .buttons {
    width: 50%;
  }
}

@media (min-width: 767.99px) {
  .buttons {
    width: 25%;
  }
}
</style>
