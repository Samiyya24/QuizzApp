<template>
  <div>
    <h1 class="text-3xl">Product detailes id: {{ route.params.id }}</h1>
    <div class="flex gap-5">
      <button @click="handleClick">Home</button>
      <button @click="backPage">Back</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
console.log("route", route);

const handleClick = () => {
  router.push("/");
};

const backPage = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped></style>
