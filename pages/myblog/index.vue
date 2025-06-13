<script setup>

import { ref } from 'vue'
import image from "@/assets/img/city-profile.jpg";
import post1 from "@/assets/img/examples/testimonial-6-2.jpg";
import { header1Code } from "~/data/codes.js";

// let bangke = 
const breadcrumb = ref([
    { label: 'Home', route: '/' },
    { label: 'Blog', route: '/myblog' },
    { label: 'My Blog', route: '/myblog' },
])

const title = ref('My Blog')


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
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <div class="mb-3 w-100 w-md-50 w-lg-25">
                            <BreadCrumbs :routes="breadcrumb" />
                        </div>
                    </div>
                </div>
                <!-- <h3>{{ title }}</h3> -->
                <!-- <div class="mt-sm-1 mt-1"> -->
                    <div class="row">
                        <div class="col-lg-9">
                            <h1 class="mb-1">My Blog</h1>
                            <p class="">Teguh Prasetyo | 10 Juni 2025</p>
                            <div style="display: flex; justify-content: center;">
                              <img class="rounded" :src="post1" alt="" style="object-fit: cover; width: 100%;" loading="lazy" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                            </p>

                            <BlogViewCode title="Header 1" :code="header1Code" id="header-1" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nesciunt quod repellat sed? Tenetur, magnam vel fugiat, natus veniam ipsum facere, laboriosam totam aut eum fugit! Consectetur consequatur voluptates distinctio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum

                            </p>
                        </div>
                        <div class="col-lg-3">
                            <div class="position-sticky" style="top: 100px">
                                <BlogSampingPost />
                            </div>
                        </div>

                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>