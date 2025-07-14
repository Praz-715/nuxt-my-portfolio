<script setup>

import { useRoute, navigateTo } from 'nuxt/app'
import { ref, onBeforeMount, computed, watch } from 'vue'
import allBlogs from '~/data/blog/allBlogs.js'
import image from "@/assets/img/city-profile.jpg";



const route = useRoute()
const router = useRouter()

const blogs = ref(allBlogs)
const slug = route.params.slug

// cek apakah slug valid
onBeforeMount(() => {
    const validSlugs = blogs.value.map(blog => blog.slug)
    if (!validSlugs.includes(slug)) {
        navigateTo('/404', { replace: true })
    }
})

// ambil data blog jika valid
const blog = blogs.value.find(blog => blog.slug === slug)


// let bangke = 
const breadcrumb = ref([
    { label: 'Home', route: '/' },
    { label: 'Blogs', route: '/myblog' },
    { label: blog.title, route: `/myblog/${slug}` },
])

const breadcrumbWidthClass = computed(() => {
    const totalLength = breadcrumb.value.reduce((sum, item) => sum + item.label.length, 0)

    if (totalLength < 30) return 'w-lg-15'
    if (totalLength < 60) return 'w-lg-30'
    if (totalLength < 100) return 'w-lg-50'
    return 'w-lg-75'
})

// 💡 Search State
const search = ref(route.query.s || '')

// Search Handler
const searchBlogs = () => {
    router.push({ path: '/myblog', query: { s: search.value } })
}

// Watch query change
watch(() => route.query.s, (newVal) => {
    search.value = newVal || ''
})


function convertTanggalIndo(inputDate) {
    const bulanIndo = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const [tahun, bulan, tanggal] = inputDate.split("-");
    return `${tanggal} ${bulanIndo[parseInt(bulan, 10) - 1]} ${tahun}`;
}

if (blog) {
    useSeoMeta({
        title: `${blog.title} | Teguh Prasetyo`,
        ogTitle: `${blog.title} | Teguh Prasetyo`,
        description: `blog.description || blog.content.find(c => c.text)?.text?.slice(0, 160)`,
        ogDescription: `blog.description || blog.content.find(c => c.text)?.text?.slice(0, 160)`,
        ogImage: `https://teguh-prasetyo.com/images/${blog.slug}.jpg`,
        ogUrl: `https://teguh-prasetyo.com/myblog/${blog.slug}`,
        ogImageType: 'image/jpeg',
        twitterImage: blog.coverImage,
        // twitterCard: 'summary_large_image',
    })
    //   useHead({
    //     title: `${blog.title} | Teguh Prasetyo`,
    //     meta: [
    //       {
    //         name: 'description',
    //         content: blog.description || blog.content.find(c => c.text)?.text?.slice(0, 160)
    //       },
    //       {
    //         name: 'keywords',
    //         content: [blog.title, blog.author, 'oracle', 'linux', 'database'].join(', ')
    //       },
    //       {
    //         property: 'og:title',
    //         content: blog.title
    //       },
    //       {
    //         property: 'og:description',
    //         content: blog.description || blog.content.find(c => c.text)?.text?.slice(0, 160)
    //       },
    //       {
    //         property: 'og:type',
    //         content: 'article'
    //       },
    //       {
    //         property: 'og:image',
    //         content: blog.coverImage
    //       },
    //       {
    //         property: 'og:url',
    //         content: `https://teguh-prasetyo.com/myblog/${blog.slug}` // sesuaikan
    //       }
    //     ]
    //   })
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
                <!-- <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="mb-3 w-100 w-md-50" :class="breadcrumbWidthClass">
                            <BreadCrumbs :routes="breadcrumb" />
                        </div>
                    </div>
                </div> -->

                <!-- <h3>{{ title }}</h3> -->
                <!-- <div class="mt-sm-1 mt-1"> -->
                <div class="row">
                    <div class="col-lg-9">
                        <h1 class="mb-1">{{ blog.title }}</h1>
                        <p class="">By <span>
                                <NuxtLink to="/">Teguh Prasetyo</NuxtLink>
                            </span> | | {{ convertTanggalIndo(blog.publishedAt) }}</p>
                        <div class="mb-4">
                            <img class="rounded  w-100 w-md-75 w-lg-80" :src="blog.coverImage" alt=""
                                style="object-fit: cover;" loading="lazy" />
                        </div>
                        <BlogRenderer :content="blog.content" />
                        <!-- <BlogContentCustomQuote quote="Hidup adalah perjuangan, bukan pemberian." />
                        <BlogContentParagraphText>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere,
                            laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </BlogContentParagraphText>

                        <BlogContentDataTable :thead="['#', 'Name', 'Job Position', 'Since', 'Salary']" :tbody="[
                            { id: 1, name: 'Andrew Mike', job: 'Develop', since: '2013', salary: '€ 99,225' },
                            { id: 2, name: 'John Doe', job: 'Design', since: '2012', salary: '€ 89,241' },
                            { id: 3, name: 'Alex Mike', job: 'Design', since: '2010', salary: '€ 92,144' }
                        ]" /> -->






                        <!-- <p class="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed?
                            Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit!
                            Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                        </p>
                        <p class="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed?
                            Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit!
                            Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                        </p>

                        <BlogContentViewCode title="Header 1" :code="coba_kode_python" lang="python" id="header-1" />
                        <p class="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed?
                            Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit!
                            Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                        </p>
                        <p class="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed?
                            Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit!
                            Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                        </p>
                        <p class="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt
                            quod repellat sed?
                            Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit!
                            Consectetur consequatur voluptates distinctio?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                        </p> -->
                    </div>
                    <div class="col-lg-3">
                        <div class="position-sticky" style="top: 100px">
                            <BlogSampingPost v-model:search="search" @onSearch="searchBlogs" />
                        </div>
                    </div>

                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
