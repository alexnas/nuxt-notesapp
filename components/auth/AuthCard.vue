<script setup lang="ts">
const authState = ref<'login' | 'singup'>('login');
const input = reactive({
  email: '',
  password: '',
});

const { user, signUp, signIn, signOut } = useAuth();

const toggleAuthState = () => {
  if (authState.value === 'login') authState.value = 'singup';
  else authState.value = 'login';
};

const handleSubmit = () => {
  if (authState.value === 'login') {
    signIn({ email: input.email, password: input.password });
  } else {
    signUp({ email: input.email, password: input.password });
  }
  input.email = '';
  input.password = '';
};
</script>

<template>
  <div>
    <NCard class="card">
      <h3>{{ authState }}</h3>
      <div class="input-container">
        <input type="text" placeholder="Email" v-model="input.email" />
        <input type="text" placeholder="Password" v-model="input.password" />
      </div>
      <pre>
      {{ user }}
      </pre>
      <NButton @click="handleSubmit">Submit</NButton>
      <NButton @click="signOut">Logout</NButton>
      <p @click="toggleAuthState">
        {{ authState === 'login' ? "Don't have an account? Create one now" : 'Already have an account? Go ahead and log in' }}
      </p>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 2rem;
  width: 25rem;
}
.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}
p {
  color: blue;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 0.3rem;
}
</style>
