<script setup lang="ts">
const notesInput = reactive({
  title: '',
  note: '',
});
</script>

<template>
  <div>
    <NCard class="card">
      <input class="input" type="text" placeholder="My notes title" v-model="notesInput.title" />
      <textarea class="input" placeholder="My notes" v-model="notesInput.note" />
      <NButton>Save Note</NButton>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.input {
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5em;
  padding: 0.2rem;
  border-radius: 0.25rem;
}
</style>
