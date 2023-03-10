<template>
  <div>
    <NCard class="card">
      <h3>Login</h3>
      <div class="input-container">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </div>
      <NButton>Login</NButton>
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
</style>
