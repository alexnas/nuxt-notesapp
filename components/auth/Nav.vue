<script lang="ts" setup>
import useAuth from '~~/composables/useAuth';

const { signOut, isLoggedIn } = useAuth();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="logout" @click="signOut">Logout</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: rgb(8, 50, 53);
  height: 10vh;
}
ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 2rem;
}
li {
  color: white;
  margin-right: 1rem;
}
.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>
