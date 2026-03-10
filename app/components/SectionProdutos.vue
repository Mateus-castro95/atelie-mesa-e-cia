<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const scrollContainer = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const products = [
  { id: 1, name: 'Caminho de Mesa Orquídea', price: 'R$ 189,00', image: '/img/mesa-inicio.jpg' },
  { id: 2, name: 'Jogo Americano Linho', price: 'R$ 145,00', image: '/img/secao-sobre.jpg' },
  { id: 3, name: 'Guardanapo Bordado', price: 'R$ 42,00', image: '/img/mesa-inicio.jpg' },
  { id: 4, name: 'Sousplat Dourado', price: 'R$ 98,00', image: '/img/secao-sobre.jpg' },
  { id: 5, name: 'Anel de Guardanapo Pérola', price: 'R$ 35,00', image: '/img/mesa-inicio.jpg' },
  { id: 6, name: 'Toalha de Mesa Festiva', price: 'R$ 320,00', image: '/img/secao-sobre.jpg' },
]

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  const scrollAmount = 350
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section id="produtos" ref="sectionRef" class="products" :class="{ 'is-active': isVisible }">
    <!-- Divisor Elegante: Fio Dourado -->
    <div class="section-divider"></div>

    <div class="products__header animate-slide-up">
      <span class="products__label">PARA SUA MESA</span>
      <h2 class="products__title">Nossas Coleções</h2>
    </div>

    <!-- Container de Rolagem Horizontal con Nav -->
    <div class="products__wrapper">
      <!-- Botão Esquerdo -->
      <button class="products__nav products__nav--left" @click="scroll('left')" aria-label="Rolar para esquerda">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div ref="scrollContainer" class="products__scroll-container animate-fade-in">
        <div class="products__track">
          <BaseCard
            v-for="(product, index) in products" 
            :key="product.id"
            :image="product.image"
            :title="product.name"
            :subtitle="product.price"
            button-text="Ver Detalhes"
            class="product-item"
            :style="{ transitionDelay: `${0.2 + (index * 0.1)}s` }"
          />
        </div>
      </div>

      <!-- Botão Direito -->
      <button class="products__nav products__nav--right" @click="scroll('right')" aria-label="Rolar para direita">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Botão de Ver Todos -->
    <div class="products__footer animate-slide-up">
      <BaseButton variant="primary" @click="() => navigateTo('/todos-os-produtos')">
        Conhecer todos os produtos
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: 10rem 0;
  background-color: #EDE7DE;
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  overflow: hidden;
  position: relative;
}

/* Divisor Fio Dourado */
.section-divider {
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg, 
    rgba(212, 175, 55, 0) 0%, 
    rgba(212, 175, 55, 0.8) 50%, 
    rgba(212, 175, 55, 0) 100%
  );
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  z-index: 5;
}

.products__header {
  padding: 0 5%;
  margin-bottom: 5rem;
  text-align: center;
}

.products__label {
  display: block;
  font-family: Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: #B5A49A;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.products__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #2D1E17;
  line-height: 1.1;
}

/* ─── Wrapper e Navegação ─── */
.products__wrapper {
  position: relative;
  width: 100%;
}

.products__nav {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(45, 30, 23, 0.2);
  background-color: rgba(237, 231, 222, 0.4);
  backdrop-filter: blur(8px);
  color: #2D1E17;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  transition: all 0.4s ease;
  padding: 0;
}

.products__nav svg {
  width: 24px;
  height: 24px;
}

.products__nav:hover {
  background-color: rgba(45, 30, 23, 0.8);
  color: #EDE7DE;
  border-color: #2D1E17;
  transform: translateY(-50%) scale(1.1);
}

.products__nav--left {
  left: 2rem;
}

.products__nav--right {
  right: 2rem;
}

/* ─── Rolagem Horizontal ─── */
.products__scroll-container {
  width: 100%;
  overflow-x: auto;
  padding: 2rem 5% 5rem 5%;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.products__scroll-container::-webkit-scrollbar {
  display: none;
}

.products__track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
}

/* ─── Product Item (BaseCard Wrapper) ─── */
.product-item {
  width: 320px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.products.is-active .product-item {
  opacity: 1;
  transform: translateY(0);
}

.products__footer {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

/* ─── Animações Base ─── */
.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.animate-fade-in {
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  transition-delay: 0.3s;
}

.products.is-active .animate-slide-up {
  opacity: 1;
  transform: translateY(0);
}

.products.is-active .animate-fade-in {
  opacity: 1;
}

/* ─── Mobile ─── */
@media (max-width: 1024px) {
  .products {
    padding: 6rem 0;
  }
  
  .product-item {
    width: 260px;
  }
  
  .products__title {
    font-size: 2.2rem;
  }

  .products__nav {
    display: none;
  }

  .products__scroll-container {
    padding: 1rem 1.5rem 3rem 1.5rem;
  }
}
</style>
