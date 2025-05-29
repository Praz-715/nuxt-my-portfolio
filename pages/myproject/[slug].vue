<script setup>
import { useRoute, navigateTo } from 'nuxt/app'
import projectData from '~/data/myProjects.js'
import image from "@/assets/img/city-profile.jpg";

const route = useRoute()
const myProjects = projectData.map(project => project.items).flat()
const slug = route.params.slug
// Cari berdasarkan slug
const project = myProjects.find(p => p.slug === slug)

// Jika slug tidak ditemukan, redirect ke halaman 404
if (!project) {
  await navigateTo('/404', { replace: true })
}
</script>
<template>
  <div v-if="project">
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <ProjectNavbarProject :title="project.title" :sticky="true" />
        </div>
      </div>
    </div>
    <ProjectHeaderProject>
      <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
        <span class="mask bg-gradient-dark opacity-8"></span>
      </div>
    </ProjectHeaderProject>
    <!-- <div class="container"> -->
      <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n9 mb-4">
        <ProjectProfileProject :project="project" />
        <!-- <Posts /> -->
      <!-- </div> -->
    </div>

    <!-- <h1>{{ project.title }}</h1>
    <p>{{ project.subtitle }}</p> -->
  </div>
</template>
