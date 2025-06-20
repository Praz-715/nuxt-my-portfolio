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
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      
    </div>
    <div class="card-body px-0">
      <h5>
        <NuxtLink :to="`/myblog/${slug}`" class="text-dark font-weight-bold">
          {{ title }}
          </NuxtLink> 

      </h5>
      <p>By <span>
          <NuxtLink to="/">Teguh Prasetyo</NuxtLink>
        </span> | {{ convertTanggalIndo(publishedAt) }} </p>
      <p class="text-lg mb-0">
        {{ description }}
      </p>
    </div>
  </div>
</template>
