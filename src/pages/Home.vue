<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<template>
  <div>
    <Navbar />
    <h1>Home Page</h1>
    <router-link class="border text-red-400" to="/about">About</router-link>
  </div>
</template>

<style lang="scss" scoped></style>
