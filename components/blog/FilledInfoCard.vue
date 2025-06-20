<script setup>
defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "light",
          "dark",
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "sucess",
        background: "bg-gray-100",
      };
    },
  },
  icon: {
    type: Object,
    required: true,
    component: String,
    color: String,
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
    required: true,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: String,
    default: () => new Date().toISOString(),
  },
});



function convertTanggalIndo(inputDate) {
  const bulanIndo = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const [tahun, bulan, tanggal] = inputDate.split("-");
  return `${tanggal} ${bulanIndo[parseInt(bulan, 10) - 1]} ${tahun}`;
}
</script>
<template>
  <div class="info-horizontal border-radius-xl d-block" :class="`${color.background ?? ''}`">

    <NuxtLink :to="`/myblog/${slug}`" class="blur-shadow-image">

      <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg zoom-image" loading="lazy" />
    </NuxtLink>
    <NuxtLink :to="`/myblog/${slug}`" class="text-dark font-weight-bold">
      <h5 :class="`text-${color.text ?? ''} my-3`">{{ title }}</h5>
    </NuxtLink>
    <p>By <span>
        <NuxtLink to="/">Teguh Prasetyo</NuxtLink>
      </span> | {{ convertTanggalIndo(publishedAt) }} </p>
    <p class="text-lg mb-0">
      {{ description }}
    </p>
    <!-- <i class="material-icons text-3xl" :class="`text-${icon.color}`">{{
      icon.component
    }}</i>
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 :class="`text-${color.text ?? ''}`">{{ title }}</h5>
      <p :class="`text-${color.text ?? ''}`">
        {{ description }}
      </p>
      <a :href="action.route" class="icon-move-right" :class="`text-${action.label.color ?? 'success'}`">
        {{ action.label.text }}
        <i class="fas fa-arrow-right text-sm ms-1"></i>
      </a>
    </div> -->

    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt impedit doloremque dicta error nostrum atque modi dolores magnam, voluptatibus ex, nam illo ullam cupiditate amet iste quidem quasi architecto!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt impedit doloremque dicta error nostrum atque modi dolores magnam, voluptatibus ex, nam illo ullam cupiditate amet iste quidem quasi architecto!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sunt impedit doloremque dicta error nostrum atque modi dolores magnam, voluptatibus ex, nam illo ullam cupiditate amet iste quidem quasi architecto!</p> -->
  </div>
</template>
