<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
</script>

<template>
  <!-- Shell principal do app — renderiza as páginas via NuxtPage -->
  <div>
    <AppHeader />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
