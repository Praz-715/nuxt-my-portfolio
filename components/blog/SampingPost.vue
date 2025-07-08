<script setup>
import { defineEmits, defineProps } from 'vue'
import allBlogs from '~/data/blog/allBlogs.js'

const blogs = ref(allBlogs.slice(0, 4))
const emit = defineEmits(['onSearch'])
const props = defineProps({
  search: {
    type: String,
    required: true,
  }
})

const updateSearch = (e) => {
  emit('onSearch')
}

</script>
<template>
  <div class="search-container">
    <input type="text" :value="search" @input="$emit('update:search', $event.target.value)" @keyup.enter="updateSearch"
      placeholder="Search blog..." class="search-input" />
    <button class="search-button" @click="updateSearch">Search</button>
  </div>
  <h3 class="mb-1">My latest blogposts</h3>

  <div v-for="blog in blogs" class="mb-3">
    <BlogSampingRecentPost :image="blog.coverImage" :title="blog.title" :description="blog.description"
      :link="blog.slug" />

  </div>
</template>
