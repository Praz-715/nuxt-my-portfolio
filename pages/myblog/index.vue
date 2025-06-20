<script setup>

import { ref } from 'vue'
// import "~/assets/css/material-kit-pro.css"


import image from "@/assets/img/city-profile.jpg";
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
import { header1Code } from "~/data/codes.js";

// let bangke = 
const breadcrumb = ref([
    { label: 'Home', route: '/' },
    { label: 'Blogs', route: '/myblog' },
    // { label: 'My Blog ', route: '/myblog' },
])


const breadcrumbWidthClass = computed(() => {
    const totalLength = breadcrumb.value.reduce((sum, item) => sum + item.label.length, 0)

    if (totalLength < 30) return 'w-lg-15'
    if (totalLength < 60) return 'w-lg-30'
    if (totalLength < 100) return 'w-lg-50'
    return 'w-lg-75'
})

import allBlogs from '~/data/blog/allBlogs.js'

const blogs = ref(allBlogs)


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
            <div class="card card-body blur shadow-blur mt-n12 mb-4">
                <!-- <div class="row">
                    <div class="col-9">

                    </div>
                    <div class="col-3">

                    </div>
                </div> -->
                <!-- <h3>{{ title }}</h3> -->
                <!-- <div class="mt-sm-1 mt-1"> -->
                <div class="row">
                    <div class="col-lg-9">
                        <div class="mb-3 w-100 w-md-50" :class="breadcrumbWidthClass">
                            <BreadCrumbs :routes="breadcrumb" />
                        </div>

                        <BlogHeadingWelcome />

                        <!-- <div class="container"> -->
                        <div class="row">
                            <div v-for="(blog, index) in blogs" :key="index" class="col-lg-4">
                                <BlogFilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
                                    :icon="{ component: 'precision_manufacturing', color: 'success' }" 
                                     :action="{
                                            route:
                                                'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
                                            label: { text: 'Read more' }
                                        }" :image="blog.coverImage" :title="blog.title" :description="blog.description" :slug="blog.slug" :publishedAt="blog.publishedAt" />
                                
                            </div>
                        </div>
                        <!-- </div> -->
                        <!-- <h1 class="mb-1">My Blog</h1>
                        <p class="">Teguh Prasetyo | 10 Juni 2025</p> -->
                        <!-- <section class="my-2" id="blog">
                            <div class="container">
                                <div class="row">
                                    <div v-for="(blog, index) in blogs" :key="index"
                                        class="col-lg-4 col-sm-6 border rounded-3 mb-2 bord">
                                        <BlogTransparentBlogCard :image="blog.coverImage" :title="blog.title"
                                            :description="blog.description" :slug="blog.slug"
                                            :publishedAt="blog.publishedAt" />
                                    </div>
                                </div>
                            </div>
                        </section> -->
                    </div>
                    <div class="col-lg-3">
                        <div class="position-sticky" style="top: 100px">
                            <div class="search-container">
                                <input type="text" class="search-input" placeholder="Search here..." />
                                <button class="search-button">Search</button>
                            </div>
                            <BlogSampingPost />
                        </div>
                    </div>

                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<style>
/* body {
    background-color: #fff;
    color: var(--bs-heading-color);
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
} */

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