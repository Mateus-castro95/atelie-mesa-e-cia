<script setup lang="ts">
// Importação das seções da landing page
import SectionHero from '~/components/SectionHero.vue'
import SectionSobre from '~/components/SectionSobre.vue'
import SectionProdutos from '~/components/SectionProdutos.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <main id="page-index">
    <SectionHero />
    <SectionSobre />
    <SectionProdutos />
    <AppFooter />
  </main>
</template>
