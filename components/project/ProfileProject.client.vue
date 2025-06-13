<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bruce-mars.jpg";
import image from "~/assets/img/myproject/jsc.png";

// material-input
import setMaterialInput from "@/assets/js/material-input";


defineProps({
  project: {
    type: Object,
    default: () => ({
      image: image,
      title: "My Project",
      subtitle: "This is my project",
      slug: "my-project",
      projectId: "my-project-1",
      route: "my-project",
      pro: false,
      pekerjaan: {}
    }),
  },
  pro: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "300  position-relative",
  },
});
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mt-n8 mt-md-n9 d-flex justify-content-center">
            <div class="blur-shadow-avatar">
              <div class="card move-on-hover" style="width: 18rem;">
                <img class="w-100 shadow-xl position-relative z-index-2" :class="pro && 'opacity-6'"
                  :src="project.image" :alt="title" loading="lazy" style="object-fit: cover;" />
              </div>
            </div>
          </div>
          <!-- </div> -->

          <div class="row py-4">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">

              <!-- <div class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"> -->
              <div class="border-bottom">
                <div class="row justify-space-between py-2">
                  <div class="col-lg-10 me-auto">
                    <!-- <p class="lead text-dark pt-1 mb-0">{{ project.subtitle }}</p> -->
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h3 class="mb-0">{{ project.title }}</h3>
                      <!-- <div class="d-block">
                        <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                        </MaterialButton>
                      </div> -->
                    </div>
                    <div class="row mb-4">
                      <div class="col-auto">
                        <span class="h6 me-1">{{ project.subtitle }}</span>
                        <!-- <span>Posts</span> -->
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="nav-wrapper position-relative end-0">
                      <ul class="nav nav-pills nav-fill flex-row p-1" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#lang-id" role="tab"
                            aria-selected="true">
                            EN
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#lang-en" role="tab"
                            aria-selected="false">
                            ID
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-content tab-space">
                <div class="tab-pane active p-2" id="lang-id">
                  <div class="overflow-auto" :class="`${height && `height-${height}`}`">

                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" v-for="(pekerjaan, index) in project.pekerjaan.en" :key="index"> {{
                        pekerjaan }}</li>
                    </ul>
                    <!-- <h1>Job</h1> -->
                  </div>
                </div>
                <div class="tab-pane p-2" id="lang-en">
                  <!-- <div class="position-relative p-4 pb-2"> -->
                  <div class="overflow-auto" :class="`${height && `height-${height}`}`">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" v-for="(pekerjaan, index) in project.pekerjaan.id" :key="index"> {{
                        pekerjaan }}</li>
                    </ul>
                    <!-- <h1>Hello</h1> -->
                  </div>
                  <!-- </div> -->
                </div>
              </div>
              <!-- <p class="text-lg mb-0">
                Decisions: If you can’t decide, the answer is no. If two equally
                difficult paths, choose the one more painful in the short term
                (pain avoidance is creating an illusion of equality). Choose the
                path that leaves you more equanimous.
                <br /><a href="javascript:;" class="text-success icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nav.nav-pills {
  background: #f2f2f2;
}

.nav-pills .nav-link.active {
  background-color: white !important;
  color: #344767 !important;
  border-radius: 0.375rem;
}
</style>
