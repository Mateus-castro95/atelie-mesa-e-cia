<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue'

const treats = [
  { 
    name: 'Brownie Artesanal', 
    description: 'Chocolate intenso e textura irresistível.', 
    image: '/img/brownie.jpg' 
  },
  { 
    name: 'Fatia Húngara', 
    description: 'Massa fofinha com recheio generoso de coco e calda suculenta.', 
    image: '/img/fatia-hungara.jpg' 
  },
  { 
    name: 'Bolo Nega Maluca', 
    description: 'O clássico bolo de chocolate, úmido e com cobertura aveludada de brigadeiro.', 
    image: '/img/nega.jpg' 
  },
  { 
    name: 'Pão Branco Caseiro', 
    description: 'Tradicional pão caseiro, macio por dentro e com aquela casquinha perfeita.', 
    image: '/img/pao-branco.jpg' 
  },
  { 
    name: 'Pão Integral', 
    description: 'Nutritivo e saboroso, produzido com farinha integral e grãos selecionados.', 
    image: '/img/pao-integral.jpg' 
  },
  { 
    name: 'Esfirra Aberta', 
    description: 'Sabor autêntico com massa leve e recheios fresquinhos feitos na hora.', 
    image: '/img/esfirra-aberta.jpg' 
  }
]
</script>

<template>
  <div class="page-wrapper">
    <main class="confectionery-page">
      <div class="container">
        <!-- Cabeçalho da Página -->
        <header class="page-header">
          <h1 class="page-title">Confeitaria</h1>
          <p class="page-description">Doçura e elegância em cada detalhe. Sabores que encantam.</p>
        </header>

        <!-- Grade de Delícias -->
        <div class="treats-grid">
          <article v-for="(treat, index) in treats" :key="index" class="treat-card">
            <div class="treat-card__image-container">
              <img :src="treat.image" :alt="treat.name" class="treat-card__image" />
            </div>
            <div class="treat-card__content">
              <h3 class="treat-card__title">{{ treat.name }}</h3>
              <p class="treat-card__description">{{ treat.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped>
.page-wrapper {
  background-color: #E8E2D9;
  background-image: url('/img/noise.png');
  background-repeat: repeat;
}

.confectionery-page {
  min-height: 100vh;
  padding-top: 12rem;
  padding-bottom: 8rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.page-header {
  text-align: center;
  margin-bottom: 8rem;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 5rem);
  color: #2D1E17;
  margin-bottom: 1.5rem;
}

.page-description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #8A6568;
  letter-spacing: 0.05em;
  max-width: 600px;
  margin: 0 auto;
}

/* ─── Grade de Produtos ─── */
.treats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;
}

.treat-card {
  display: flex;
  flex-direction: column;
}

.treat-card__image-container {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.treat-card:hover .treat-card__image-container {
  transform: translateY(-10px);
}

.treat-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.treat-card:hover .treat-card__image {
  transform: scale(1.05);
}

.treat-card__content {
  text-align: center;
}

.treat-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2D1E17;
  margin-bottom: 0.8rem;
}

.treat-card__description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #4A3B33;
  opacity: 0.9;
}

/* ─── Mobile ─── */
@media (max-width: 1024px) {
  .treats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }
}

@media (max-width: 640px) {
  .confectionery-page {
    padding-top: 10rem;
  }
  
  .page-header {
    margin-bottom: 4rem;
  }

  .treats-grid {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .treat-card__title {
    font-size: 1.6rem;
  }
}
</style>
