<script setup lang="ts">
import useSupabase from '~~/composables/useSupabase';

const { supabase } = useSupabase();
</script>

<template>
  <div>
    <div class="container">
      <!-- {{ supabase }} -->
      <AuthCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
