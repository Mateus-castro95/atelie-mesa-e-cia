<script setup lang="ts">
/**
 * BaseCard — Card padrão para produtos e coleções
 */
defineProps<{
  image: string
  title: string
  subtitle?: string
  buttonText?: string
}>()
</script>

<template>
  <div class="base-card">
    <div class="base-card__image-wrapper">
      <img :src="image" :alt="title" class="base-card__img" loading="lazy" />
      
      <!-- Overlay com Botão (Aparece no Hover) -->
      <div class="base-card__overlay">
        <BaseButton variant="primary">
          {{ buttonText || 'Ver Detalhes' }}
        </BaseButton>
      </div>
    </div>

    <!-- Informações do Card -->
    <div class="base-card__info">
      <h3 class="base-card__title">{{ title }}</h3>
      <p v-if="subtitle" class="base-card__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  width: 100%;
}

.base-card__image-wrapper {
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #F2EDE4;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.base-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.base-card:hover .base-card__img {
  transform: scale(1.08);
}

.base-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 30, 23, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  backdrop-filter: blur(3px);
  padding: 1.5rem;
}

.base-card:hover .base-card__overlay {
  opacity: 1;
}

.base-card__info {
  text-align: center;
}

.base-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #2D1E17;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.base-card__subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #B5A49A;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Ajustes para Mobile */
@media (max-width: 768px) {
  .base-card__title {
    font-size: 1.2rem;
  }
}
</style>
