<template>
  <nav>
    <ul>
      <li v-for="link in router.options.routes" :key="link.name">
        <router-link :to="{ name: link.name }">{{
          link.meta.title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #d6d6d6;
  padding: 12px;
  a {
    text-decoration: none;
    font-size: 1.25em;
  }
}
</style>
