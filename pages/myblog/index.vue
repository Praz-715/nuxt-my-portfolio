<script setup>

import { useRoute } from 'nuxt/app'
import { ref, watch } from 'vue'
import allBlogs from '~/data/blog/allBlogs.js'
import image from "@/assets/img/city-profile.jpg";


useHead({
  title: 'My Blog | Teguh Prasetyo',
  meta: [
    {
      name: 'description',
      content: 'Kumpulan artikel dan panduan dari Teguh Prasetyo seputar teknologi, database, dan lainnya.'
    },
    {
      name: 'keywords',
      content: 'blog, oracle, database, linux, teguh prasetyo, dba'
    },
    {
      property: 'og:title',
      content: 'My Blog | Teguh Prasetyo'
    },
    {
      property: 'og:description',
      content: 'Temukan berbagai tutorial dan panduan menarik seputar teknologi dan database.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://teguh-prasetyo.com/myblog' // ganti sesuai domain kamu
    }
  ]
})



const route = useRoute()
const router = useRouter()

const hasSearched = ref(false)
const search = ref(route.query.s || '')
const blogs = ref([])


const blogMatchesSearch = (blog, search) => {
  const lowerSearch = search.toLowerCase()

  // Cek title, description, author
  if (
    blog.title.toLowerCase().includes(lowerSearch) ||
    blog.description.toLowerCase().includes(lowerSearch) ||
    blog.author.toLowerCase().includes(lowerSearch)
  ) {
    return true
  }

  // Cek konten (text, quote, code, heading)
  for (const item of blog.content) {
    for (const key of ['text', 'quote', 'code']) {
      if (item[key] && item[key].toLowerCase().includes(lowerSearch)) {
        return true
      }
    }
  }

  return false
}


// jalankan filter saat halaman pertama kali diakses
const filterBlogs = () => {
    blogs.value = search.value
        ? allBlogs.filter(blog => blogMatchesSearch(blog, search.value))
        : allBlogs

    hasSearched.value = !!search.value.trim()
}
filterBlogs()

// update search dan blog saat query berubah
watch(() => route.query.s, (newVal) => {
    search.value = newVal || ''
    // hasSearched.value = !!newVal

    filterBlogs()
})

// ketika klik tombol Search
const searchBlogs = () => {
    hasSearched.value = true
    router.push({ path: '/myblog', query: { s: search.value } })
}


</script>

<template>
    <div>
        <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
                <div class="col-12">
                    <BlogNavbarBlog :sticky="true" />
                </div>
            </div>
        </div>
        <BlogHeaderBlog>
            <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
                <span class="mask bg-gradient-dark opacity-8"></span>
            </div>
        </BlogHeaderBlog>
        <div class="container">
            <div class="card card-body blur shadow-blur mb-4" style="margin-top: -19rem;">
                <div class="row">
                    <div class="col-lg-9">

                        <!-- Jika sudah pencarian -->
                        <div v-if="hasSearched">
                            <p class="mb-3">
                                Showing <strong>{{ blogs.length }}</strong>
                                result{{ blogs.length > 1 ? 's' : '' }} for: <strong>{{ search }}</strong>
                            </p>
                            <div v-if="blogs.length === 0" class="alert alert-danger p-3 rounded text-white">
                                No blog found matching "<strong>{{ search }}</strong>"
                            </div>
                        </div>

                        <!-- Jika belum pencarian -->
                        <div v-else>
                            <BlogHeadingWelcome />
                        </div>
                        <div class="row" v-if="blogs.length > 0">
                            <div v-for="(blog, index) in blogs" :key="index" class="col-lg-4">
                                <BlogFilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
                                    :icon="{ component: 'precision_manufacturing', color: 'success' }"
                                    :image="blog.coverImage" :title="blog.title" :description="blog.description"
                                    :slug="blog.slug" :publishedAt="blog.publishedAt" />

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="position-sticky" style="top: 100px">
                            <BlogSampingPost v-model:search="search" @onSearch="searchBlogs" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.search-container {
    display: flex;
    border: .2px solid var(--bs-heading-color);
    border-radius: 8px;
    overflow: hidden;
    max-width: 400px;
    width: 100%;
}

.search-input {
    flex: 1;
    padding-left: 10px;
    font-size: 0.875rem;
    border: none;
    outline: none;
    background-color: #fff;
    color: var(--bs-heading-color);
}

.search-button {
    padding: 10px 20px;
    font-size: 0.875rem;
    background-color: var(--bs-heading-color);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #333;
}


.zoom-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    display: block;
}

.zoom-image:hover {
    transform: scale(1.05);
}
</style>