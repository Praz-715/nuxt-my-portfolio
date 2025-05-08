<script setup>
// example component
// import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
// const wavesWhite = new URL('@/assets/img/waves-white.svg', import.meta.url).href;
import wavesWhite from "/waves-white.svg";

import logoYasatech from "@/assets/img/logos/logo-yasatech.png";
import logoSpi from "@/assets/img/logos/logo-spi.png";
import logoPinet from "@/assets/img/logos/logo-pinet.png";



</script>

<template>
  <section class="pb-5 position-relative mx-n3" >
    <div
      class="container mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
    <div class="row">
      <div class="col-md-8 text-start mb-5 mt-5">
        <h3 class="text-white z-index-1 position-relative">
          Work Experience
        </h3>
        <p class="text-white opacity-8 mb-0">
          My career background reflects a deep understanding of enterprise solutions.
        </p>
      </div>
    </div>
    <!-- <div class="row"> -->
        <div
          class="row bg-lima-custom py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
          :style="{
            backgroundImage: `url(${wavesWhite})`,
          }"
          loading="lazy"
        >
        <div class="col-6 mx-auto">
          <HorizontalTeamCard class="mt-4" :image="logoYasatech" :profile="{ name: 'PT Yasatech Sinergi Inspirasi', link: 'https://yasatech.co.id/' }"
            :position="{ label: 'Technical Consultant Database', color: 'success' }" description="Apr 2025 - now" />
        </div>
        <!-- <div class="col-6">
          <HorizontalTeamCard class="mt-4" :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }" :position="{ label: 'Boss', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art." />
        </div> -->
      </div>
      <div class="row mt-4 bg-lima-custom py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
          :style="{
            backgroundImage: `url(${wavesWhite})`,
          }"
          loading="lazy">
        <div class="col-6">
          <HorizontalTeamCard class="mt-4 z-index-2" :image="logoPinet"
            :profile="{ name: 'PT Prima Integrasi Network', link: 'https://prima-integrasi.co.id/' }" :position="{ label: 'Database Administrator', color: 'success' }"
            description="Jun 2022 - Mar 2025" />
        </div>
        <div class="col-6">
          <HorizontalTeamCard class="mt-4 z-index-2" :image="logoSpi"
            :profile="{ name: 'PT Securindo Packatama Indonesia', link: 'https://prima-integrasi.co.id/' }"
            :position="{ label: 'IT System Support', color: 'success' }" description="Nov 2017 - Jun 2022" />
        </div>
      </div>
    </div>
    <!-- </div>   -->
  </section>
</template>
<style>
.bg-lima-custom {
  background-size: cover;
  background-position: center;
}

</style>
