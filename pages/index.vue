<script setup>
import { onMounted, onUnmounted, provide } from "vue";

import '~/assets/css/nucleo-icons.css'
import '~/assets/css/nucleo-svg.css'
//images
import vueMkHeader from "~/assets/img/vue-mk-header.jpg";

import projectData from '~/data/myProjects.js'
// const projectData = inject('projectData');
// console.log('projectData:', typeof(projectData));
// app.vue atau layout.vue





provide('projectData', projectData)


//hooks
// const body = document.getElementsByTagName("body")[0];

// onMounted(() => {
// });
onMounted(() => {
    const body = document.body;
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
});
onUnmounted(() => {
    const body = document.body;
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
});

</script>

<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
            <div class="col-12">
                <LandingNavbarDefault :sticky="true" />
            </div>
        </div>
    </div>
    <LandingHeader>
        <div class="page-header min-vh-75"
            :style="`background-image: url(${vueMkHeader});-webkit-filter: brightness(0.9);`" loading="lazy">
            <div class="container">
                <LandingPresentationInformation />
            </div>
        </div>
    </LandingHeader>

    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
        <!-- <PresentationCounter /> -->

        <LandingPresentationExample :data="projectData" />
        <!-- <LandingPresentationPages /> -->
        <LandingAboutTeam />
        <LandingAuthorPosts />
        <!-- <MyAccordion /> -->
        <LandingContact />
    </div>

    <LandingFooterCentered />
</template>