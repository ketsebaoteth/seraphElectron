<script setup>
import { Toaster } from '@/components/ui/sonner'
import createProjectPrompt from './components/createProjectPrompt.vue'
import loginscreen from './components/loginscreen.vue'
import projectDetails from './components/projectDetails.vue'
import recentpros from './components/recentpros.vue'
import titlebar from './components/titlebar.vue'
</script>

<template>
  <div>
    <createProjectPrompt></createProjectPrompt>
    <titlebar />
    <loginscreen />
    <Toaster />
    <recentpros />
    <projectDetails />
  </div>
</template>

<style scoped>
</style>
