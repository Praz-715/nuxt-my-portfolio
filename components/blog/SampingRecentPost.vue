<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

// Props
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: 'javascript:;',
  },
  action: {
    type: Object,
    default: () => ({
      route: 'javascript:;',
      color: 'success',
      label: 'Read more',
    }),
  },
})

// Gunakan useWindowSize dari @vueuse/core
const { width } = useWindowSize()

// Komputasi apakah layar desktop
const isDesktop = computed(() => width.value > 768)

// Potong judul kalau panjang (desktop only)
const displayedTitle = computed(() => {
  if (!props.title) return ''
  return props.title.length > 50 ? props.title.slice(0, 50) + '...' : props.title
})
</script>

<template>
  <div class="row g-6">
    <div class="col-3">
      <a class="d-block blur-shadow-image pt-1">
        <NuxtLink :to="`/myblog/${props.link}`">
          <img
            :src="props.image"
            :alt="props.title"
            class="img-fluid shadow border-radius-lg"
            loading="lazy"
            style="min-width: 80px; max-width: 100%; object-fit: cover;"
          />
        </NuxtLink>
      </a>
    </div>
    <div class="col-9">
      <h5>
        <NuxtLink
          :to="`/myblog/${props.link}`"
          class="text-dark font-weight-bold mt-1"
          :title="props.title"
          style="font-size: medium; display: block;"
          >
          <template v-if="isDesktop">
            {{ displayedTitle }}
          </template>
          <template v-else>
            {{ props.title }}
          </template>
        </NuxtLink>

      </h5>
    </div>
  </div>
</template>
