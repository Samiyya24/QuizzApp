<script setup>
import { reactive } from "vue";

const products = reactive([
  { id: 1, title: "product 1" },
  { id: 2, title: "product 2" },
  { id: 3, title: "product 3" },
  { id: 4, title: "product 4" },
  { id: 5, title: "product 5" },
]);
</script>
<template>
  <div class="container mt-5">
    <div class="flex text-green-500 gap-3">
      <router-link
        class="border rounded-md p-2"
        :to="{ name: 'product_detailes', params: { id: item.id } }"
        v-for="item in products"
        :key="item.id">{{ item.title }}</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
