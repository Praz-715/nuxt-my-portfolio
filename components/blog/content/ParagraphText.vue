<template>
  <p class="paragraph-text">
    <slot />
  </p>
</template>

<script setup>
// No props, since we use slot for content flexibility
</script>

<style scoped>
.paragraph-text {
  font-size: 1.125rem; /* equivalent to text-lg */
  line-height: 1.75rem;
  /* color: #333; */
  margin-bottom: 1.5rem;
}
</style>
