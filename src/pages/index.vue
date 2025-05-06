<script setup lang="ts">

</script>
<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <router-link :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to page 1 built with Vue 3 and
      TypeScript.</router-link>
  </div>
</template>
