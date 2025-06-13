<script setup>
// import { NuxtLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "~/assets/js/useWindowsWidth";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://github.com/Praz-715",
      color: "bg-gradient-success",
      label: "Go Dashboard",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
  }">
    <div :class="props.transparent || props.light || props.dark
        ? 'container'
        : 'container-fluid px-0'
      ">
      <NuxtLink class="navbar-brand d-none d-md-block" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark font-weight-bolder ms-sm-3'
          : 'text-white font-weight-bolder ms-sm-3',
      ]" to="/">
        Om Guh DBA
      </NuxtLink>
      <NuxtLink class="navbar-brand d-block d-md-none" :class="props.transparent || props.dark
          ? 'text-white'
          : 'font-weight-bolder ms-sm-3'
        " to="/">
        Om Guh DBA
      </NuxtLink>
      <!-- <a
        href="https://www.creative-tim.com/product/vue-material-kit-pro"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
        >Buy Now</a
      > -->
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
        data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <!-- <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation"> -->
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link text-dark font-weight-bolder rounded hover-bg" to="/">
              Home
            </NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link text-dark font-weight-bolder rounded hover-bg" to="/" v-scroll-to="'tentang'">
              About Me</NuxtLink>
          </li> -->
          <li class="nav-item">
            <NuxtLink class="nav-link text-dark font-weight-bolder rounded hover-bg" to="/myblog">Blog
            </NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link text-dark font-weight-bolder rounded hover-bg" to="/" v-scroll-to="'#contactUs'">
              Contact Us</NuxtLink>
          </li> -->
        </ul>
        <ul class="nav navbar-nav mx-1">
          <li class="nav-item  mx-0">
            <a class="nav-link d-flex cursor-pointer align-items-center rounded  hover-bg"
              href="https://www.facebook.com/th.teguh">
              <!-- <i class="fab fa-facebook"></i> -->
              <svg width="20px" height="20px" class="material-icons mx-1 opacity-6" viewBox="0 0 24 24"
                aria-hidden="true" data-testid="GitHubIcon" :fill="props.transparent && '#fff'">
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="#0F0F0F" />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="#0F0F0F" />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="#0F0F0F" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="#0F0F0F" />
              </svg>
              <span id="text-nav-right" class="d-block d-lg-none">
                LinkedIn
              </span>
            </a>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-0">
            <a class="nav-link d-flex cursor-pointer align-items-center rounded  hover-bg"
              href="https://www.instagram.com/th.teguh">
              <!-- <i class="fab fa-instagram"></i> -->
              <svg width="20px" height="20px" class="material-icons mx-1 opacity-6" viewBox="0 0 24 24"
                aria-hidden="true" data-testid="GitHubIcon" :fill="props.transparent && '#fff'">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#0F0F0F" />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#0F0F0F" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#0F0F0F" />
              </svg>
              <span id="text-nav-right" class="d-block d-lg-none">
                Instagram
              </span>
            </a>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-0">
            <a href="https://github.com/Praz-715"
              class="nav-link d-flex cursor-pointer align-items-center rounded  hover-bg">
              <svg width="20px" height="20px" class="material-icons mx-1 opacity-6" viewBox="0 0 24 24"
                aria-hidden="true" data-testid="GitHubIcon" :fill="props.transparent && '#fff'">
                <path
                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                </path>
              </svg>
              <span id="text-nav-right" class="d-block d-lg-none">
                Github
              </span>
              <!-- Github -->
            </a>
          </li>
        </ul>


      </div>
      <!-- </div> -->
    </div>
  </nav>
  <!-- End Navbar -->
</template>
<style scoped>
.hover-bg:hover {
  background-color: #f8f9fa;
}
</style>