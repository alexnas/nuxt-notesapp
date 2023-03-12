<script setup lang="ts">
const authState = ref<'login' | 'singup'>('login');
const authError = ref('');
const showConfirmEmailMessage = ref(false);
const input = reactive({
  email: '',
  password: '',
});
const router = useRouter();

const { user, signUp, signIn, signOut } = useAuth();

const toggleAuthState = () => {
  if (authState.value === 'login') authState.value = 'singup';
  else authState.value = 'login';
};

const handleSubmit = async () => {
  try {
    if (authState.value === 'login') {
      await signIn({ email: input.email, password: input.password });
      router.push('/profile');
    } else {
      await signUp({ email: input.email, password: input.password });
      showConfirmEmailMessage.value = true;
    }
    input.email = '';
    input.password = '';
  } catch (err: any) {
    authError.value = err.message;
  }
};
</script>

<template>
  <div>
    <NCard class="card">
      <div v-if="!showConfirmEmailMessage">
        <h3>{{ authState }}</h3>
        <div class="input-container">
          <input type="text" placeholder="Email" v-model="input.email" />
          <input type="text" placeholder="Password" v-model="input.password" />
        </div>
        <!-- <pre>{{ user }}</pre> -->
        <NButton @click="handleSubmit">Submit</NButton>
        <NButton @click="signOut">Logout</NButton>
        <p class="error" v-if="authError">{{ authError }}</p>
        <p @click="toggleAuthState">
          {{ authState === 'login' ? "Don't have an account? Create one now" : 'Already have an account? Go ahead and log in' }}
        </p>
      </div>
      <div v-else>
        <h3>Check email for confirmation message</h3>
      </div>
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
.error {
  color: red;
}
</style>
