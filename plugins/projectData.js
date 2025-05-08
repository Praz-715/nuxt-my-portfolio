// plugins/projectData.ts
import { defineNuxtPlugin } from '#app'
import projectData from '~/data/myProjects.js' // file data kamu
console.log('projectData:', typeof(projectData));

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('projectData', projectData)
})