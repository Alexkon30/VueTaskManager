<template>
  <b-nav vertical>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/add" class="nav-link">Create new task</router-link>
  </b-nav>
</template>

<style>
.nav-link:hover {
  background-color: var(--bs-secondary);
}
</style>
