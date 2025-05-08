<script setup>
// import ExampleCard from "../Components/ExampleCard.vue";
import { onMounted, onUnmounted, ref } from "vue";
// import MaterialBadge from "../../../components/MaterialBadge.vue";

defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});


const isEnglish = ref(true); // Default bahasa Inggris
const isDesktop = ref(window.innerWidth >= 992); // Cek apakah desktop

// Translations untuk desktop dan mobile
const translations = {
  desktop: {
    en: {
      title: "About Me",
      content: `A systematic thinker with strong organizational skills, meticulous planning, and attention 
                to detail, consistently following established procedures. Proactive, adaptable, and creative 
                in a healthy organizational environment, upholding integrity, teamwork, and a commitment 
                to continuous improvement. Prefers working with standard instructions and structured changes.`,
    },
    id: {
      title: "Tentang Saya",
      content: `Pemikir sistematis yang terorganisir dengan perencanaan matang, fokus pada detail, dan 
                mengikuti prosedur secara konsisten. Proaktif, adaptable, dan kreatif dalam lingkungan 
                organisasi yang sehat, menjunjung tinggi integritas, kerja sama tim, serta berkomitmen 
                pada peningkatan berkelanjutan. Lebih nyaman bekerja dengan instruksi standar dan 
                perubahan yang terstruktur.`,
    },
  },
  mobile: {
    en: {
      title: "About Me",
      content: `A systematic and organized thinker, detail-oriented, and procedural. 
                Proactive, adaptable, and comfortable with structured instructions and changes, upholding integrity and teamwork.`,
    },
    id: {
      title: "Tentang Saya",
      content: `Pemikir sistematis dan terorganisir, fokus pada detail dan prosedur. 
                Proaktif, adaptif, serta nyaman dengan instruksi dan perubahan terstruktur, menjunjung integritas dan kerja sama tim.`,
    },
  },
};

// Reactive teks berdasarkan kondisi bahasa dan ukuran layar
const title = ref("");
const content = ref("");

// Fungsi untuk mengubah teks sesuai ukuran layar
const updateContent = () => {
  const deviceType = isDesktop.value ? "desktop" : "mobile";
  const lang = isEnglish.value ? "en" : "id";
  title.value = translations[deviceType][lang].title;
  content.value = translations[deviceType][lang].content;
};

// Event listener untuk menangani resize dan update konten
onMounted(() => {
  updateContent();
  window.addEventListener("resize", () => {
    isDesktop.value = window.innerWidth >= 992;
    updateContent();
  });
});

// Bersihkan event listener saat komponen dilepas
onUnmounted(() => {
  window.removeEventListener("resize", updateContent);
});
</script>
<script>
export default {
  inheritAttrs: false,
}
</script>
<template>
  <section class="my-5 py-5" id="tentang">
    <div class="container">
      <div class="row justify-content-center">
        <!-- <div class="row "> -->
          <div class="col-lg-8 text-center my-sm-5">
            <div
              class="presentation-container"
              @mouseover="isEnglish = false; updateContent()"
              @mouseleave="isEnglish = true; updateContent()"
            >
              <h2 class="text-dark mb-0">{{ title }}</h2>
              <br />
              <p class="lead">{{ content }}</p>
            </div>
            <!-- <div class="presentation-container" @mouseover="isEnglish = false" @mouseleave="isEnglish = true">
              <h2 class="text-dark mb-0">{{ title }}</h2>
              <br>
              <p class="lead">{{ content }}</p>
            </div> -->
            <!-- <MaterialBadge color="success" class="mb-3"
              >Infinite combinations</MaterialBadge
            > -->

            <!-- <h2 class="text-dark mb-0">Tentang Saya</h2>
            <h2 class="text-dark mb-0">About Me</h2>
            <p class="lead">
              
            </p>
            <p class="lead">
              
            </p> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="container mt-sm-5 mt-3">
      <div v-for="({ heading, description, items }, index) in data"
        :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`" :key="heading">
        <div :class="`${col1 ?? 'col-lg-3'}`">
          <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
            <h3>{{ heading }}</h3>
            <h6 class="text-secondary font-weight-normal pe-3">
              {{ description }}
            </h6>
          </div>
        </div>
        <div :class="`${col2 ?? 'col-lg-9'}`">
          <div :class="`row ${index != 0 ? 'mt-3' : ''}`">
            <div class="col-md-4 mt-md-0" v-for="{ image, title, subtitle, route, pro, projectId } in items"
              :key="title">
              <ExampleCard class="min-height-160 shadow-lg" :image="image" :title="title" :subtitle="subtitle"
                :route="route" :projectId="projectId" :pro="pro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: Smooth transition for better UX */
.presentation-container p {
  transition: all 0.3s ease-in-out;
}
</style>