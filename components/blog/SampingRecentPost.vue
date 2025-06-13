<script setup>
defineProps({
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
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Read more",
    }),
  },
});
</script>
<template>
  <div class="row g-6">
    <div class="col-3">
      <a class="d-block blur-shadow-image pt-1">
        <NuxtLink to="/myblog">

          <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy"
            style="min-width: 80px; max-width: 100%; object-fit: cover;" />
        </NuxtLink>
      </a>
    </div>
    <div class="col-9">
      <h5>
        <a :href="action.route" class="text-dark font-weight-bold" :title="title"   style="font-size: medium; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
          <!-- {{ title.length > 16 ? title.slice(0, 20) + '...' : title }} -->
            {{ title }}
          </a>
      </h5>
      <a :href="action.route" class="text-sm icon-move-right" :class="`text-${action.color}`">{{ action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a>
    </div>
  </div>
</template>
