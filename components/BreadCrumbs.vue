<script setup>
import { defineProps } from 'vue'
import { NuxtLink } from '#components'

defineProps({
  routes: {
    type: Array,
    required: true,
    default: () => [
      {
        route: "/",
        label: "",
      },
    ],
  },
});
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="({ route, label }, index) of routes"
        :key="index"
        class="breadcrumb-item"
      >
        <NuxtLink v-if="index !== routes.length - 1" :to="route">
          {{ label }}
        </NuxtLink>
        <template v-else>{{ label }}</template>
      </li>
    </ol>
  </nav>
</template>
