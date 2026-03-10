<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Coleções', to: '/#produtos' },
  { label: 'Todos os Produtos', to: '/todos-os-produtos' },
  { label: 'Contato', to: '/#footer' },
  { label: 'Confeitaria', to: '/confeitaria' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="header" 
    :class="{ 'header--scrolled': isScrolled, 'header--menu-open': isMenuOpen }"
  >
    <div class="header__container">
      <!-- Logo/Ícone no canto esquerdo -->
      <div class="header__logo">
        <div class="logo-circle">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2" />
            <text x="50" y="45" text-anchor="middle" font-family="Arial" font-size="10" letter-spacing="2" fill="currentColor">ATELIÊ</text>
            <path d="M35 55 L65 55" stroke="currentColor" stroke-width="2" />
            <text x="50" y="70" text-anchor="middle" font-family="Arial" font-size="8" letter-spacing="1" fill="currentColor">MESA & CIA</text>
          </svg>
        </div>
      </div>

      <!-- Menu Hambúrguer no canto direito -->
      <button 
        class="header__hamburger" 
        @click="toggleMenu"
        aria-label="Abrir menu"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </button>
    </div>

    <!-- Overlay do Menu Lateral -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay" @click="toggleMenu"></div>
    </Transition>

    <Transition name="slide">
      <nav v-if="isMenuOpen" class="menu-sidebar">
        <div class="menu-sidebar__header">
          <button class="menu-close" @click="toggleMenu" aria-label="Fechar menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <ul class="menu-list">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
            <NuxtLink 
              :to="item.to" 
              class="menu-link" 
              @click="toggleMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="menu-footer">
          <p class="menu-footer-text">Mesa & Cia</p>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header--scrolled {
  padding: 1rem 0;
  background-color: rgba(242, 237, 228, 0.6); /* Mais transparente */
  backdrop-filter: blur(15px) saturate(180%); /* Efeito fosco mais intenso */
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border-bottom: 1px solid rgba(45, 30, 23, 0.05); /* Linha de definição */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
}

.header__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ─── Logo ─── */
.header__logo {
  color: #2D1E17;
  transition: transform 0.3s ease;
}

.logo-circle {
  width: 60px;
  height: 60px;
  opacity: 0.8;
}

.header--scrolled .logo-circle {
  width: 50px;
  height: 50px;
}

/* ─── Hambúrguer ─── */
.header__hamburger {
  background-color: #F2EDE4;
  border: 1px solid rgba(45, 30, 23, 0.05);
  border-radius: 12px;
  cursor: pointer;
  padding: 14px 12px;
  color: #B5A49A;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.header__hamburger:hover {
  transform: translateY(-2px);
  background-color: #EDE7DE;
  color: #2D1E17;
}

.hamburger-box {
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.hamburger-inner {
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 4px;
  position: relative;
}

.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 4px;
  position: absolute;
  left: 0;
}

.hamburger-inner::before {
  top: 8px;
}

.hamburger-inner::after {
  top: 16px;
}

/* Resetando a posição para o novo layout de 3 barras */
.hamburger-inner {
  top: 0;
  transform: none;
}

/* ─── Menu Sidebar ─── */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(45, 30, 23, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1001;
}

.menu-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: #B5A49A; /* Cor baseada na imagem 3 */
  background-image: url('/img/noise.png');
  background-repeat: repeat;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  box-shadow: -10px 0 50px rgba(0, 0, 0, 0.1);
}

.menu-sidebar__header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
}

.menu-close {
  background: none;
  border: none;
  cursor: pointer;
  color: #2D1E17;
  padding: 5px;
  transition: transform 0.3s ease;
}

.menu-close:hover {
  transform: rotate(90deg);
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-item {
  overflow: hidden;
  border-bottom: 1px solid rgba(45, 30, 23, 0.08); /* Linha suave marrom */
}

.menu-item:last-of-type {
  border-bottom: none;
}

.menu-link {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; /* Tamanho reduzido */
  font-weight: 500;
  color: #2D1E17;
  text-decoration: none;
  display: block;
  padding: 1.2rem 0; /* Espaçamento interno para a linha não colar */
  transition: all 0.3s ease;
  opacity: 0.8;
}

.menu-link:hover {
  opacity: 1;
  transform: translateX(10px);
  color: #F2EDE4;
}

.menu-footer {
  margin-top: auto;
  border-top: 1px solid rgba(45, 30, 23, 0.1);
  padding-top: 2rem;
}

.menu-footer-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #2D1E17;
  opacity: 0.5;
}

/* ─── Transições ─── */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

/* ─── Mobile ─── */
@media (max-width: 768px) {
  .menu-sidebar {
    max-width: 85%;
    padding: 2rem 2rem;
  }
  
  .menu-link {
    font-size: 1.2rem; /* Tamanho ainda menor no mobile */
    padding: 1rem 0;
  }
}
</style>
