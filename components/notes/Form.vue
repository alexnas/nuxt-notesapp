<script setup lang="ts">
import useAuth from '~~/composables/useAuth';
import useSupabase from '~~/composables/useSupabase';

const { supabase } = useSupabase();
const { user } = useAuth();

const notesInput = reactive({
  title: '',
  note: '',
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) {
    console.log('NO DATA', notesInput.title, notesInput.note);
    return;
  }

  console.log('POINT BEFORE NOTES DATA SAVING');

  await supabase.from('notes').insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user.value?.id,
  });

  console.log('AFTER SAVE', notesInput.title, notesInput.note, user.value?.id);

  notesInput.title = '';
  notesInput.note = '';
};
</script>

<template>
  <div>
    <NCard class="card">
      <input class="input" type="text" placeholder="My notes title" v-model="notesInput.title" />
      <textarea class="input" placeholder="My notes" v-model="notesInput.note" />
      <NButton @click="handleSubmit">Save Note</NButton>
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
