<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesForm />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}
h3 {
  font-size: 2rem;
}
</style>
